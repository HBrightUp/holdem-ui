// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import App from "../Common/App";
import GameConstant from "../Common/GameConstant";
import PoolManager from "../PoolManager/PoolManager";
import NewListView from "../UI/ListView/NewListView";
import { KGameUtils } from "../Utils/KGameUtils";
import LinkKit from "../Web3/LinkKit";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LobbyView extends cc.Component {

    @property(cc.Label)
    balanceOfLabel: cc.Label = null;

    @property(cc.Prefab)
    createGame: cc.Prefab = null;

    @property(cc.Prefab)
    gameItem: cc.Prefab = null;

    @property({ type: NewListView, displayName: '道具列表', visible: true })
    private _listView: NewListView = null;

    helper: any;
    facadeWallet: any;
    gameData: any;

    onLoad() {

    }

    start() {
        const AppHelper = App.Race.AppHelper;
        const evmTransport = App.Race.Transport;

        this.helper = new AppHelper(evmTransport);
        this.facadeWallet = App.Race.EvmWallet;
        this.initGameList();
        this.getBalanceOf();
        if(App.CommonDataCtrl.isWaitJoin){
            this.scheduleOnce(()=>{
                App.CommonDataCtrl.isWaitJoin = false;
                this.initGameList();
            },15)
        }
    }

    initGameList() {
        try {
            let str = GameConstant.AdressCtrl.regAddr;
            this.helper.listGames([str]).then(r => {
                console.log(r, "listGame");
                this.gameData = r;
                if (r.length > 0) {
                    this.initGameListItem(r);
                }
                // setGames(r);
            })
        } catch (error) {
            console.log(error);
        }
    }
    async getBalanceOf() {
        let balanceData = await App.Race.Transport.fetchBalances(LinkKit.instance.address,GameConstant.TokenAdress);
        balanceData.forEach((value,key)=>{
            let balance = LinkKit.instance.mulBN(value.toString());
            App.UserDataCtrl.UserBalance = Number(balance);
            this.balanceOfLabel.string = "余额：" + balance;
        })
        App.SceneMgr.preloadScene('GameScene');
    }
    initGameListItem(item: any) {
        this._listView.InitWithNum(item.length, item);
    }
    clickCreateGame() {
        PoolManager.getNode(this.createGame,this.node);
    }
    // update (dt) {}
}
