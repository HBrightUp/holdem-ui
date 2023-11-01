
import App from "../../Common/App";
import Chips from "../../Common/Chips";
import GameConstant from "../../Common/GameConstant";
import LinkKit from "../../Web3/LinkKit";
// import { CollectBets } from "../../Race/Holdem";
import CardNode from "../CardNode";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserWight extends cc.Component {

    @property(cc.Prefab)
    pfCardNode: cc.Prefab = null;

    @property(cc.Prefab)
    chipPrefab: cc.Prefab = null;

    @property(cc.Node)
    cardLayer: cc.Node = null;

    @property(cc.Node)
    chipsNode: cc.Node = null;

    @property(cc.Node)
    showChips: cc.Node = null;

    @property(cc.Label)
    showChipsLabel: cc.Label = null;

    @property(cc.Label)
    nameLab: cc.Label = null;

    @property(cc.Label)
    balanceLab: cc.Label = null;

    @property(cc.Node)
    startChips: cc.Node = null;

    @property(cc.Node)
    endChips: cc.Node = null;

    userData:any;
    sendCardNode:cc.Node;
    cardNum:number = 2;
    totalBalance:number = 1000;
    totalChips:number = 0;
    userCardNode:cc.Node[] = [];
    moveChips:cc.Node;
    chipsPool:cc.Node;

    // onLoad () {}

    start () {
        
    }
    setCardNum(cardNum:number){
       this.cardNum = cardNum; 
    }
    initUser(isUpCard:boolean){
        console.log(this.userData, isUpCard, "用户数据");
        let balance = LinkKit.instance.mulBN(this.userData.chips.toString());
        this.nameLab.string = this.userData.addr;
        this.balanceLab.string = balance;
        if(this.userData.addr == App.Race.WalletAddress){
            App.GameDataCtrl.UserChipsBalance = balance;
        }
        if(isUpCard){
            this.giveCard();
            this.initChipsNum();
        }
    }
    //发牌
    async giveCard(){
        if(App.GameDataCtrl.GameStageData.playerOrder.length < 2){
            return;
        }
        if(this.cardLayer.childrenCount >= 2){
            return;
        }
        let handIndexMap = App.GameDataCtrl.GameStageData.handIndexMap;
        
        let parameter = this.getSendHandCardParameter();
        let angle = parameter.angle;

        this.userCardNode = [];
        if(handIndexMap.has(this.userData.addr)){
            for (let i = 0; i < this.cardNum; i++) {
                let pCard = cc.instantiate(this.pfCardNode);
                //自己的牌
                if(this.userData.addr == App.Race.WalletAddress){
                    let card = App.GameDataCtrl.GameCard;
                    console.log(card, this.cardNum, "展示自己的牌");
                    if(card){
                        pCard.getComponent(CardNode).InitCardData(card[i]);
                    }
                }
                
                this.cardLayer.addChild(pCard);
                this.userCardNode.push(pCard);
                let width = pCard.width;
                pCard.zIndex = i;
                pCard.x = -width/2 + i*width;
                pCard.angle = angle;
            }
        }
    }
    //结算更新其他用户牌值
    updateOthersCard(){
        if(App.GameDataCtrl.GameStageData.stage !== GameConstant.GameStage.Runner && 
            App.GameDataCtrl.GameStageData.stage !== GameConstant.GameStage.Settle && 
            App.GameDataCtrl.GameStageData.stage !== GameConstant.GameStage.Showdown){
            return;
        }
        if(this.userCardNode.length <= 0){
            return;
        }
        let playerMap = App.GameDataCtrl.GameStageData.playerMap;
        let isFold = false;
        playerMap.forEach((value,key)=>{
            if(value.status == 4){
                isFold = true;
            }
        })
        if(isFold){
            return;
        }
        this.showChips.active = false;
        let handIndexMap = App.GameDataCtrl.GameStageData.handIndexMap;

        handIndexMap.forEach((value,key)=>{
            if(key == this.userData.addr){
                for(var i=0;i<value.length;i++){
                    let card = App.GameDataCtrl.GameCard[value[i]];
                    if(key == App.Race.WalletAddress){
                        continue;
                    }
                    this.userCardNode[i].getComponent(CardNode).InitCardData(card);
                }
            }
        });
    }
    //结算后清除数据
    createCard(){
        this.userCardNode = [];
        this.cardLayer.removeAllChildren();
    }
    //获取手牌发牌起点
    getSendHandCardParameter () {
        let start_pos = cc.v2(0,0);
        let angle = 0;
        // 发牌起始点改为公牌区
        let img_cardkuang = this.sendCardNode;
        let worldPos = img_cardkuang.convertToWorldSpaceAR(cc.v2(0,0));
        let nodePos = this.cardLayer.convertToNodeSpaceAR(worldPos);
        start_pos = nodePos;
        return {start_pos : start_pos, angle : angle};
    }
    //将用户筹码移动到筹码池
    initChipsNum(){
        // if(App.GameDataCtrl.GameStageData.playerMap.size < 2){
        //     return;
        // }
        if(App.GameDataCtrl.GameStageData.betMap.size > 0){
            this.initBetChipsData(App.GameDataCtrl.GameStageData.betMap);
        }else{
            let display = App.GameDataCtrl.GameStageData.display;
            if(display.length > 0){
                let collectBets = display[0];
                if(collectBets.kind() == "CollectBets"){
                    this.initBetChipsData(display[0].betMap);
                    let bet = this.initChipsData(display[0].betMap);
                    if(bet.length > 0){
                        this.moveChipsPool();
                    }
                }
            }
            
        }
    }
    //用户筹码移动到池子
    moveChipsPool(){
        this.scheduleOnce(()=>{
            this.showChips.active = false;
            this.showChipsLabel.string = " ";
            if(App.GameDataCtrl.GameStageData.pots.length > 0){
                this.moveChips = App.Chipmanager._createOneChip(this.chipPrefab, 0, this.startChips);//App.GameDataCtrl.GameStageData.pots[0].amount
                this.moveChips.getComponent(Chips).moveTheChips(this.endChips, this.chipsPool, true, true, ()=>{
                    
                });
            }
        },1);
    }
    isMySelf(){
        let tableData = App.GameDataCtrl.GameStageData;
        if(tableData && tableData.actingPlayer){    
            if(tableData.actingPlayer.addr == this.userData.addr){
                return true;
            }
        }
        return false;
    }
    //加载用户筹码
    initBetChipsData(map){
        let bet = this.initChipsData(map);
        if(bet.length <= 0){
            return;
        }
        for(let i=0;i<bet.length;i++){
            let betData = bet[i];
            if(JSON.stringify(App.GameDataCtrl.EventData) !== "{}"){
                if(App.GameDataCtrl.EventData.sender == betData.key){
                    this.userChipsShowMove(betData.value, betData.key);
                }
            }else{
                this.userChipsShowMove(betData.value, betData.key);
            }
            
        }
    }
    initChipsData(map){
        
        let bet = map;
        let chips = [];
        bet.forEach((value, key) => {
            let chipsObj = {
                value:value,
                key:key
            };
            chips.push(chipsObj);
        });
        return chips;
    }
    userChipsShowMove(amount:any, address:string){
        if(address !== this.userData.addr){
            return;
        }

        this.moveChips = App.Chipmanager._createOneChip(this.chipPrefab, amount, this.startChips);
        if(Number(amount) > 0){
            this.showChips.active = true;
            this.showChipsLabel.string = LinkKit.instance.mulBN(amount.toString());
            this.moveChips.getComponent(Chips).moveTheChips(this.startChips, this.endChips, true, true,()=>{
                
            });
        }
        
    }
    //弃牌结算，不开牌
    gameUserSettle(){

        this.scheduleOnce(this.createCard,2);

        this.updateOthersCard();
    }
}
