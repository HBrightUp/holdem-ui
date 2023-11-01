import PoolManager from "../PoolManager/PoolManager";
import PromptView from "../UI/PromptView";
import ToastPre from "./ToastPre";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Toast extends cc.Component {

    @property(cc.Prefab)
    promptView:cc.Prefab = null

    @property(cc.Prefab)
    toastPre:cc.Prefab = null;

    onLoad(){
        cc.game.addPersistRootNode(this.node);
    }

    private isAddPrompt:boolean = false;
    start () {
        // [3]
    }

    setText(content:any){
        if(this.isAddPrompt){
            return;
        }
        this.isAddPrompt = true;
        this.scheduleOnce(()=>{
            this.isAddPrompt = false;
        },0.2)
        var node = PoolManager.getNode(this.promptView,this.node);
         node.getComponent(PromptView).setLabelText(content);
    }

    toastView(data:any,func:Function){
        var node = PoolManager.getNode(this.toastPre,this.node);
        node.getComponent(ToastPre).toastView(data,func);
    }
    
}
