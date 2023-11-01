// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SingtonClass from "./SingtonClass";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserDataCtrl extends SingtonClass {
    private _userBalance:number;

    set UserBalance(balance:number){
        this._userBalance = balance;
    }

    get UserBalance(){
        return this._userBalance;
    }

}
