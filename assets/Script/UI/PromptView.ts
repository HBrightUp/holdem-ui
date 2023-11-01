// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolManager from "../PoolManager/PoolManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    bgNode: cc.Node = null;
 
    @property(cc.Label)
    textLabel: cc.Label = null;
 
 
    start() {
 
    }
    onLoad() {
        this.textLabel.node.on(cc.Node.EventType.SIZE_CHANGED, this.getSizeChange, this);
 
    }
    private getSizeChange() {
        var width = this.textLabel.node.width;
        var height = this.textLabel.node.height; 
        var maxWidth = 1920;
        if (width >= maxWidth) {
            this.textLabel.node.width = maxWidth;
        }
        this.bgNode.width = this.textLabel.node.width + 50;
        this.bgNode.height = this.textLabel.node.height + 50;
    }
    setLabelText(str: string) {
        this.node.opacity = 255;
        this.node.setPosition(0, 0, 0);
        this.textLabel.string = str;
        this.runTween();
    }
    onClickDestory() {
        this.destoryTheNode();
    }
    runTween() {
        var opacityNode = this.node.opacity;
        // cc.tween(opacityNode)
        //     .delay(1)
        //     .to(1, { opacity: 0 })
        //     .start();
 
        cc.tween(this.node)
            .delay(3)
            .to(2, { position: new cc.Vec3(0, 200, 0), opacity: 0 })
            .call(() => {
                this.destoryTheNode();
            })
            .start();
    }
    destoryTheNode() {
        // UIManager.hideDialog(Constants.UIPage.promptView);
        // this.node.parent.removeChild(this.node);
        // this.node.destroy();
        PoolManager.setNode(this.node);
    }
}
