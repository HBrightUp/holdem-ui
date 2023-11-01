// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import App from "../Common/App";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EventComponent extends cc.Component {

    removeAllListener(){

    }
    
    onDisable () {
        App.CustomEventListener.removeAll(this);
        this.removeAllListener();
    }
    // update (dt) {}
}
