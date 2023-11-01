const { ccclass, disallowMultiple, executeInEditMode } = cc._decorator

@ccclass
@disallowMultiple
export default class NewListViewItem<T = any> extends cc.Component {
    private _bindItem: boolean = false
    set bindItem(value: boolean) {
        if (this._bindItem == value) return
        this._bindItem = value
        if (this._bindItem) {
            this._onBind()
        } else {
            this._offBind()
        }
    }
    protected _onBind(): void {}

    protected _offBind(): void {}

    /**重置Item,重新初始化前会调用一次 */
    protected RestItem(): void {
        this._offBind()
    }

    /**当前item所处Index */
    protected _index: number

    /**
     * 初始化Item
     * @param index item索引
     * @param extraParam 额外参数
     */
    public InitItem(index: number, extraParam: T) {
        this._index = index
        this.RestItem()
        this.OnInitItem(extraParam)
        this.bindItem = true
    }

    /**
     * 当item初始化时
     * @param param 额外参数
     */
    protected OnInitItem(param: T = null): void {}

    protected onDestroy(): void {
        this.bindItem = false
    }
    /**从对象池移除 */
    unuse() {
        this.bindItem = false
    }

    /**从对象池中获得 */
    reuse() {}
}
