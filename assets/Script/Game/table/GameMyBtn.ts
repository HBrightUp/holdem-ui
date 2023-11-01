import App from "../../Common/App";
import GameConstant from "../../Common/GameConstant";
import {Bet, Call, Check, Fold, Raise } from "../../Race/GameEvent";
import LinkKit from "../../Web3/LinkKit";
import CheckTimeOut from "./CheckTimeOut";
import CountingChips from "./CountingChips";
const ServerEvent = GameConstant.ServerEvent;

const {ccclass, property} = cc._decorator;


@ccclass
export default class GameMyBtn extends cc.Component {

    @property(cc.Button)
    foldBtn: cc.Button = null;

    @property(cc.Button)
    callBtn: cc.Button = null;

    @property(cc.Button)
    checkBtn: cc.Button = null;
    
    @property(cc.Button)
    betBtn: cc.Button = null;

    @property(cc.Button)
    raiseBtn: cc.Button = null;

    @property(cc.Node)
    pan_btn: cc.Node = null;    

    @property(cc.Node)
    pan_slider: cc.Node = null;    

    client:any;
    raiseNum:number;

    onLoad () {
        this.client = App.Race.AppClientCurrent;
        this.foldBtn.node.on("click",this.onFold,this);
        this.callBtn.node.on("click",this.onCall,this);

        this.checkBtn.node.on("click",this.onCheck,this);
        this.betBtn.node.on("click",this.onBet,this);
        
        this.raiseBtn.node.on("click",this.onRaise,this);
        
    }
    start () {
        
    }
    async onBet(){
        
        let amount = BigInt(Number(App.GameDataCtrl.GameStageData.bb));
        let sendAmount = BigInt(Number(LinkKit.instance.divBN(amount.toString())));
        console.log(sendAmount, "点击Bet");
        await this.client.current.submitEvent(new Bet({ amount: sendAmount }));
        // if(this.node){
        //     this.node.active = false;
        // }
        
    }
    async onCall(){
        console.log("点击onCall");
        await this.client.current.submitEvent(new Call());
        console.log("点击onCall成功了");
        // if(this.node){
        //     this.node.active = false;
        // }
    }
    async onFold(){
        console.log("点击Fold");
        await this.client.current.submitEvent(new Fold());
        // if(this.node){
        //     this.node.active = false;
        // }
    }
    async onRaise(){
        let amount = BigInt(this.initChipsData());
        let selectChips = this.node.getComponent(CountingChips).selectChips;
        amount = BigInt(selectChips) > amount ? BigInt(selectChips) : amount;
        let sendAmount = BigInt(Number(LinkKit.instance.divBN(amount.toString())));
        console.log(sendAmount, selectChips, "点击onRaise");
        await this.client.current.submitEvent(new Raise({amount: sendAmount }));
        // if(this.node){
        //     this.node.active = false;
        // }
    }
    async onCheck(){
        console.log("点击 Check");
        await this.client.current.submitEvent(new Check());
        // if(this.node){
        //     this.node.active = false;
        // }
    }
    async onChangeBet(){
        let amount = BigInt(100);
        await this.client.current.submitEvent(new Bet({ amount: amount }));
        // if(this.node){
        //     this.node.active = false;
        // }
    }

    // updateBtnShow(){
    //     let tableData = App.GameDataCtrl.GameStageData;
    //     let player = tableData.playerMap;
    //     let user = [];
    //     player.forEach((value, key) => {
    //         user.push(value);
    //     });
    //     // console.log(user , "当前筹码数值");
    //     let firstNum = user[0].chips;
    //     for(var i=0;i<user.length;i++){
    //         if(user[i].chips !== firstNum){
    //             this.checkBtn.node.active = false;
    //             this.callBtn.node.active = true;
    //             return false;
    //         }
    //     }
    //     this.checkBtn.node.active = true;
    //     this.callBtn.node.active = false;
    //     return true;
    // }
    initOperate(){
        let balance = Number(App.GameDataCtrl.UserChipsBalance);
        let currentRaise = Number(this.initChipsData());

        if(currentRaise > balance){//大于余额
            currentRaise = balance;
        }
        this.raiseBtn.node.getChildByName('chipNum').getComponent(cc.Label).string = "Raise" + currentRaise;
    }
    initChipsData(){
        let streetBet = Number(LinkKit.instance.mulBN(App.GameDataCtrl.GameStageData.streetBet.toString()));
        console.log(App.GameDataCtrl.GameStageData.minRaise, streetBet, "streetBet111111111");
        let raise = App.GameDataCtrl.GameStageData.minRaise + streetBet;        

        return raise;
    }
    //更新按钮状态,因为状态问题，无法读取GamyMyBtn内节点，在此控制
    updateBtnShow(type:boolean){
        let tableData = App.GameDataCtrl.GameStageData;
        if(tableData.betMap.size > 0){
            this.initBetChipsData(App.GameDataCtrl.GameStageData.betMap);
        }else{
            this.initBetChipsData(App.GameDataCtrl.CollectBets);
        }

    }
    //加载用户筹码
    initBetChipsData(map:any){
        let playerNum = App.GameDataCtrl.GameStageData.playerMap.size;
        if(playerNum < 2){
            return;
        }
        let bet = this.initPlayerChipsData(map);
        console.log(bet, "用户下注筹码");
        if(bet.length <= 0){
            this.setCheckBet();
            return;
        }
    
       

        let maxObject:any;
        if(bet.length > 0){
            maxObject = bet.reduce((max, current) => (current.value > max.value ? current : max), bet[0]).value;
        }
        
        let actingPlayer = App.GameDataCtrl.GameStageData.actingPlayer.addr;
        for(var i=0;i<bet.length;i++){
            if(Number(bet[i].value) == Number(maxObject) && actingPlayer == bet[i].key){
                this.setCheckBet();
                return false;   
            }
        }
        this.setDefaultBtn();
        return true;
    }
    setDefaultBtn(){
        this.foldBtn.interactable = true;

        this.checkBtn.node.getChildByName("timeProgress").active = false;
        this.checkBtn.node.getChildByName("timeProgress").getComponent(CheckTimeOut).stopCountdown();

        this.foldBtn.node.getChildByName("timeProgress").getComponent(CheckTimeOut).stopCountdown();
        this.foldBtn.node.getChildByName("timeProgress").active = true;
        this.foldBtn.node.getChildByName("timeProgress").getComponent(CheckTimeOut).startCountdown();
        this.checkBtn.node.active = false;
        this.callBtn.node.active = true;
        this.raiseBtn.node.active = true;
        this.betBtn.node.active = false;
        this.pan_btn.active = true;
        this.pan_slider.active = true;  
    }
    setCheckBet(){
        this.foldBtn.interactable = false;
        this.checkBtn.node.active = true;

        this.foldBtn.node.getChildByName("timeProgress").getComponent(CheckTimeOut).stopCountdown();
        this.foldBtn.node.getChildByName("timeProgress").active = false;

        this.checkBtn.node.getChildByName("timeProgress").getComponent(CheckTimeOut).stopCountdown();
        this.checkBtn.node.getChildByName("timeProgress").active = true;
        
        this.checkBtn.node.getChildByName("timeProgress").getComponent(CheckTimeOut).startCountdown();
        this.callBtn.node.active = false;
        this.raiseBtn.node.active = false;
        this.betBtn.node.active = true;
        this.pan_btn.active = false;
        this.pan_slider.active = false;
    }
    initPlayerChipsData(map){
        
        let bet = map;
        let chips = [];
        if(bet == undefined){
            return chips;
        }
        if(bet.size <= 0){
            return chips;
        }
        bet.forEach((value, key) => {
            let chipsObj = {
                value:value,
                key:key
            };
            chips.push(chipsObj);
        });
        return chips;
    }
}
