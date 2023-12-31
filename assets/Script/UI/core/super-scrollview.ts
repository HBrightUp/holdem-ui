import SuperLayout from "./super-layout";

const { ccclass, property } = cc._decorator;

const quintEaseOut = (time: number) => {
    time -= 1;
    return (time * time * time * time * time + 1)
};
const EPSILON = 1e-4
const OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
var _tempVec2 = new cc.Vec2()
export enum ScrollViewDirection {
    HORIZONTAL,
    VERTICAL,
    NONE,
}

@ccclass
export default class SuperScrollview extends cc.ScrollView {
    private direction: ScrollViewDirection = ScrollViewDirection.NONE
    private _layout: SuperLayout
    @property({
        tooltip: "注意！向上传递事件只会发送当前滑动相反方向,如果开启horizontal则会发送vertical事件。如果开启vertical则会发送horizontal事件。同时开启horizontal和vertical 不会发送任何事件"
    }) isTransmitEvent: boolean = false

    @property({
        tooltip: "设置鼠标滚动速度"
    }) scrollSpeed: number = 0.2

    @property pullRefresh: boolean = false
    @property({
        displayName: "顶部偏移量",
        tooltip: "下拉时超过此偏移会发送下拉事件",
        visible: function () { return (this as any).pullRefresh }
    }) headerOutOffset: number = 200
    @property({
        displayName: "满足触发Header的倍数",
        visible: function () { return (this as any).pullRefresh }
    }) headerMultiple: number = 2
    @property({
        displayName: "底部偏移量",
        tooltip: "上拉时超过此偏移会发送上拉事件",
        visible: function () { return (this as any).pullRefresh }
    }) footerOutOffset: number = 200
    @property({
        displayName: "满足触发Footer的倍数",
        visible: function () { return (this as any).pullRefresh }
    }) footerMultiple: number = 2
    @property({
        type: cc.Component.EventHandler,
        visible: function () { return (this as any).pullRefresh }
    }) headerEvents: cc.Component.EventHandler[] = []
    @property({
        type: cc.Component.EventHandler,
        visible: function () { return (this as any).pullRefresh }
    }) footerEvents: cc.Component.EventHandler[] = []
    prevLocation: cc.Vec2 = new cc.Vec2()
    location: cc.Vec2 = new cc.Vec2()
    set autoScrolling(value: boolean) { (this as any)._autoScrolling = value }
    private _touchBeganPosition = new cc.Vec2()
    private _touchEndPosition = new cc.Vec2()
    private isMoveHeader: boolean = false
    private isMoveFooter: boolean = false
    private isLockHeader: boolean = false
    private isLockFooter: boolean = false
    private headerProgress: number = 0
    private footerProgress: number = 0
    private isCustomScroll: boolean = false
    canTouchMove: boolean = true
    get view(): cc.Node { return this["_view"] }
    onLoad() {
        if (this.layout && this.layout.autoCenter) {
            this.brake = 0.7
        }
    }
    public onEnable() {
        super.onEnable()
        this.node.on("scroll-ended-with-threshold", this.dispatchPageTurningEvent, this)
    }
    public onDisable() {
        super.onDisable()
        this.node.off("scroll-ended-with-threshold", this.dispatchPageTurningEvent, this)
    }
    get layout() {
        if (!this._layout) {
            this._layout = this.content && this.content.getComponent(SuperLayout)
        }
        return this._layout
    }
    private isCallSoonFinish: boolean = false
    get _curPageIdx() {
        return this.layout["_currPageIndex"]
    }
    getPages() {
        return new Array(this.layout.itemTotal)
    }
    protected _getContentTopBoundary() {
        if (!this.content) {
            return -1
        }
        let offset = this.layout.isOfTopBoundary == 0 ? this["_topBoundary"] : this.layout.isOfTopBoundary
        return offset
    }
    protected _getContentBottomBoundary() {
        if (!this.content) {
            return -1
        }
        let offset = this.layout.isOfButtomBoundary == 0 ? this["_bottomBoundary"] : this.layout.isOfButtomBoundary
        return offset
    }
    protected _getContentLeftBoundary() {
        if (!this.content) {
            return -1
        }
        let offset = this.layout.isOfLeftBoundary == 0 ? this["_leftBoundary"] : this.layout.isOfLeftBoundary
        return offset
    }
    protected _getContentRightBoundary() {
        if (!this.content) {
            return -1
        }
        let offset = this.layout.isOfRightBoundary == 0 ? this["_rightBoundary"] : this.layout.isOfRightBoundary
        return offset
    }

    protected _onTouchBegan(event: cc.Event.EventTouch, captureListeners?: Node[]) {
        this.isCallSoonFinish = false
        this.isCustomScroll = false
        this.layout["onTouchBegin"]()
        if (!this.canTouchMove) return
        this.direction = ScrollViewDirection.NONE
        if (this.layout.isPageView) {
            _tempVec2 = event.getLocation()
            // cc.Vec2.set(this._touchBeganPosition, _tempVec2.x, _tempVec2.y)
            this._touchBeganPosition = cc.v2(_tempVec2.x, _tempVec2.y)
        }
        super["_onTouchBegan"](event, captureListeners)
        if (this.isTransmitEvent) {
            this.transmitEvent(event, cc.Node.EventType.TOUCH_START)
        }
    }
    protected _onTouchMoved(event: cc.Event.EventTouch, captureListeners: any) {
        this.isCallSoonFinish = false
        this.isCustomScroll = false

        if (!this.canTouchMove) return
        if (this.isTransmitEvent) {
            if (this.direction == ScrollViewDirection.NONE) {
                var start = event.getStartLocation()
                var curre = event.getLocation()
                var xOffset = Math.abs(start.x - curre.x)
                var yOffset = Math.abs(start.y - curre.y)
                if (xOffset > yOffset) {
                    // 本ScrollView滑动方向过程中达到一定偏移量是也可以向上发送事件
                    // if (this.vertical) {
                    //     if (xOffset - yOffset > 50) {
                    //         this.direction = UIScrollViewDirection.HORIZONTAL
                    //     }
                    // }
                    this.direction = ScrollViewDirection.HORIZONTAL

                } else if (yOffset > xOffset) {
                    // 本ScrollView滑动方向过程中达到一定偏移量是也可以向上发送事件
                    // if (this.horizontal) {
                    //     if (yOffset - xOffset > 50) {
                    //         this.direction = UIScrollViewDirection.VERTICAL
                    //     }
                    // } 
                    this.direction = ScrollViewDirection.VERTICAL
                }
            }
            var canTransmit = (this.vertical && this.direction === ScrollViewDirection.HORIZONTAL) || this.horizontal && this.direction == ScrollViewDirection.VERTICAL
            if (canTransmit) {
                this.transmitEvent(event, cc.Node.EventType.TOUCH_MOVE)
                event.stopPropagation()
                return
            }
        }
        this.prevLocation = event.touch.getPreviousLocation()
        this.location = event.touch.getLocation()
        super["_onTouchMoved"](event, captureListeners)
        if (this.pullRefresh) {
            let outOfBoundary = this["_getHowMuchOutOfBoundary"]()
            let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
            if (offset > 0 && !this.isLockHeader && !this.isLockFooter) {
                this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset
                this.isMoveHeader = this.headerProgress >= this.headerMultiple
                cc.Component.EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: this.headerProgress, stage: this.isMoveHeader ? "wait" : "touch" })
                cc.Component.EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: 0, stage: "release" })
            } else if (offset < 0 && !this.isLockHeader && !this.isLockFooter) {
                this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset
                this.isMoveFooter = this.footerProgress >= this.footerMultiple
                cc.Component.EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: this.footerProgress, stage: this.isMoveFooter ? "wait" : "touch" })
                cc.Component.EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: 0, stage: "release" })
            } else if (offset == 0 && !this.isLockHeader && !this.isLockFooter) {
                this.clearProgress()
            }
        }
    }

    protected _onTouchEnded(event: cc.Event.EventTouch, captureListeners: any) {
        this.isCallSoonFinish = false
        this.isCustomScroll = false
        if (!this.canTouchMove) return
        if (this.layout.isPageView) {
            _tempVec2 = event.getLocation()
            // cc.Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y)
            this._touchEndPosition = cc.v2(_tempVec2.x, _tempVec2.y)
        }
        super["_onTouchEnded"](event, captureListeners)
        if (this.isTransmitEvent) {
            this.transmitEvent(event, cc.Node.EventType.TOUCH_END)
        }
    }
    protected _onTouchCancelled(event: cc.Event.EventTouch, captureListeners: any) {
        this.isCallSoonFinish = false
        this.isCustomScroll = false
        if (!this.canTouchMove) return
        if (this.layout.isPageView) {
            _tempVec2 = event.getLocation()
            // cc.Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y)
            this._touchEndPosition = cc.v2(_tempVec2.x, _tempVec2.y)
        }
        if (this.isTransmitEvent) {
            this.transmitEvent(event, cc.Node.EventType.TOUCH_CANCEL)
        }
        super["_onTouchCancelled"](event, captureListeners)
    }
    scrollToAny(moveDelta: cc.Vec2, timeInSecond?: number, attenuated: boolean = true) {
        this.isCustomScroll = true
        if (timeInSecond) {
            this._startAutoScroll(moveDelta, timeInSecond, attenuated, true)
        } else {
            this["_moveContent"](moveDelta)
        }
    }
    release() {
        this.isMoveHeader = false
        this.isMoveFooter = false
        if (this.isLockHeader || this.isLockFooter) {
            this.vertical && this.isLockHeader && (this["_topBoundary"] += this.headerOutOffset)
            this.vertical && this.isLockFooter && (this["_bottomBoundary"] -= this.footerOutOffset)
            this.horizontal && this.isLockHeader && (this["_leftBoundary"] -= this.headerOutOffset)
            this.horizontal && this.isLockFooter && (this["_rightBoundary"] += this.footerOutOffset)
            this.clearProgress()
            this.layout["onPositionChanged"]()
            this.isLockHeader = false
            this.isLockFooter = false
            this.startAutoScroll()
        }
    }
    startAutoScroll() {
        this["_autoScrolling"] = true
        this["_outOfBoundaryAmountDirty"] = true
    }
    protected _startAutoScroll(deltaMove: any, timeInSecond: any, attenuated: any, flag: boolean = false) {
        if (this.pullRefresh) {  // 如果没有刷新/加载的监听者 则不计算 
            if (this.isMoveHeader && !this.isLockHeader) {
                if (this.vertical) {
                    this["_topBoundary"] -= this.headerOutOffset
                    deltaMove.y -= this.headerOutOffset
                }
                if (this.horizontal) {
                    this["_leftBoundary"] += this.headerOutOffset
                    deltaMove.x += this.headerOutOffset
                }
                this.isLockHeader = true
                cc.Component.EventHandler.emitEvents(this.headerEvents, this, { action: true, progress: this.headerProgress, stage: 'lock' })
            } else if (this.isMoveFooter && !this.isLockFooter) {
                if (this.vertical) {
                    this["_bottomBoundary"] += this.footerOutOffset
                    deltaMove.y += this.footerOutOffset
                }
                if (this.horizontal) {
                    this["_rightBoundary"] -= this.footerOutOffset
                    deltaMove.x -= this.footerOutOffset
                }
                this.isLockFooter = true
                cc.Component.EventHandler.emitEvents(this.footerEvents, this, { action: true, progress: this.footerProgress, stage: 'lock' })
            }
            // else {
            //     if (this.pullRefresh && this.isLockHeader && this.isMoveHeader) {
            //         this.release();
            //         cc.Component.EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: this.headerProgress, stage: 'release' })
            //         return
            //     }  
    
            //     if (this.pullRefresh && this.isLockFooter && this.isMoveFooter) {
            //         this.release();
            //         cc.Component.EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: this.footerProgress, stage: 'release' })
            //         return
            //     }
            // }
        }

        super["_startAutoScroll"](deltaMove, timeInSecond, attenuated)
        if (!flag && this.layout.autoCenter) {
            const touchMoveVelocity = this["_calculateTouchMoveVelocity"]()
            if (!this.isQuicklyScrollable(touchMoveVelocity)) {
                this.soonFinish()
            }
        }
    }
    protected _updateScrollBar(outOfBoundary: any) {
        super["_updateScrollBar"](cc.v2(outOfBoundary.x, outOfBoundary.y))
        if (this["_autoScrollBraking"]){
            // console.log("Super-Scroll ==========00 ");
            return // 自动回弹时不计算 （非手动）
        } 
        
        if (!this["_autoScrolling"]) {
            // console.log("Super-Scroll ==========01 ");  
            return // 非自动滚动时不计算 
        }
        if (!this.pullRefresh) {
            // console.log("Super-Scroll ==========02 ");
            return
        } 
        let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
        if (offset > 0) { // 下滑
            let progress = offset < EPSILON ? 0 : offset / this.headerOutOffset //根据参数 headerOutOffset 计算当前下滑的办百分比
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1)
                cc.Component.EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: this.headerProgress, stage: "lock" })
            } else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress
                cc.Component.EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: this.headerProgress, stage: "release" })
            }
        } else if (offset < 0) {
            let progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset  //根据参数 footerOutOffset 计算当前下滑的办百分比
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1)
                cc.Component.EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: this.footerProgress, stage: "lock" })
            } else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress
                cc.Component.EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: this.footerProgress, stage: "release" })
            }
        } else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
            if (!this.isLockHeader && !this.isLockFooter) {
                this.clearProgress()
            }
        }
    }
    private clearProgress() {
        cc.Component.EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: 0, stage: "release" })
        cc.Component.EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: 0, stage: "release" })
    }
    private dispatchPageTurningEvent() {
        if (this.layout["_lastPageIndex"] === this.layout["_currPageIndex"]) return
        this.layout["_lastPageIndex"] = this.layout["_currPageIndex"]
        cc.Component.EventHandler.emitEvents(this.layout.pageEvents, this, "page-turning")
        this.node.emit("page-turning", this)
    }

    protected _handleReleaseLogic(touch: any) {
        if (this.layout.isPageView) {
            this._autoScrollToPage();
            if (this["_scrolling"]) {
                this["_scrolling"] = false;
                if (!this["_autoScrolling"]) {
                    this["_dispatchEvent"](cc.ScrollView.EventType.SCROLL_ENDED);
                }
            }
        } else {
            super["_handleReleaseLogic"](touch)
        }

    }
    protected _autoScrollToPage() {
        const bounceBackStarted = this["_startBounceBackIfNeeded"]();
        if (bounceBackStarted) {
            const bounceBackAmount = this["_getHowMuchOutOfBoundary"]()
            this["_clampDelta"](bounceBackAmount)
            if (bounceBackAmount.x > 0 || bounceBackAmount.y < 0) {
                if (this.layout.horizontal) {
                    if (this.layout.horizontalAxisDirection == SuperLayout.HorizontalAxisDirection.LEFT_TO_RIGHT) {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    } else {
                        this.layout["_currPageIndex"] = 0
                    }
                } else {
                    if (this.layout.verticalAxisDirection == SuperLayout.VerticalAxisDirection.TOP_TO_BOTTOM) {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    } else {
                        this.layout["_currPageIndex"] = 0
                    }
                }
            }
            if (bounceBackAmount.x < 0 || bounceBackAmount.y > 0) {
                if (this.layout.horizontal) {
                    if (this.layout.horizontalAxisDirection == SuperLayout.HorizontalAxisDirection.LEFT_TO_RIGHT) {
                        this.layout["_currPageIndex"] = 0
                    } else {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    }
                } else {
                    if (this.layout.verticalAxisDirection == SuperLayout.VerticalAxisDirection.TOP_TO_BOTTOM) {
                        this.layout["_currPageIndex"] = 0
                    } else {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    }
                }
            }
            if (this.layout.indicator) {
                this.layout.indicator["_changedState"]()
            }
        } else {
            const moveOffset = new cc.Vec2()
            // cc.Vec2.subtract(moveOffset, this._touchBeganPosition, this._touchEndPosition)
            moveOffset.x = this._touchBeganPosition.x - this._touchEndPosition.x
            moveOffset.y = this._touchBeganPosition.y - this._touchEndPosition.y


            const index = this.layout["_currPageIndex"]
            var nextIndex = index + this.getDragDirection(moveOffset)
            var timeInSecond = this.layout.pageTurningSpeed * Math.abs(index - nextIndex)
            if (this.layout.footerLoop) {
                if (nextIndex >= this.layout.itemTotal) {
                    nextIndex = 0
                }
            }
            if (this.layout.headerLoop) {
                if (nextIndex < 0) {
                    nextIndex = this.layout.itemTotal - 1
                }
            }
            const count = this.layout.itemTotal
            if (nextIndex < count) {
                if (this.isScrollable(moveOffset, index, nextIndex)) {
                    this.scrollToPage(nextIndex, timeInSecond)
                    return;
                } else {
                    const touchMoveVelocity = this["_calculateTouchMoveVelocity"]()
                    if (this.isQuicklyScrollable(touchMoveVelocity)) {
                        this.scrollToPage(nextIndex, timeInSecond)
                        return;
                    }
                }
            }
            this.scrollToPage(index, timeInSecond)
        }
    }
    savePageIndex(idx: number) {
        if (idx < 0 || idx >= this.layout.itemTotal) {
            return false
        }
        this.layout["_currPageIndex"] = idx
        if (this.layout.indicator) {
            this.layout.indicator["_changedState"]()
        }
        return true
    }
    protected scrollToPage(idx: number, timeInSecond = 0.3) {
        if (idx < 0 || idx >= this.layout.itemTotal) {
            return
        }
        if (this.savePageIndex(idx)) {
            this.layout.scrollToIndex(idx, timeInSecond)
        }
    }
    // 快速滑动
    protected isQuicklyScrollable(touchMoveVelocity: cc.Vec3) {
        if (this.horizontal) {
            if (Math.abs(touchMoveVelocity.x) > this.layout.autoPageTurningThreshold) {
                return true;
            }
        } else if (this.vertical) {
            if (Math.abs(touchMoveVelocity.y) > this.layout.autoPageTurningThreshold) {
                return true;
            }
        }
        return false;
    }
    protected getDragDirection(moveOffset: cc.Vec2) {
        if (this.horizontal) {
            if (moveOffset.x === 0) {
                return 0;
            }
            if (this.layout.horizontalAxisDirection == SuperLayout.HorizontalAxisDirection.LEFT_TO_RIGHT) {
                return (moveOffset.x > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            } else {
                return (moveOffset.x < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            }
        } else {
            // 由于滚动 Y 轴的原点在在右上角所以应该是小于 0
            if (moveOffset.y === 0) {
                return 0;
            }
            if (this.layout.verticalAxisDirection == SuperLayout.VerticalAxisDirection.TOP_TO_BOTTOM) {
                return (moveOffset.y < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            } else {
                return (moveOffset.y > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            }
        }
    }
    // 是否超过自动滚动临界值
    protected isScrollable(offset: cc.Vec2, index: number, nextIndex: number) {
        const viewTrans = this.view
        if (!viewTrans) {
            return false
        }
        if (this.horizontal) {
            return Math.abs(offset.x) >= viewTrans.width * this.layout.scrollThreshold
        } else if (this.vertical) {
            return Math.abs(offset.y) >= viewTrans.height * this.layout.scrollThreshold
        }
        return false;
    }
    protected transmitEvent(event: any, eventType: string) {
        var e = new cc.Event.EventTouch(event.getTouches(), event.bubbles)
        e.type = eventType
        e.touch = event.touch
        let target: any = event.target
        target.parent.dispatchEvent(e)
    }
    private soonFinish() {
        this.isCallSoonFinish = true
        this.layout["soonFinish"]()
    }
    protected _processAutoScrolling(dt: number) {
        let isAutoScrollBrake = this["_isNecessaryAutoScrollBrake"]();
        let brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
        this["_autoScrollAccumulatedTime"] += dt * (1 / brakingFactor);

        let percentage = Math.min(1, this["_autoScrollAccumulatedTime"] / this["_autoScrollTotalTime"]);
        if (this["_autoScrollAttenuate"]) {
            percentage = quintEaseOut(percentage);
        }

        let newPosition = this["_autoScrollStartPosition"].add(this["_autoScrollTargetDelta"].mul(percentage));
        let reachedEnd = Math.abs(percentage - 1) <= EPSILON;

        let fireEvent = Math.abs(percentage - 1) <= this["getScrollEndedEventTiming"]();
        if (fireEvent && !this["_isScrollEndedWithThresholdEventFired"]) {
            this["_dispatchEvent"]('scroll-ended-with-threshold');
            this["_isScrollEndedWithThresholdEventFired"] = true;
        }

        if (this.elastic) {
            let brakeOffsetPosition = newPosition.sub(this["_autoScrollBrakingStartPosition"]);
            if (isAutoScrollBrake) {
                brakeOffsetPosition = brakeOffsetPosition.mul(brakingFactor);
            }
            newPosition = this["_autoScrollBrakingStartPosition"].add(brakeOffsetPosition);
        } else {
            let moveDelta = newPosition.sub(this.getContentPosition());
            let outOfBoundary = this["_getHowMuchOutOfBoundary"](moveDelta);
            if (!outOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
                newPosition = newPosition.add(outOfBoundary);
                reachedEnd = true;
            }
        }

        if (reachedEnd) {
            this["_autoScrolling"] = false;
        }
        if (this.layout.autoCenter && !this.isCallSoonFinish && !this.isCustomScroll) {
            if (this["_autoScrollTotalTime"] < 2 || percentage >= 0.8) {
                this.soonFinish()
            }
        }
        let deltaMove = newPosition.sub(this.getContentPosition());
        this["_moveContent"](this["_clampDelta"](deltaMove), reachedEnd);
        this["_dispatchEvent"]('scrolling');
        if (!this["_autoScrolling"]) {
            this["_isBouncing"] = false;
            this["_scrolling"] = false;
            this["_dispatchEvent"]('scroll-ended');
        }
    }
    _handleMoveLogic (touch) {
        let self = this;
        let deltaMove = touch.getDelta();
        //给默认的移动速度×自定义速率
        self._processDeltaMove(deltaMove.div(this.scrollSpeed));// 拖动不用加速，这里先除以
    }
    // 拖动和鼠标滚动 都走这里
    _processDeltaMove (deltaMove) {
        //给默认的移动速度×自定义速率
        let self = this;
        self._scrollChildren(deltaMove.mul(this.scrollSpeed));
        self._gatherTouchMove(deltaMove.mul(this.scrollSpeed));
    }
}
