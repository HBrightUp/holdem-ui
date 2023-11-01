// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { KGameUtils } from "../Utils/KGameUtils";
import App from "./App";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Chips extends cc.Component {

    @property(cc.Sprite)
    chipsSprite: cc.Sprite = null;

    @property(cc.Label)
    labelValue: cc.Label = null;

    chipIndex = 0;
    chipValue = 0;
    isMyChip: boolean = false;
    chipArea:number = 0;

    start() {
        // [3]
    }
    onEnable(){
        // App.CustomEventListener.on(GlobalEvent.GAME_PAUSE,this.onGamePause,this);
        //App.CustomEventListener.on(GlobalEvent.GAME_RESUME,this.onGameResume,this);
    }

    onDisable(){
        // App.CustomEventListener.off(GlobalEvent.GAME_PAUSE,this.onGamePause,this);
        //App.CustomEventListener.off(GlobalEvent.GAME_RESUME,this.onGameResume,this);
    }

    private onGamePause(){
        this.recycleOneChip();
    }

    // private onGameResume(){

    // }

    onLoad() {

    }

    setImage(value: number) {
        // this.labelValue.string = value + "";
        // cc.resources.load("images/bet_chip", cc.SpriteAtlas, (err, atlas:cc.SpriteAtlas) => {
        //     const frame = atlas.getSpriteFrame("chip_" + index);
        //     this.chipsSprite.spriteFrame = frame;
        // });
    }
    //起始位置,结束位置,是否随机位置,是否移动完销毁,是否延时
    moveChips(startNode, endNode, isRandom: boolean = false, isDestroy = false) {
        var startPosition = endNode.convertToWorldSpaceAR(new cc.Vec3(0, 0, 0));
        var endPosition = startNode.convertToNodeSpaceAR(startPosition);
        var num = 50;

        var x1 = !isRandom ? (Math.random() - 0.5) * 2 * 80 : 0;
        var x2 = !isRandom ? (Math.random() - 0.5) * 2 * num : 0;
        cc.tween(this.node).to(0.5, { position: new cc.Vec3(endPosition.x + x1, endPosition.y + x2, 0) },).call(function () {
            this.node.parent = endNode;
            startNode.removeChild(this.node);

            var postion = startNode.convertToWorldSpaceAR(new cc.Vec3(endPosition.x + x1, endPosition.y + x2, 0));
            var postion2 = endNode.convertToNodeSpaceAR(postion);
            this.node.setPosition(postion2);
        }.bind(this))
            .delay(0.1)
            .call(() => {
                if (isDestroy) {
                    this.recycleOneChip();
                }
            })
            .start();
    }

    //先转换父节点
    moveTheChips(startNode, endNode, isRandom: boolean = false, isDestroy = false, call:Function) {
        var self = this;
        if(!startNode || !endNode){
            return;
        }
        var easingString = 'quadIn';
        if(isDestroy == true){
            easingString = 'backIn';
        }
        var startPosition = startNode.convertToWorldSpaceAR(this.node.position);
        var endPosition = endNode.convertToNodeSpaceAR(startPosition);
        var num = 50;

        var xNum = 80;

        var x1 = !isRandom ? (Math.random() - 0.5) * 2 * xNum : 0;
        var x2 = !isRandom ? (Math.random() - 0.5) * 2 * num : 0;
        this.node.parent = endNode;
        var num = KGameUtils.v3GetDistance(endPosition, new cc.Vec3(x1, x2, 0));
        var time = 0.3;//num / 500;//移动速率定为500
        // var time = 2;
        // console.log(time , "移动时间");
        startNode.removeChild(this.node);
        this.node.setPosition(endPosition);
        cc.tween(this.node).to(time, { position: new cc.Vec3(x1, x2, 0) }, {easing:easingString })
        .by(0.05, { position: new cc.Vec3(10, 0, 0) }).by(0.05, { position: new cc.Vec3(-2, 2, 0) }).call(function () {
            
            if (isDestroy) {
                self.recycleOneChip();
                if(call){
                    call();
                }
            }

        }.bind(this)).start();


    }


     //先移动，再转换父节点
    //  moveChipsThenChange(startNode, endNode, isRandom: boolean = false, isDestroy = false) {
        
    //     var endPosW = endNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
    //     var endPosition = startNode.getComponent(UITransform).convertToNodeSpaceAR(endPosW);//运动终点
    //     var x1 = !isRandom ? (Math.random() - 0.5) * 2 * 50 : 0;
    //     var y1 = !isRandom ? (Math.random() - 0.5) * 2 * 50 : 0;
    //     var pos = new Vec3(x1, y1, 0);//最终位置

        
    //     var num = KGameUtils.v3GetDistance(endPosition, new Vec3(x1, y1, 0));
    //     var time = num / 800;//移动速率定为500
       
    //     //this.node.setPosition(endPosition);
    //     tween(this.node).to(time, { position: new Vec3(endPosition.x + x1, endPosition.y + y1, 0) }, { easing:'quadIn' }).by(0.05, { position: new Vec3(10, 0, 0) }).by(0.05, { position: new Vec3(-2, 2, 0) }).call(function () {
    //         startNode.removeChild(this.node);
    //         this.node.parent = endNode;
    //         this.node.setPosition(pos);
    //         if (isDestroy) {
    //             this.recycleOneChip();
    //         }

    //     }.bind(this)).start();

    // }




    //飞到指定位置,无需转换父节点
    moveChipsTo(chipNode, endNode, delay) {
        
        // setTimeout(() => {
        //     var endPosW = endNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0, 0));
        //     var endPosN = chipNode.getComponent(UITransform).convertToNodeSpaceAR(endPosW);

        //     var x1 = Math.random() * 50;
        //     var y1 = Math.random() * 50;
        //     var pos = new Vec3(x1, y1, 0)
        //     tween(this.node).to(0.1, { position: pos }).to(1, { position: endPosN }, { easing: 'sineIn' }).by(0.05, { position: new Vec3(10, 0, 0) }).by(0.05, { position: new Vec3(-2, 2, 0) }).call(function () {
        //         this.recycleOneChip();
        //     }.bind(this)).start();
        // }, delay);
        

        this.scheduleOnce(() => {
            var endPosW = endNode.convertToWorldSpaceAR(new cc.Vec3(0, 0, 0));
            var endPosN = chipNode.convertToNodeSpaceAR(endPosW);

            var x1 = Math.random() * 80;
            var y1 = Math.random() * 50;
            var pos = new cc.Vec3(x1, y1, 0)
            cc.tween(this.node).to(0.1, { position: pos }).to(1, { position: endPosN }, { easing: 'sineIn' })
            .by(0.05, { position: new cc.Vec3(10, 0, 0) }).by(0.05, { position: new cc.Vec3(-2, 2, 0) }).call(function () {
                this.recycleOneChip();
            }.bind(this)).start();
        }, delay/1000);

    }

    resetData(){

    }
    //回收
    recycleOneChip() {
        this.chipArea = 0;
        this.node.setPosition(new cc.Vec3(0,0,0));
        // App.Chipmanager._recycleOneChip(this);
        App.Chipmanager._reycleAllChips();
        
    }

}
