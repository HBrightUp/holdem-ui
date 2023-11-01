import App from "../../Common/App";
import GameConstant from "../../Common/GameConstant";
import PoolManager from "../../PoolManager/PoolManager";
import { UIManager } from "../../UI/UIManager";
import LinkKit from "../../Web3/LinkKit";
import CardNode from "../CardNode";
import CheckTimeOut from "./CheckTimeOut";
import CountingChips from "./CountingChips";
import GameMyBtn from "./GameMyBtn";
import GameView from "./GameView";
import UserSeatBtn from "./UserSeatBtn";
import UserWight from "./UserWight";
const ServerEvent = GameConstant.ServerEvent;

const {ccclass, property} = cc._decorator;

@ccclass
export default class AbstractGameView extends cc.Component {

    @property(cc.Prefab)
    userPre: cc.Prefab = null;

    @property(cc.Prefab)
    userSitdown: cc.Prefab = null;

    @property(cc.Prefab)
    pfCardNode: cc.Prefab = null;

    @property(cc.Node)
    userLayer: cc.Node = null;
    
    @property(cc.Node)
    publicCard: cc.Node = null;

    @property(cc.Node)
    operateNode: cc.Node = null;

    @property(cc.Node)
    chipsPool: cc.Node = null;

    @property(cc.Node)
    showChips: cc.Node = null;

    @property(cc.Label)
    showChipsLabel: cc.Label = null;

    @property(cc.Node)
    startBtn: cc.Node = null;

    userSeatArr:cc.Node[] = [];
    userSeatDataArr:any = [];
    vacancySeatArr:cc.Node[] = [];
    publicCardNode:cc.Node[] = [];
    selfPosition:number = 0;
    UserPoint:any;
    async onLoad () {
        let tableInfo = await App.Race.Transport.getGameAccount(App.GameDataCtrl.GameAddr);
        App.GameDataCtrl.GameTableInfo = tableInfo;
        this.initTable(tableInfo.maxPlayers);
        this.initStartBtn(tableInfo);//App.GameDataCtrl.GameTableInfo
        App.CommonDataCtrl.isWaitJoin = false;

        //桌内查看适配
        // this.UserPoint = new GameView().initUserPoints(9);//总的位置
        // this.initSeatDownBtn();
        // UserSeatBtn 内 this.initSeatType();注释了
    }
    initStartBtn(tableInfo){

        // console.log(tableInfo, tableInfo.ownerAddr, App.GameDataCtrl.GameStageData.stage, GameConstant.GameStage.Init, App.GameDataCtrl.GameStageData, "展示Start按钮");
        if(tableInfo.ownerAddr == App.Race.WalletAddress && 
            App.GameDataCtrl.GameStageData.stage == GameConstant.GameStage.Init &&
            App.GameDataCtrl.GameStageData.playerMap.size >= 2){
            this.startBtn.active = true;
        }else{
            this.startBtn.active = false;
        }
    }
    start () {
        App.CustomEventListener.on(ServerEvent.INIT_USER_SEAT, this.syncUserEnter, this);
        App.CustomEventListener.on(ServerEvent.OTHER_USER_ENTER, this.initOtherUser, this);
        App.CustomEventListener.on(ServerEvent.UPDATE_CUSTOM_TYPE, this.initOtherUser, this);
        App.CustomEventListener.on(ServerEvent.GAME_RUNNER, this.showAllinCard, this);
        App.CustomEventListener.on(ServerEvent.GAME_SETTLE, this.gameSettle, this);
        App.CustomEventListener.on(ServerEvent.GAME_SHOWDOWN, this.gameSettle, this);
        App.CustomEventListener.on(ServerEvent.USER_LEAVE_GAME, this.userLeave, this);
        App.CustomEventListener.on(ServerEvent.ACTION_TIMEOUT, this.initOtherUser, this);
        
    }
    
    // 初始化用户
	initTable(desktype) {
        this.userLayer.removeAllChildren();
        this.UserPoint = new GameView().initUserPoints(desktype);//总的位置
        this.initSeatDownBtn();
        this.initUser();
        this.initOperate(true);
    }

    //-首次进桌初始化用户的位置【playerMap里的所有人】
    initUser() {
        let player = this.initUserPosition().user;
        if(!this.discoverData(player)){
            return;
        }
        this.createPlayerSeat(player);
    }
    //用户进来同步消息
    async syncUserEnter(data:any){
        data[0].chips = data[0].balance;//同步信息时，没有chips
        if(!this.UserPoint){
            let tableInfo = await App.Race.Transport.getGameAccount(App.GameDataCtrl.GameAddr);
            this.UserPoint = new GameView().initUserPoints(tableInfo.maxPlayers);//总的位置
        }
        
        this.initStartBtn(App.GameDataCtrl.GameTableInfo);
        if(!this.discoverData(data)){
            return;
        }
        this.createPlayerSeat(data, true);
    }
    //检测是否执行过
    discoverData(player:any){
        var commonElements = this.userSeatDataArr.filter(itemA => player.some(itemB => itemB.addr == itemA.addr));
        if(commonElements.length > 0){
            return false;
        }
        return true;
    }
    //创建用户数据
    createPlayerSeat(player:any,isUpdate:boolean = false){
        if(!player || player.length <= 0){
            return;
        }
        
        let movePosition = [];
        
        for(var i=0;i<player.length;i++){
            let user = cc.instantiate(this.userPre);
            if(!this.UserPoint || !player[i].position){
                console.log(this.UserPoint, player[0].position, "玩家位置");
            }
            user.x = this.UserPoint[player[i].position][0];
            user.y = this.UserPoint[player[i].position][1];
            user.getComponent(UserWight).sendCardNode = this.publicCard;
            user.getComponent(UserWight).userData = player[i];
            this.userLayer.addChild(user);
            this.userSeatDataArr.push(player[i]);
            this.userSeatArr.push(user);
            movePosition.push(player[i].position);
        }
        this.hideSeatDown(movePosition);
        if(player[0].addr == App.Race.WalletAddress){
            this.selfPosition = player[0].position;
            this.rotateSeat(player[0]);
        }else{
            if(isUpdate){
                this.rotateSeat(player[0]);
            }
        }
        if(App.GameDataCtrl.GameStageData.stage == GameConstant.GameStage.Play){
            this.initUserCard(true);
            return;
        }
        this.initUserCard(false);
    }
    //如果进来的是我则旋转到0号位置
    rotateSeat(data:any){
        let maxIndex = Number(App.GameDataCtrl.GameTableInfo.maxPlayers);
        let rotateIndex = maxIndex - this.selfPosition;
        let movePosition = [];
        for(var i=0;i<this.userSeatArr.length;i++){
            let move = (this.userSeatDataArr[i].position + rotateIndex) % maxIndex;
            this.userSeatArr[i].x = this.UserPoint[move][0];
            this.userSeatArr[i].y = this.UserPoint[move][1];
            movePosition.push(move);
        }

       this.hideSeatDown(movePosition);
    }
    //同步坐下按钮
    hideSeatDown(movePosition:any){
        for(var i=0;i<this.vacancySeatArr.length;i++){
            this.vacancySeatArr[i].active = true;
        }
        
        for(var i=0;i<movePosition.length;i++){
            this.vacancySeatArr[movePosition[i]].active = false;
        }
        this.setSeatBtnType();
    }
    setSeatBtnType(){
        for(var i=0;i<this.vacancySeatArr.length;i++){
            this.vacancySeatArr[i].getComponent(UserSeatBtn).initSeatType();
        }
    }
    //缓动动画
    tweenMove(node:cc.Node){

        cc.tween(node)
        .to(0.1, {position: new cc.Vec3(0, 10, 0)})
        .call(()=>{
    
        })
        .start();  
    }
    //-初始化空位按钮
    initSeatDownBtn() {
        for (let i = 0; i < this.UserPoint.length; i++) {
            let userSeat = cc.instantiate(this.userSitdown);
            userSeat.x = this.UserPoint[i][0];
            userSeat.y = this.UserPoint[i][1];
            userSeat.getComponent(UserSeatBtn).seatIndex = i;
            this.userLayer.addChild(userSeat);
            this.vacancySeatArr.push(userSeat);
        }
    }
    //其他用户进桌，更新其他用户位置
    initOtherUser(type:boolean){
        let player = this.initUserPosition().user;
        if(!player){
            return;
        }
        for(var i = 0; i < player.length; i++){
            for(var j=0;j<this.userSeatArr.length;j++){
                if(this.userSeatArr[j].getComponent(UserWight).userData.addr == player[i].addr){
                    this.userSeatArr[j].getComponent(UserWight).userData = player[i];
                    this.userSeatArr[j].getComponent(UserWight).chipsPool = this.chipsPool;
                    break;
                }
            }
        }
        this.initStartBtn(App.GameDataCtrl.GameTableInfo);//App.GameDataCtrl.GameTableInfo
        this.initUserCard(true);
        this.updatePublicCard(type);
        this.initOperate(type);
        this.clearPublicCard();
        this.showChipsPool();
        let stage = App.GameDataCtrl.GameStageData.stage;
        if(stage !== GameConstant.GameStage.Settle && stage !== GameConstant.GameStage.Showdown){
            return;
        }
        this.clearUserWightData();
    }
    //展示筹码池子
    showChipsPool(){
        let pot = App.GameDataCtrl.GameStageData.pots;
        this.scheduleOnce(()=>{
            if(pot && pot.length > 0){
                this.showChips.active = true;
                this.showChipsLabel.string = LinkKit.instance.mulBN(pot[0].amount.toString());
            }
        },1.1)
        
        if(App.GameDataCtrl.GameStageData.stage !== 5){
            return;
        }
        
        this.scheduleOnce(()=>{
            this.showChips.active = false;
            this.showChipsLabel.string = "";
        },2);
    }
    //加载用户牌值
    initUserCard(isUpCard:boolean){
        if(this.userSeatArr.length <= 0 ) return;
        for(let i=0;i<this.userSeatArr.length;i++){
            this.userSeatArr[i].getComponent(UserWight).initUser(isUpCard);
        }
    }
    //获取用户位置
    initUserPosition(){
        let tableData = App.GameDataCtrl.GameStageData;
        let player = tableData.playerMap;
        let user = [];
        let userIndex = [];
        
        player.forEach((value, key) => {
            user.push(value);
            userIndex.push(value.position);
        });
        user = this.setSeatFist(user);
        let obj = {
            user:user,
            userIndex:userIndex.sort()
        };
        return obj;
    }
    //处理座位顺序保证自己是第一视角
    setSeatFist(table:any) {
        var seat = [];
        let index: number = 0;
        for (var i = 0; i < table.length; i++) {
            if (table[i].addr == App.Race.WalletAddress) {
                index = i;
            }
        }
        for (var i = 0; i < table.length; i++) {
            let oo = i;
            if (oo - index < 0) {
                oo = oo + table.length;
            }
            seat[oo - index] = table[i];
        }
        return seat;
    }
    //更新公共牌
    async updatePublicCard(isCard){
        let card = App.GameDataCtrl.GameStageData.board;
        if(card.length <= 0 || !isCard){
            return;
        }
        let index = this.publicCard.childrenCount-1  < 0 ? 0 : this.publicCard.childrenCount-1;
        for (let i = index; i < card.length; i++) {
            let pCard = cc.instantiate(this.pfCardNode);
            pCard.getComponent(CardNode).InitCardData(card[i]);
            
            this.publicCard.addChild(pCard);
            let width = pCard.width;
            pCard.x = i*width - 2*width;
            pCard.zIndex = i;
        }
    }
    //All in展示公共牌
    showAllinCard(data:any){
        var self = this;
        
        let board = data.board;

        self.gameSettle();
        if(!this.pfCardNode){
            return;
        }
        for (let i = 0; i < board.length; i++) {
            let pCard = cc.instantiate(this.pfCardNode);
            if(pCard){
                pCard.getComponent(CardNode).InitCardData(board[i]);
            
                this.publicCard.addChild(pCard);
                let width = pCard.width;
                pCard.x = i*width - 2*width;
                pCard.zIndex = i;
            }
        }

        this.scheduleOnce(()=>{
            self.clearPublicCard();
        },2);//All in展示牌后，清除
        
    }
    clearPublicCard(){
        if(App.GameDataCtrl.GameStageData.stage !== GameConstant.GameStage.Runner && 
            App.GameDataCtrl.GameStageData.stage !== GameConstant.GameStage.Settle && 
            App.GameDataCtrl.GameStageData.stage !== GameConstant.GameStage.Showdown){
            return;
        }
        this.scheduleOnce(()=>{
            this.publicCard.removeAllChildren();
            this.operateNode.active = false;
        },2);
        
    }
    //更新操作用户
    initOperate(type:boolean){
        console.log("触发Custom");
        if(App.GameDataCtrl.GameStageData.actingPlayer == undefined){
            return;
        }
        let actingPlayer = App.GameDataCtrl.GameStageData.actingPlayer.addr;
        if(actingPlayer == App.Race.WalletAddress){
            this.operateNode.active = true;
            this.operateNode.getComponent(CountingChips).updateChipsShow();
        }else{
            this.operateNode.active = false;
        }
        this.operateNode.getComponent(GameMyBtn).updateBtnShow(type);
    }
    
    initChipsData(){
        let streetBet = Number(LinkKit.instance.mulBN(App.GameDataCtrl.GameStageData.streetBet.toString()));
        console.log(streetBet, "streetBet222222222222");
        let raise = App.GameDataCtrl.GameStageData.minRaise + streetBet;
        return raise;
    }
    //结算
    gameSettle(){
        let playerOrder = App.GameDataCtrl.GameStageData.playerOrder;
        let address = this.getLeaveAddress(playerOrder);
        console.log(address, "用户结算");
        if(address.length <= 0){
            this.clearUserWightData();
            return;
        }
        for(var i=0;i<address.length;i++){
            this.clearLevelUser(address[i]);
        }
        
    }
    //获取离开地址
    getLeaveAddress(playerOrder:any){
        let changes = [];
        let newPlayer = App.GameDataCtrl.GameStageData.playerMap;
        let filteredArrA:boolean;
        for(var i=0;i<playerOrder.length;i++){
            // newPlayer.has(playerOrder[i]);
            filteredArrA = newPlayer.has(playerOrder[i]);//addrArr.includes(playerOrder[i]);
            if(!filteredArrA){
                changes.push(playerOrder[i]);
            }
        }
        return changes;
    }
    //用户离开
    async userLeave(address:string){
        console.log(address, "用户离开");
        if(address == App.Race.WalletAddress){
            App.CommonDataCtrl.isWaitJoin = true;
            this.scheduleOnce(async ()=>{
                this.closeSocket();
                App.SceneMgr.switchScene("LobbyScene");
            },2);
            
        }
        this.clearLevelUser(address);
    }
    //清楚座位信息和数据信息
    clearLevelUser(address:string){
        var self = this;
        this.initStartBtn(App.GameDataCtrl.GameTableInfo);
        this.clearUserWightData();
        //清除数据信息
        this.scheduleOnce(()=>{
            self.setClearTableData(address);
        },2);
    }
    //结算清除座位牌等
    clearUserWightData(){
        var self = this;
        //清除节点信息
        if(this.operateNode){
            this.operateNode.active = false;
            this.operateNode.getComponent(CountingChips).clearCountData();
            //清除公平，隐藏按钮
            this.scheduleOnce(()=>{
                self.publicCard.removeAllChildren();
                if(self.showChips){
                    self.showChips.active = false;
                }
                if(self.showChipsLabel){
                    self.showChipsLabel.string = "";
                }
            },2);
            //清除用户信息
            if(this.userSeatArr.length <= 0 ) return;
            for(var i=0;i<this.userSeatArr.length;i++){
                this.userSeatArr[i].getComponent(UserWight).gameUserSettle();
            }
        }
    }
    //调用清除 addressIs=true时，处理踢掉的人数据，=false时，处理留在桌内的人
    setClearTableData(address:string){
        if(!this.userSeatDataArr || this.userSeatDataArr.length <= 0){
            return;
        }
        let userData = this.userSeatDataArr.slice();
    
        if(!userData){
            return;
        }
        if(userData.length <= 0){
            return;
        }
        console.log(userData, address, "清除数据");
        for(var i=0;i<userData.length;i++){
            
            if(userData[i].addr == App.Race.WalletAddress){//如果自己在座位上则，将0号位置按钮隐藏
                console.log("将位置清掉");
                this.vacancySeatArr[0].active = false;
            }
            if(userData[i].addr == address){
                this.clearData(i);
            }
        }
        this.setSeatBtnType();
        //如果离开的是自己，则转变自己视角其他用户位置
        if(address == App.Race.WalletAddress){
            let movePosition = [];
            for(var i=0;i<this.userSeatArr.length;i++){
                let move = this.userSeatDataArr[i].position;
                this.userSeatArr[i].x = this.UserPoint[move][0];
                this.userSeatArr[i].y = this.UserPoint[move][1];
                movePosition.push(move);
            }
            this.hideSeatDown(movePosition);
        }
        
    }
    //清除桌内数据
    clearData(index:number){
        let maxIndex = Number(App.GameDataCtrl.GameTableInfo.maxPlayers);
        let rotateIndex = maxIndex - this.selfPosition;
        console.log(this.userSeatDataArr, index, "清除桌内数据");
        if(this.userSeatDataArr.length > 0 && this.userSeatDataArr[index]){
            let move = (this.userSeatDataArr[index].position + rotateIndex) % maxIndex;
            this.userLayer.removeChild(this.userSeatArr[index]);
            console.log(move, "清除桌内数据时隐藏");
            this.vacancySeatArr[move].active = true;
            
            this.userSeatDataArr.splice(index,1);
            this.userSeatArr.splice(index,1);
        }
        
    }
    //退出游戏
    async exitGame(){
        if(App.GameDataCtrl.GameStageData.stage == GameConstant.GameStage.Play || App.GameDataCtrl.GameStageData.stage == GameConstant.GameStage.Runner){
            UIManager.toastDialog("游戏中无法退出!");
            return;
        }
        //closeConnection
        PoolManager.getLoading();
        const AppClient = App.Race.AppClientCurrent;
        
        var isSeat = App.GameDataCtrl.GameStageData.playerMap.has(App.Race.WalletAddress);
        console.log(App.Race.Holdem ,isSeat, "点击退出");
        if(!App.Race.Holdem || !isSeat){
            PoolManager.setLoading();
            this.closeSocket();
            App.SceneMgr.switchScene("LobbyScene");
            return
        }
        
        await AppClient.current.exit();
        PoolManager.setLoading();
        // 
        console.log("退出成功");
    }
    //主动断开socket
    async closeSocket(){
        const AppClient = App.Race.AppClientCurrent;
        await AppClient.current.close()
    }
    protected onDisable(): void {
        App.CustomEventListener.off(ServerEvent.INIT_USER_SEAT, this.syncUserEnter, this);
        App.CustomEventListener.off(ServerEvent.OTHER_USER_ENTER, this.initOtherUser, this);
        App.CustomEventListener.off(ServerEvent.UPDATE_CUSTOM_TYPE, this.initOtherUser, this);
        App.CustomEventListener.off(ServerEvent.GAME_RUNNER, this.showAllinCard, this);
        App.CustomEventListener.off(ServerEvent.GAME_SETTLE, this.gameSettle, this);
        App.CustomEventListener.off(ServerEvent.GAME_SHOWDOWN, this.gameSettle, this);
        App.CustomEventListener.off(ServerEvent.USER_LEAVE_GAME, this.userLeave, this);
        App.CustomEventListener.off(ServerEvent.ACTION_TIMEOUT, this.initOtherUser, this);
        App.CustomEventListener.removeAll(this.node);
    }
}
