// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

export enum ScrollViewDirectionType {
    VERTICAL = 1,
    HORIZONTAL,
}

@ccclass
export default class NewClass extends cc.Component {

    @property
    private _direction: ScrollViewDirectionType =
        ScrollViewDirectionType.VERTICAL
    @property({ type: cc.Enum(ScrollViewDirectionType) })
    get direction() {
        return this._direction
    }
    set direction(value: ScrollViewDirectionType) {
        if (this._direction !== value) {
            this._direction = value
            // this.updateState()
        }
    }
}
