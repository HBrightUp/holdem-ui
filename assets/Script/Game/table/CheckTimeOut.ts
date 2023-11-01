const {ccclass, property} = cc._decorator;

@ccclass
export default class CheckTimeOut extends cc.Component {

    time:number = 15;
    actionTime:number = 0;

    // onLoad () {}

    start () {
        // this.startCountdown();
    }
    startCountdown(){
        this.node.getComponent(cc.ProgressBar).progress = 1;
        this.node.getChildByName("bar").color = new cc.Color(255,255,255);
        this.actionTime = 0;
        this.schedule(this.updateCountdown, 1);
    }
    updateCountdown(){
        this.actionTime++;
        this.node.getComponent(cc.ProgressBar).progress = 1 - this.actionTime/this.time;

        if(this.actionTime < 10){
            this.node.getChildByName("bar").color = new cc.Color(255,255,255);
        }else if(this.actionTime >= 10 && this.actionTime < 12){
            this.node.getChildByName("bar").color = new cc.Color(255,158,0);
        }else{
            this.node.getChildByName("bar").color = new cc.Color(255,0,0);
        }
        
        if(this.actionTime == this.time){
            this.actionTime = 0;
            this.stopCountdown(); // 停止倒
        }
    }
    stopCountdown(){
        this.unschedule(this.updateCountdown);
    }
}
