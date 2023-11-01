// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolManager from "../PoolManager/PoolManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ToastPre extends cc.Component {

    @property(cc.Label)
    labelContent: cc.Label = null;

    @property(cc.Node)
    btnConfirm: cc.Node = null;

    private _func:Function = null;
   start () {
       // [3]
   }

   // update (deltaTime: number) {
   //     // [4]
   // }
   onLoad(){
       this.scheduleOnce(()=>{
           //this.recycleSelf();
       },5)
   }
   toastView(data:any,func:Function){
       this.labelContent.string = data+"";
       this._func = func;
      //this.btnConfirm.on(Node.EventType.TOUCH_END, this._func, this);
   }

   onClickConfirm(){
    //    App.AudioManager.playSound(Constants.AUDIO_SOUND.common_click);
       this._func();
       this.recycleSelf();
   }


   recycleSelf(){
    //    App.AudioManager.playSound(Constants.AUDIO_SOUND.common_click);
    //    if(this.btnConfirm.hasEventListener(cc.Node.EventType.TOUCH_END)){
    //        this.btnConfirm.off(cc.Node.EventType.TOUCH_END, this._func, this);
    //    }
       PoolManager.setNode(this.node);
   }
   onDestroy(){
       this.unscheduleAllCallbacks();
   }
}
