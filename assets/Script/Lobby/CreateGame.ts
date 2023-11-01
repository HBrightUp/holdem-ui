// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import App from "../Common/App";
import GameConstant from "../Common/GameConstant";
import PoolManager from "../PoolManager/PoolManager";
import { UIManager } from "../UI/UIManager";
import LinkKit from "../Web3/LinkKit";
import { setCreateData } from "./CreateGameData";
import InitCreateGame from "./InitCreateGame";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CreateGame extends cc.Component {

    @property(cc.EditBox)
    gameName: cc.EditBox = null;

    @property(cc.EditBox)
    gameSb: cc.EditBox = null;

    @property(cc.EditBox)
    gameBB: cc.EditBox = null;

    @property(cc.EditBox)
    gameRake: cc.EditBox = null;

    listNfts:any;

    start () {
        //创建游戏=>创建游戏房间=>将房间地址放入注册表=>如果没有注册表则创建，有则直接添加
        //createGameAccount
        //getNFTGameList获取游戏下列表
        //getRegistration 有 registerGame
        //createRegistration注册列表 registerGame
        App.CustomEventListener.on(GameConstant.GameEvent.CHANGE_CHAINID, this.createGameRoom, this);
        this.getGameList();
        // this.scheduleOnce(this.getGameList,2);
    }
    
    //获取游戏
    async getGameList(){
        console.log("获取游戏列表", App.Race.Transport);
        this.listNfts = await App.Race.Transport.listNfts(GameConstant.AdressCtrl.regAddr);//LinkKit.instance.address
        console.log(this.listNfts, "GameList");
        // this.getRegistration();
        // this.createGameRoom();
    }
    //创建游戏房间
    async createGameRoom(){
        await LinkKit.instance.checkChain();
        console.log("执行下面了");
        if(this.listNfts.length <= 0){
            return;
        }
        
        let dataNum = this.node.getComponent(InitCreateGame).getCurrentNum();
        let sb = BigInt(Number(LinkKit.instance.divBN(this.gameSb.string)));
        let bb = BigInt(Number(LinkKit.instance.divBN(this.gameBB.string)));
        let rake = Number(this.gameRake.string);
        let data = {
            sb: sb,
            bb: bb,
            rake: rake,
            autoStart: dataNum.autoStart

        }
        console.log(data , this.listNfts, "-------");
        // let jsonString = JSON.stringify(data);
        // const encoder = new TextEncoder();
        // const bytes = encoder.encode(jsonString);
        const bytes = setCreateData(data);

        let params = {
            bundleAddr:this.listNfts[this.listNfts.length-1].addr,
            tokenAddr:GameConstant.AdressCtrl.tokenAddr,
            title:this.gameName.string,
            maxPlayers:dataNum.tableSize,
            minDeposit:LinkKit.instance.divBN(dataNum.minBuyIn.toString()),
            maxDeposit:LinkKit.instance.divBN(dataNum.maxBuyIn.toString()),
            data: bytes
        }
        PoolManager.getLoading();
        try {
            let game = await this.transportFun("createGameAccount", params);
            this.addRegisterGame(game);
        } catch (error) {
            PoolManager.setLoading();
            UIManager.toastDialog("加载出错");
        }
        
    }
    
    //添加注册表
    async addRegisterGame(gameAddr:any){
        if(this.listNfts.length <= 0){
            return;
        }
        let params = {
            regAddr:GameConstant.AdressCtrl.regAddr,
            gameAddr:gameAddr
        }
        console.log(params, "registerGame Params-----");
        let registerGame = await this.transportFun("registerGame", params);
        this.closePanel();
        
        // let registerGame = await App.Race.Transport.registerGame(App.Race.EvmWallet,params)
        console.log(registerGame, "registerGame------");
    }
    
    closePanel(){
        PoolManager.setLoading();
        PoolManager.setNode(this.node);
    }

    //创建游戏
    async onClickCreateGame(){
        let params = {
            name:"Race Holdem",
            symbol:"Symbol",
            uri:"http://192.168.100.46:12002"
        }
        let test = await this.transportFun("publishGame",params);
        console.log(test, "测试");
        
    }

    //获取注册列表
    async getRegistration(){
        console.log("获取注册列表");
        let regist = await App.Race.Transport.getRegistration(LinkKit.instance.address);
        let owner = LinkKit.instance.toChecksumAddress(regist.owner);
        let address =  LinkKit.instance.toChecksumAddress(LinkKit.instance.address);
        console.log(regist, "regist");
        // if(owner == address){//已经有了
        //     this.addRegisterGame();
        // }else{
        //     this.createRegistration();
        // }
    }
    //创建注册列表
    async createRegistration(){
        let params = {
            isPrivate:false,
            size:100,
        }
        let createRegist = await this.transportFun("createRegistration", params);
        console.log(createRegist, "createRegist---");
    }

    async transportFun(funName:string,params:any): Promise<void> {
        return App.Race.Transport[funName](App.Race.EvmWallet,params);
        // return transport;
    }

    protected onDestroy(): void {
        App.CustomEventListener.off(GameConstant.GameEvent.CHANGE_CHAINID, this.createGameRoom, this);
    }
    
    // update (dt) {}
}
