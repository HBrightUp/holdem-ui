import {
    ScrollViewThemeConfig,
    ScrollViewThemeType,
} from '../ScrollView/ScrollViewTheme'
// import ThemeKit from '../ThemeKit'
import { e_Direction } from './NewListView'

const { ccclass, property, executeInEditMode } = cc._decorator

export enum NewListBarPosition {
    NONE,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
@ccclass
@executeInEditMode
/**
 * 新listView样式管理
 */
export default class NewListViewStyle extends cc.Component {
    @property()
    private _barPosition: NewListBarPosition = NewListBarPosition.NONE
    @property({ type: cc.Enum(NewListBarPosition) })
    get barPosition() {
        return this._barPosition
    }
    set barPosition(value: NewListBarPosition) {
        if (value !== this._barPosition) {
            this._barPosition = value
            this.updateScrollBar()
            this.updateView()
        }
    }

    @property({
        type: cc.Enum(ScrollViewThemeType),
        displayName: '样式类型',
        visible: true,
    })
    private _themeType: ScrollViewThemeType = ScrollViewThemeType.A

    @property
    private _barBgSize: number = 20

    @property({ tooltip: '滚动条背景size' })
    get barBgSize() {
        return this._barBgSize
    }
    set barBgSize(value: number) {
        if (value == this._barBgSize) return
        this._barBgSize = value
        this.updateScrollBar()
        this.updateView()
    }

    @property
    private _barSize: number = 20

    @property({ tooltip: '滚动条size' })
    get barSize() {
        return this._barSize
    }
    set barSize(value: number) {
        if (value == this._barSize) return
        this._barSize = value
        this.updateScrollBar()
        this.updateView()
    }

    get contentNode() {
        return this._contentNode
    }

    private _viewNode: cc.Node = null
    private _contentNode: cc.Node = null
    private _scrollBar: cc.Node = null
    // /**样式 */
    private _theme: ScrollViewThemeConfig = null
    async onLoad() {
        if (this.node.width === 0) {
            this.node.setContentSize(300, 300)
        }
        // const tk = await ThemeKit.dynamicLoad()
        if (!cc.isValid(this)) {
            return
        }
        // this._theme = tk.getScrollViewTheme(this._themeType)
        this.updateScrollBar()
        this.initView()
    }

    private initView() {
        let viewNode = this.node.getChildByName('view')
        if (!viewNode) {
            viewNode = new cc.Node()
            // CC_EDITOR && markLockedInEditor(viewNode)
            viewNode.name = 'view'
            viewNode.addComponent(cc.Mask)
            viewNode.addComponent(cc.Widget)
            viewNode.anchorX = 0
            viewNode.anchorY = 1
            this.node.addChild(viewNode)

            let contentNode = (this._contentNode = new cc.Node())
            contentNode.name = 'content'
            contentNode.anchorX = 0
            contentNode.anchorY = 1
            viewNode.addChild(contentNode)
        } else {
            this._contentNode = viewNode.getChildByName('content')
        }
        this._viewNode = viewNode
        this._contentNode.on(
            cc.Node.EventType.SIZE_CHANGED,
            this.handleContentNodeSizeChange,
            this
        )
        viewNode.setContentSize(this.node.getContentSize())

        this.node.getComponent(cc.ScrollView).content = this._contentNode
        /**
         * 1 520-999-6328
         * 254-488-6932
         * 870-359-0312
         */
    }

    onEnable() {
        this.node.on(
            cc.Node.EventType.SIZE_CHANGED,
            this.handleNodeSizeChange,
            this
        )
        this.node.on(
            cc.Node.EventType.ANCHOR_CHANGED,
            this.handleNodeSizeChange,
            this
        )
        this.updateView()
        this.updateScrollBar()
    }

    onDestroy() {
        this.node.off(
            cc.Node.EventType.SIZE_CHANGED,
            this.handleNodeSizeChange,
            this
        )
        this.node.off(
            cc.Node.EventType.ANCHOR_CHANGED,
            this.handleNodeSizeChange,
            this
        )
    }

    private handleNodeSizeChange() {
        this.updateScrollBar()
        this.updateView()
    }

    /**更新滚动条 */
    private updateScrollBar() {
        let barNode = this.node.getChildByName('barNode')
        if (this._barPosition === NewListBarPosition.NONE) {
            if (barNode) {
                barNode.destroy()
                this._scrollBar = null
            }
        } else {
            if (!barNode) {
                /**滚动条背景 */
                barNode = new cc.Node()
                // CC_EDITOR && markEditorOnly(barNode)
                barNode.name = 'barNode'
                barNode.anchorX = 0
                barNode.anchorY = 0
                barNode.addComponent(cc.Widget)
                let barNodeSprite = barNode.addComponent(cc.Sprite)
                barNode.addComponent(cc.Scrollbar).enableAutoHide = true
                barNode.getComponent(cc.Scrollbar).autoHideTime = 0
                barNodeSprite.sizeMode = cc.Sprite.SizeMode.RAW
                barNodeSprite.type = cc.Sprite.Type.SLICED
                barNodeSprite.spriteFrame = this._theme.sliderBG
                this.node.addChild(barNode)

                /**滚动条滑块 */
                let bar = new cc.Node()
                bar.name = 'bar'
                let barSprite = bar.addComponent(cc.Sprite)
                barSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM
                barSprite.type = cc.Sprite.Type.SLICED
                barSprite.spriteFrame = this._theme.sliderNormal
                barNode.addChild(bar)

                barNode.getComponent(cc.Scrollbar).handle = barSprite
                this._scrollBar = barNode
                barNode.zIndex = 10
            } else {
                this._scrollBar = barNode
            }
            barNode.on(
                'touchmove',
                (event: cc.Event.EventTouch) => {
                    let maxScrollOffset = this.node
                        .getComponent(cc.ScrollView)
                        .getMaxScrollOffset()
                    if (
                        (this._barPosition == NewListBarPosition.LEFT ||
                            this._barPosition == NewListBarPosition.RIGHT) &&
                        maxScrollOffset.y > 0
                    ) {
                        let pos = barNode.convertToNodeSpaceAR(
                            event.getLocation()
                        )
                        let p = pos.y / this.node.height
                        this.node
                            .getComponent(cc.ScrollView)
                            .scrollTo(cc.v2(0, p))
                    } else {
                        let pos = barNode.convertToNodeSpaceAR(
                            event.getLocation()
                        )
                        let p = pos.x / this.node.width
                        this.node
                            .getComponent(cc.ScrollView)
                            .scrollTo(cc.v2(p, 0))
                    }
                },
                this
            )
            this.updateLayout()
        }
    }

    /**更新view的锚点 */
    private updateView() {
        if (!this._viewNode) return
        let widget = this._viewNode.getComponent(cc.Widget)
        if (!widget) return
        widget.isAlignTop = true
        widget.isAlignBottom = true
        widget.isAlignLeft = true
        widget.isAlignRight = true
        widget.top = 0
        widget.bottom = 0
        widget.left = 0
        widget.right = 0
    }

    /**更新滚动条锚点 */
    private updateLayout() {
        if (!this._scrollBar) return

        let widget = this._scrollBar.getComponent(cc.Widget)
        let scrollbar = this._scrollBar.getComponent(cc.Scrollbar)
        widget.isAlignTop = true
        widget.isAlignBottom = true
        widget.isAlignLeft = true
        widget.isAlignRight = true

        widget.top =
            this._barPosition == NewListBarPosition.TOP
                ? -this._barBgSize
                : this._barPosition == NewListBarPosition.BOTTOM
                ? this.node.height
                : 0
        widget.bottom =
            this._barPosition == NewListBarPosition.BOTTOM
                ? -this._barBgSize
                : this._barPosition == NewListBarPosition.TOP
                ? this.node.height
                : 0
        widget.left =
            this._barPosition == NewListBarPosition.LEFT
                ? -this._barBgSize
                : this._barPosition == NewListBarPosition.RIGHT
                ? this.node.width
                : 0
        widget.right =
            this._barPosition == NewListBarPosition.RIGHT
                ? -this._barBgSize
                : this._barPosition == NewListBarPosition.LEFT
                ? this.node.width
                : 0

        this._updateBarWidget()

        if (!this.node.getComponent(cc.ScrollView)) {
            return
        }
        if (
            this._barPosition == NewListBarPosition.TOP ||
            this._barPosition == NewListBarPosition.BOTTOM
        ) {
            this.node.getComponent(cc.ScrollView).horizontalScrollBar =
                scrollbar
            this.node.getComponent(cc.ScrollView).verticalScrollBar = scrollbar
            scrollbar.direction = cc.Scrollbar.Direction.HORIZONTAL
        } else {
            this.node.getComponent(cc.ScrollView).horizontalScrollBar =
                scrollbar
            this.node.getComponent(cc.ScrollView).verticalScrollBar = scrollbar
            scrollbar.direction = cc.Scrollbar.Direction.VERTICAL
        }
        //恢复显示
        this.scheduleOnce(() => {
            this._scrollBar.opacity = 255
            this._scrollBar.getChildByName('bar').opacity = 255
        }, 0)
    }

    /**更新滑块widget */
    private _updateBarWidget() {
        if (!this._scrollBar) return
        let bar = this._scrollBar.getChildByName('bar')
        let widget = bar.getComponent(cc.Widget)
        if (!widget) {
            widget = bar.addComponent(cc.Widget)
        }

        if (
            this._barPosition == NewListBarPosition.TOP ||
            this._barPosition == NewListBarPosition.BOTTOM
        ) {
            widget.isAlignTop = true
            widget.isAlignBottom = true
            widget.isAlignLeft = false
            widget.isAlignRight = false
            widget.top = 2
            widget.bottom = 2

            bar.width = this._barSize
        } else {
            widget.isAlignTop = false
            widget.isAlignBottom = false
            widget.isAlignLeft = true
            widget.isAlignRight = true
            widget.left = 2
            widget.right = 2

            bar.height = this._barSize
        }
    }

    private handleContentNodeSizeChange() {
        this.updateLayout()
        this.updateView()
    }
}
