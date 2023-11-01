import App from "../../Common/App";
import GameConstant from "../../Common/GameConstant";
import PoolManager from "../../PoolManager/PoolManager";
import SupplyInDesk from "./SupplyInDesk";
const ServerEvent = GameConstant.ServerEvent;

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserSeatBtn extends cc.Component {

    @property(cc.Prefab)
    userBuyChips: cc.Prefab = null;


    @property(cc.Node)
    sitDown: cc.Node = null;

    @property(cc.Node)
    spEmpty: cc.Node = null;

    seatIndex:number;

    start () {  
        this.initSeatType();
    }
    initSeatType(){
        let player = App.GameDataCtrl.GameStageData.playerMap;
        if(!player.has(App.Race.WalletAddress)){
            this.spEmpty.active = false;
            this.sitDown.active = true;
        }else{
            this.spEmpty.active = true;
            this.sitDown.active = false;
        }
    }
    onClickSeatBtn(){
        console.log(this.seatIndex, "点击的位置");
        //是否在座位上
        if(this.getUserType()){
            this.spEmpty.active = true;
            this.sitDown.active = false;
            // UIManager.toastDialog("已经在座位上");
            return;
        }
        this.spEmpty.active = false;
        this.sitDown.active = true;
        if (App.Race.Holdem) {
            let buyChips = PoolManager.getNode(this.userBuyChips, this.GetCurrentCanvas());
            buyChips.getComponent(SupplyInDesk).seatIndex = this.seatIndex;
            buyChips.getComponent(SupplyInDesk).updateTableData()
        }
    }
    getUserType(){
        let player = App.GameDataCtrl.GameStageData.playerMap;
        let isSeat:boolean;
        //已经在座位上了
        player.forEach((value, key) => {
            if(value.addr == App.Race.WalletAddress){
                isSeat = true;
            }else{
                isSeat = false;
            }
            
        });
        return isSeat;
    }
    GetCurrentCanvas() {
        let Scene = cc.director.getScene();
        if (!Scene) return;
    
        let canvas = Scene.getChildByName('Canvas');
        if (!canvas) return;
    
        let persistRootNode = Scene.getChildByName('tableNode');
        //  && isPersist
        if (persistRootNode) return persistRootNode;
    
        return canvas;
    };
    protected onDisable(): void {
        // App.CustomEventListener.off(ServerEvent.INIT_USER_SEAT, this.initSeatType, this);
    }
}
