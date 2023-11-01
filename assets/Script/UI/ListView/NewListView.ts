import NewListViewItem from './NewListViewItem'
import NewListViewStyle from './NewListViewStyle'

const {
    ccclass,
    property,
    menu,
    requireComponent,
    disallowMultiple,
    executeInEditMode,
} = cc._decorator

export enum e_Direction {
    /// <summary>
    /// 横向排序
    /// </summary>
    Horizontal,
    /// <summary>
    /// 垂直排序
    /// </summary>
    Vertical,
}

//记录 物体的坐标 和 物体
export class CellInfo {
    /**位置 */
    public pos: cc.Vec3
    /**节点 */
    public obj: cc.Node
}

@ccclass
@menu('BaseUI/NewListView')
@requireComponent(cc.ScrollView)
@disallowMultiple
@executeInEditMode
export default class NewListView<T = any> extends cc.Component {
    @property
    private _m_Direction: e_Direction = e_Direction.Horizontal
    /** 排序方式 */
    @property({ type: cc.Enum(e_Direction), displayName: '排序方式' })
    get m_Direction(): e_Direction {
        return this._m_Direction
    }
    set m_Direction(value: e_Direction) {
        this._m_Direction = value
        let scrollView = this.getComponent(cc.ScrollView)
        if (scrollView == null) return

        switch (value) {
            case e_Direction.Horizontal:
                scrollView.horizontal = true
                scrollView.vertical = false
                break
            case e_Direction.Vertical:
                scrollView.horizontal = false
                scrollView.vertical = true
                break
        }
    }

    /** 每行/列的item数量 */
    @property({ displayName: '行/列的item数量' })
    public m_Row: number = 1

    /** 同行/同列的间距 */
    @property({ displayName: 'item间距' })
    public m_Spacing: number = 0

    /** 分行/分段的间距 */
    @property({ displayName: '行/列间距离: ' })
    public m_SpacingBetween: number = 0

    @property({ visible: true, tooltip: 'paddingTop' })
    public m_PaddingTop: number = 0

    @property({ visible: true, tooltip: 'paddingLeft' })
    public m_PaddingLeft: number = 0

    /** 指定Item预制体 */
    @property({ type: cc.Prefab, displayName: 'Item预制体' })
    public m_CellGameObject: cc.Prefab = null

    /** Item大小 */
    @property({ displayName: 'Item大小' })
    public m_CellSize: cc.Vec3 = cc.v3(0, 0)

    /** 是否显示提示 */
    @property({ displayName: '是否显示指示节点' })
    public m_IsShowArrow: boolean = false

    /** 上/左拉指示器 */
    @property({
        type: cc.Node,
        displayName: '上/左拉指示器',
        visible: function () {
            return (this as any)['m_IsShowArrow']
        },
    })
    public m_PointingFirstArrow: cc.Node = null

    /** 下/右拉指示器 */
    @property({
        type: cc.Node,
        displayName: '下/右拉指示器',
        visible: function () {
            return (this as any)['m_IsShowArrow']
        },
    })
    public m_PointingEndArrow: cc.Node = null

    /**实例化完成回调 */
    protected m_FuncCallBackFunc: (node: cc.Node, index: number) => void = null
    /**Item手动触发回调,TODO可做支持类似原本ListView的第二个参数 */
    protected m_FuncOnClickCallBack: (node: cc.Node, index: number) => void =
        null

    /** content父节点 */
    protected rectTrans: cc.Node

    /** listView节点宽度 */
    protected m_PlaneWidth: number
    /** listView节点高度 */
    protected m_PlaneHeight: number

    /** 内容Content的宽度 */
    protected m_ContentWidth: number
    /** 内容Content的高度 */
    protected m_ContentHeight: number

    /** item所处的内容节点Content */
    protected m_Content: cc.Node
    // public RectTransform m_ContentRectTrans;
    /** 是否初始化Init */
    private m_isInited: boolean = false

    protected m_CellInfos: CellInfo[] = []
    /** 是否初始化showList */
    protected m_IsInited: boolean = false
    /** 当前节点的ScrollView组件 */
    protected m_ScrollRect: cc.ScrollView

    /** 列表数量 */
    public m_MaxCount: number = -1

    /** 当前显示范围的最小Index */
    protected m_MinIndex: number = -1
    /** 当前显示范围的最大Index */
    protected m_MaxIndex: number = -1

    /** 是否清空列表 */
    protected m_IsClearList: boolean = false

    /** 传入item的额外参数 */
    protected m_param: T = null

    /** 列表item数量 */
    public listNum: number = 0

    protected onLoad(): void {
        if (!this.getComponent(NewListViewStyle)) {
            this.addComponent(NewListViewStyle)
        }
    }

    /**
     * 初始化列表Item数量
     * !!! 使用时，content所处父节点锚点需为cc.v2(0,1) 用于计算位置
     * @param num 列表Item数量
     * @param param 传入item的额外参数
     */
    public InitWithNum(num: number, param: T = null): void {
        this.m_param = param
        this.Init(null, null)
        this.ShowList(num)
    }

    /**
     * 根据回调函数初始化
     * @param num 实例化数量
     * @param callBack 实例化出来的Item节点和节点对应的Index
     */
    public InitWithCallBack(
        num: number,
        callBack: (node: cc.Node, index: number) => void = null
    ) {
        this.Init(callBack, null)
        this.ShowList(num)
    }

    public Init(
        callBack: (node: cc.Node, index: number) => void,
        onClickCallBack: (node: cc.Node, index: number) => void
    ) {
        this.DisposeAll()

        this.m_FuncCallBackFunc = callBack

        if (onClickCallBack != null) {
            this.m_FuncOnClickCallBack = onClickCallBack
        }

        if (this.m_isInited) return

        this.m_Content = this.node.getComponent(cc.ScrollView).content

        //记录 Plane 信息
        this.rectTrans = this.m_Content.parent
        this.m_PlaneHeight = this.node.height
        this.m_PlaneWidth = this.node.width
        this.rectTrans.anchorX = 0.5
        this.rectTrans.anchorY = 0.5
        this.CheckAnchor(this.rectTrans)

        //记录 Content 信息
        this.m_ContentHeight = this.m_Content.height
        this.m_ContentWidth = this.m_Content.width
        this.m_Content.anchorX = 0.5
        this.m_Content.anchorY = 1
        this.CheckAnchor(this.m_Content)

        this.m_ScrollRect = this.getComponent(cc.ScrollView)

        //移除滚动事件
        this.m_ScrollRect.scrollEvents = []

        //添加滑动监听事件
        let eventHandler1 = new cc.ScrollView.EventHandler()
        eventHandler1.target = this.node
        eventHandler1.component = 'NewListView'
        eventHandler1.handler = 'ScrollRectListener'
        this.m_ScrollRect.scrollEvents.push(eventHandler1)
        this.scheduleOnce(() => {
            this.ScrollRectListener(null)
        }, 0)

        //添加指示器监听信息
        if (
            this.m_PointingFirstArrow != null ||
            this.m_PointingEndArrow != null
        ) {
            let eventHandler2 = new cc.ScrollView.EventHandler()
            eventHandler2.target = this.node
            eventHandler2.component = 'NewListView'
            eventHandler2.handler = 'OnDragListener'
            this.m_ScrollRect.scrollEvents.push(eventHandler2)
            this.scheduleOnce(() => {
                this.OnDragListener(null)
            }, 0)
        }

        this.m_isInited = true
    }

    /**
     * 检查节点的 Anchor 是否正确
     * @param node 被检查的节点
     */
    private CheckAnchor(node: cc.Node): void {
        // if (!(node.anchorX == 0 && node.anchorY == 1)) {
        //     node.anchorX = 0.5
        //     node.anchorY = 0.5
        // }
    }

    /** 实时刷新列表时用 */
    public UpdateList(): void {
        for (let i = 0; i < this.m_CellInfos.length; i++) {
            let cellInfo: CellInfo = this.m_CellInfos[i]
            if (cellInfo.obj != null) {
                let rangePos =
                    this.m_Direction == e_Direction.Vertical
                        ? cellInfo.pos.y
                        : cellInfo.pos.x
                if (!this.IsOutRange(rangePos)) {
                    this.Func(this.m_FuncCallBackFunc, cellInfo.obj)
                }
            }
        }
    }

    /**
     * 刷新某一项
     * @param index 刷新的item Index
     */
    public UpdateCell(index: number): void {
        let cellInfo: CellInfo = this.m_CellInfos[index - 1]
        if (cellInfo.obj != null) {
            let rangePos =
                this.m_Direction == e_Direction.Vertical
                    ? cellInfo.pos.y
                    : cellInfo.pos.x
            if (!this.IsOutRange(rangePos)) {
                this.Func(this.m_FuncCallBackFunc, cellInfo.obj)
            }
        }
    }

    /**
     * 显示列表
     * @param num 列表内item数量
     */
    public ShowList(num: number): void {
        this.m_MinIndex = -1
        this.m_MaxIndex = -1

        //-> 计算 Content 尺寸
        if (this.m_Direction == e_Direction.Vertical) {
            let contentSize =
                (this.m_Spacing + this.m_CellSize.y) *
                    Math.ceil(num / this.m_Row) +
                this.m_PaddingTop
            this.m_ContentHeight = contentSize
            this.m_ContentWidth = this.m_Content.width
            contentSize =
                contentSize < this.rectTrans.height
                    ? this.rectTrans.height
                    : contentSize
            this.m_Content.setContentSize(this.m_ContentWidth, contentSize)
            if (num != this.m_MaxCount) {
                this.m_Content.setPosition(this.m_Content.position.x, contentSize/2)
            }
        } else {
            let contentSize =
                (this.m_Spacing + this.m_CellSize.x) *
                    Math.ceil(num / this.m_Row) +
                this.m_PaddingLeft
            this.m_ContentWidth = contentSize
            this.m_ContentHeight = this.m_Content.height
            contentSize =
                contentSize < this.rectTrans.width
                    ? this.rectTrans.width
                    : contentSize
            this.m_Content.setContentSize(contentSize, this.m_ContentHeight)
            if (num != this.m_MaxCount) {
                this.m_Content.setPosition(0, this.m_Content.position.y)//this.m_Content.position.y
            }
        }

        //-> 计算 开始索引
        let lastEndIndex = 0

        //-> 过多的物体 扔到对象池 ( 首次调 ShowList函数时 则无效 )
        if (this.m_IsInited) {
            lastEndIndex = num - this.m_MaxCount > 0 ? this.m_MaxCount : num
            lastEndIndex = this.m_IsClearList ? 0 : lastEndIndex

            let count: number = this.m_IsClearList
                ? this.m_CellInfos.length
                : this.m_MaxCount
            for (let i = lastEndIndex; i < count; i++) {
                if (this.m_CellInfos[i].obj != null) {
                    this.SetPoolsObj(this.m_CellInfos[i].obj)
                    this.m_CellInfos[i].obj = null
                }
            }
        }

        //-> 以下四行代码 在for循环所用
        let tempCellInfos: CellInfo[] = this.m_CellInfos
        this.m_CellInfos = []

        //-> 1: 计算 每个Cell坐标并存储 2: 显示范围内的 Cell
        for (let i = 0; i < num; i++) {
            // * -> 存储 已有的数据 ( 首次调 ShowList函数时 则无效 )
            if (this.m_MaxCount != -1 && i < lastEndIndex) {
                let tempCellInfo: CellInfo = tempCellInfos[i]
                //-> 计算是否超出范围
                let rPos =
                    this.m_Direction == e_Direction.Vertical
                        ? tempCellInfo.pos.y
                        : tempCellInfo.pos.x
                if (!this.IsOutRange(rPos)) {
                    //-> 记录显示范围中的 首位index 和 末尾index
                    this.m_MinIndex =
                        this.m_MinIndex == -1 ? i : this.m_MinIndex //首位index
                    this.m_MaxIndex = i // 末尾index

                    if (tempCellInfo.obj == null) {
                        tempCellInfo.obj = this.GetPoolsObj()
                    }
                    tempCellInfo.obj.setPosition(tempCellInfo.pos)
                    tempCellInfo.obj.name = i.toString()
                    tempCellInfo.obj.active = true
                    this.Func(this.m_FuncCallBackFunc, tempCellInfo.obj)
                } else {
                    this.SetPoolsObj(tempCellInfo.obj)
                    tempCellInfo.obj = null
                }
                this.m_CellInfos[i] = tempCellInfo
                continue
            }
            
            let cellInfo: CellInfo = new CellInfo()

            let pos = 0 //坐标( isVertical ? 记录Y : 记录X )
            let rowPos = 0 //计算每排里面的cell 坐标

            // * -> 计算每个Cell坐标
            if (this.m_Direction == e_Direction.Vertical) {
                pos =
                -this.m_CellSize.y/2 - this.m_CellSize.y * Math.floor(i / this.m_Row) -
                    this.m_Spacing * Math.floor(i / this.m_Row) -
                    this.m_PaddingTop
                rowPos =
                this.m_CellSize.x * (i % this.m_Row) - this.m_CellSize.x/2 +
                    this.m_SpacingBetween * (i % this.m_Row) +
                    this.m_PaddingLeft;
                    // console.log(rowPos, pos, "酷酷酷酷酷");
                cellInfo.pos = new cc.Vec3(rowPos, pos)
                //this.m_CellSize 是item
            } else {
                pos =
                    this.m_CellSize.x * Math.floor(i / this.m_Row) +
                    this.m_Spacing * Math.floor(i / this.m_Row) +
                    this.m_PaddingLeft
                rowPos =
                    this.m_CellSize.y * (i % this.m_Row) +
                    this.m_SpacingBetween * (i % this.m_Row) +
                    this.m_PaddingTop
                cellInfo.pos = new cc.Vec3(pos, -rowPos)
            }

            //-> 计算是否超出范围
            let cellPos =
                this.m_Direction == e_Direction.Vertical
                    ? cellInfo.pos.y
                    : cellInfo.pos.x
            if (this.IsOutRange(cellPos)) {
                cellInfo.obj = null
                this.m_CellInfos[i] = cellInfo
                continue
            }

            //-> 记录显示范围中的 首位index 和 末尾index
            this.m_MinIndex = this.m_MinIndex == -1 ? i : this.m_MinIndex //首位index
            this.m_MaxIndex = i // 末尾index

            //-> 取或创建 Cell
            let cell: cc.Node = this.GetPoolsObj()
            cell.position = cellInfo.pos
            cell.name = i.toString()

            //-> 存数据
            cellInfo.obj = cell
            this.m_CellInfos[i] = cellInfo

            //-> 回调  函数
            this.Func(this.m_FuncCallBackFunc, cell)
        }

        this.m_MaxCount = num
        this.m_IsInited = true

        this.OnDragListener(null)
    }

    // 更新滚动区域的大小
    public UpdateSize(): void {
        this.m_PlaneHeight = this.node.height
        this.m_PlaneWidth = this.node.width
    }

    //滑动事件
    protected ScrollRectListener(value: any): void {
        this.UpdateCheck()
    }

    private UpdateCheck(): void {
        if (this.m_CellInfos == null || this.m_CellInfos.length == 0) return
        //滑动这里
        //检查超出范围
        for (let i = 0; i < this.m_CellInfos.length; i++) {
            let cellInfo: CellInfo = this.m_CellInfos[i]
            let obj: cc.Node = cellInfo.obj
            let pos: cc.Vec3 = cellInfo.pos

            let rangePos: number =
                this.m_Direction == e_Direction.Vertical ? pos.y : pos.x
            //判断是否超出显示范围
            if (this.IsOutRange(rangePos)) {
                //把超出范围的cell 扔进 poolsObj里
                if (obj != null) {
                    this.SetPoolsObj(obj)
                    this.m_CellInfos[i].obj = null
                }
            } else {
                if (obj == null) {
                    //优先从 poolsObj中 取出 （poolsObj为空则返回 实例化的cell）
                    let cell: cc.Node = this.GetPoolsObj()
                    cell.position = pos
                    cell.name = i.toString()
                    this.m_CellInfos[i].obj = cell

                    this.Func(this.m_FuncCallBackFunc, cell)
                }
            }
        }
    }

    //判断是否超出显示范围
    protected IsOutRange(pos: number): boolean {
        //滑动这里
        let listP = this.m_Content.position
        if (this.m_Direction == e_Direction.Vertical) {
            if (
                pos + listP.y > this.m_CellSize.y * 2 ||
                pos + listP.y < -this.rectTrans.height - this.m_CellSize.y
            ) {
                return true
            }
        } else {
            if (
                pos + listP.x < -this.m_CellSize.x ||
                pos + listP.x > this.rectTrans.width
            ) {
                return true
            }
        }
        return false
    }

    //对象池 机制  (存入， 取出) cell
    protected poolsObj: cc.NodePool = new cc.NodePool(NewListViewItem)
    //取出 cell
    protected GetPoolsObj(): cc.Node {
        let cell: cc.Node = null
        if (this.poolsObj.size() > 0) {
            cell = this.poolsObj.get()
        }

        if (cell == null) {
            cell = cc.instantiate(this.m_CellGameObject)
        }

        this.m_Content.addChild(cell)
        cell.setScale(cc.Vec2.ONE)
        cell.active = true

        return cell
    }
    //存入 cell
    protected SetPoolsObj(cell: cc.Node): void {
        if (cell != null) {
            this.poolsObj.put(cell)
            cell.active = false
        }
    }

    //回调
    protected Func(
        func: (node: cc.Node, index: number) => void,
        selectObject: cc.Node
    ): void {
        let num = Number(selectObject.name) + 1
        if (func != null) {
            func(selectObject, num)
        } else {
            let comp: NewListViewItem =
                selectObject.getComponent(NewListViewItem)
            if (comp != null) {
                comp.InitItem(num, this.m_param)
            }
        }
    }

    public DisposeAll(): void {
        if (this.m_FuncCallBackFunc != null) {
            this.m_FuncCallBackFunc = null
        }
        if (this.m_FuncOnClickCallBack != null) {
            this.m_FuncOnClickCallBack = null
        }
    }

    protected onDestroy(): void {
        this.DisposeAll()
    }

    public OnClickCell(cell: cc.Node): void {}

    /**
     * 跳转至指定位置
     * @param num 偏移量
     */
    public ScrollTo(num): void {
        if (this.m_Direction == e_Direction.Vertical) {
            this.m_ScrollRect.scrollTo(cc.v2(0, num / this.m_ContentHeight))
        } else {
            this.m_ScrollRect.scrollTo(cc.v2(num / this.m_ContentWidth, 0))
        }
        this.UpdateList()
    }

    /**
     * 设置箭头监听
     */
    protected OnDragListener(value: any): void {
        /**进度条进度 */
        let normalizedPos = 0
        if (this.m_Direction == e_Direction.Vertical) {
            if (this.m_ContentHeight - this.rectTrans.height < 10) {
                this.SetObjActive(this.m_PointingFirstArrow, false)
                this.SetObjActive(this.m_PointingEndArrow, false)
                return
            }
            normalizedPos =
                this.m_Content.position.y /
                (this.m_Content.height - this.rectTrans.height)
        } else {
            if (this.m_ContentWidth - this.rectTrans.width < 10) {
                this.SetObjActive(this.m_PointingFirstArrow, false)
                this.SetObjActive(this.m_PointingEndArrow, false)
                return
            }
            normalizedPos =
                this.m_Content.position.x /
                (this.m_Content.width - this.rectTrans.width)
        }

        normalizedPos = normalizedPos > 0 ? normalizedPos : 0

        if (normalizedPos >= 0.9) {
            this.SetObjActive(this.m_PointingFirstArrow, true)
            this.SetObjActive(this.m_PointingEndArrow, false)
        } else if (normalizedPos <= 0.1) {
            this.SetObjActive(this.m_PointingFirstArrow, false)
            this.SetObjActive(this.m_PointingEndArrow, true)
        } else {
            this.SetObjActive(this.m_PointingFirstArrow, true)
            this.SetObjActive(this.m_PointingEndArrow, true)
        }
    }

    /** 设置对象显隐, 防止箭头为空时 */
    private SetObjActive(obj: cc.Node, bool: boolean): void {
        if (!cc.isValid(obj)) {
            return
        }
        obj.active = bool
    }
}
