// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolManager from "../PoolManager/PoolManager";
import Chips from "./Chips";
import SingtonClass from "./SingtonClass";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Chipmanager extends SingtonClass {

    private _chips: Chips[] = [];

    // _createChip(chipType:string,parent:any){
    //     const  self = this;
    //     var node;
    //     var callBack = function(){
    //         return node;
    //     }
    //     resources.load("ui/displayChipPre", Prefab, (err, prefab) => {
    //         if(err){
    //             console.warn(err);
    //             return;
    //         }
    //         const newChip = PoolManager.getNode(prefab!,parent);
    //         const chipComp = newChip.getComponent(DisplayChip)!;
    //         this._chips.push(chipComp);
    //         chipComp.setImage(chipType);
    //         node = newChip;
    //     });
    // }

    _createOneChip(prefab: cc.Prefab, chipType: number, parent: any) {
        const newChip = PoolManager.getNode(prefab!, parent);
        const chipComp = newChip.getComponent(Chips)!;
        this._chips.push(chipComp);
        chipComp.setImage(chipType);
        return newChip;
    }

    _recycleOneChip(chip: Chips) {
        const index = this._chips.indexOf(chip);
        if (index >= 0) {
            PoolManager.setNode(chip.node);
            this._chips.splice(index, 1);
        }
    }

    _reycleAllChips() {
        const length = this._chips.length;
        for (let i = 0; i < length; i++) {
            const chip = this._chips[i];
            PoolManager.setNode(chip.node);
        }
    }

}
