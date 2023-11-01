import App from "../../Common/App";
import GameConstant from "../../Common/GameConstant";
import PoolManager from "../../PoolManager/PoolManager";
import LinkKit from "../../Web3/LinkKit";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SupplyInDesk extends cc.Component {

    @property({ type: cc.Label,tooltip:"最小值"})
    lbl_carry_min: cc.Label = null;

    @property({ type: cc.Label,tooltip:"最大值"})
    lbl_carry_max: cc.Label = null;

    @property({ type: cc.Label,tooltip:"当前选中数值"})
    lbl_carry_num: cc.Label = null;

    @property({ type: cc.Label,tooltip:"余额"})
    lbl_carry_balance: cc.Label = null;

    @property({ type: cc.Slider,tooltip:""})
    chips_slider: cc.Slider = null;

    @property({ type: cc.Node,tooltip:""})
    tips_node: cc.Node = null;

    @property({ type: cc.Button,tooltip:""})
    buyInBtn: cc.Button = null;


    minNum:number = 0;
    maxNum:number = 0;
    balanceOf:number = 0;
    currentNum:number = 0;
    currentProgress:number = 0;
    seatIndex:number = 0;
    tableInfo:any;

    // onLoad () {}

    async start () {
        this.updateTableData();
        App.CustomEventListener.on(GameConstant.GameEvent.CHANGE_CHAINID, this.onClickConfirm, this);
        // App.CustomEventListener.on(GameConstant.ServerEvent.INIT_USER_SEAT, );
    }
    updateTableData(){
        let tableInfo = App.GameDataCtrl.GameTableInfo;
        this.minNum = Number(LinkKit.instance.mulBN(tableInfo.minDeposit.toString()));
        this.maxNum = Number(LinkKit.instance.mulBN(tableInfo.maxDeposit.toString()));
        this.balanceOf = App.UserDataCtrl.UserBalance;
        this.lbl_carry_balance.string = this.balanceOf + "";
        this.initUI();
    }
    initUI(){
        this.lbl_carry_min.string = this.minNum+"";
        this.lbl_carry_max.string = this.maxNum+"";
        this.lbl_carry_num.string = "Buy in:"+this.minNum+"";
        this.currentNum = this.minNum;
        if(this.minNum > this.balanceOf){
            this.chips_slider.enabled = false;
            this.tips_node.active = true;
            this.buyInBtn.interactable = false;
        }else{
            this.chips_slider.enabled = true;
            this.tips_node.active = false;
            this.buyInBtn.interactable = true;
        }
    }
    sliderEvent(){
        let progress = this.chips_slider.progress;
        let currentNum = Math.ceil(this.minNum + (this.maxNum - this.minNum) * progress);
        
        if(currentNum > this.balanceOf){ 
            this.chips_slider.progress = this.caculatePercent(progress);
            return;
        }
        this.currentNum = currentNum;
        this.lbl_carry_num.string = "Buy in: " + currentNum;

    }
    caculatePercent(progress:number){
        let new_progress:number;
        new_progress = (this.balanceOf - this.minNum)/this.minNum;
        new_progress = (0 >= new_progress) ? 0 : new_progress;
        new_progress = (1 <= new_progress ? 1 : new_progress);
        return new_progress;
    }
    async onClickConfirm(){
        try {
            await LinkKit.instance.checkChain();
            if (App.Race.Holdem) {
                PoolManager.setNode(this.node);
                const AppClient = App.Race.AppClientCurrent;
                let amount = LinkKit.instance.divBN(this.currentNum.toString());
                PoolManager.getLoading();
                await AppClient.current.join({ amount: amount, position: BigInt(this.seatIndex) });
                PoolManager.setLoading();
            }
        } catch (error) {
            PoolManager.setLoading();
            console.log(error, "买入坐下出错");
        }
        
    }
    onClickCancel(){
        PoolManager.setNode(this.node);
    }
    protected onDestroy(): void {
        App.CustomEventListener.off(GameConstant.GameEvent.CHANGE_CHAINID, this.onClickConfirm, this);
    }
}
