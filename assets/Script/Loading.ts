import App from "./Common/App";
import GameConstant from "./Common/GameConstant";
import PoolManager from "./PoolManager/PoolManager";

import { Holdem } from "./Race/Holdem";
import { UIManager } from "./UI/UIManager";
import LinkKit from "./Web3/LinkKit";
import WalletConnectCtrl from "./Web3/WalletConnectCtrl";

// declare var RaceTransport;
let RaceTransport;
if(!cc.sys.isNative){
    RaceTransport = window["RaceTransport"];
  
  }
// import {readFileSync} from 'fs';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends cc.Component {

    @property(cc.EditBox)
    nameEditbox: cc.EditBox = null;

    @property(cc.Node)
    nameBtn: cc.Node = null;

    @property(cc.Node)
    loginBtn: cc.Node = null;

    @property(cc.Label)
    btnLab: cc.Label = null;

    @property(cc.Node)
    mobileConnectBtn: cc.Node = null;

    @property(cc.Prefab)
    createGame: cc.Prefab = null;

    @property(cc.Prefab)
    loadingPre: cc.Prefab = null;
 
    chain: string = "facade";
    helper: any;
    facadeWallet: any;
    gameData: any;
    AppClient: any;
    profile: any;
    holdem: Holdem;
    loadingNode: cc.Node;


    async onLoad() {
        // // 创建一个 Map
        // const myMap = new Map<string, number>();

        // // 向 Map 中添加键值对
        // myMap.set('b', 2);
        // myMap.set('c', 3);
        // console.log(myMap, "myMap=====");
        // // 判断 Map 中是否包含键 'a'
        // if (myMap.has('a')) {
        // console.log('Map 中包含键 "a"');
        // } else {
        // console.log('Map 中不包含键 "a"');
        // }
        this.mobileConnectBtn.on("click",()=>{
            WalletConnectCtrl.instance.handleOpenModal();
        },this);
        this.loadingNode = PoolManager.getNode(this.loadingPre,this.node);
    }
    async start() {
        
        // 加载常驻节点
        const uiRoot = await cc.resources.loadAsync<cc.Prefab>(
            'ToastNode',
            cc.Prefab
        )
        this.node.parent.addChild(cc.instantiate(uiRoot))
        
        // App.CustomEventListener.on(GameConstant.GameEvent.INIT_WALLET_CONNECT, this.initRace, this);
        if(cc.sys.isMobile){
            App.CustomEventListener.on(GameConstant.GameEvent.INIT_WALLET_CONNECT, this.initRace, this);
        }else{
            try {
                App.CustomEventListener.on(GameConstant.GameEvent.CHANGE_CHAINID, this.initRace, this);
                LinkKit.instance.checkChain();
                this.initRace();
            } catch (error) {
                console.log("加载出错");
            }
            
        }
        
        
        // const uiLoading = await cc.resources.loadAsync<cc.Prefab>(
        //     'loading',
        //     cc.Prefab
        // )
        // this.scheduleOnce(()=>{
        //     UIManager.toastDialog("测试弹框展示");
        // },2)
    }
    // async createRegistration(){
    //     console.log("MINT代币");
    //     LinkKit.instance.send(
    //         LinkKit.instance.configs.Token.abi,
    //         LinkKit.instance.configs.Token.address,
    //         "mint",
    //         [10000],
    //         { from: LinkKit.instance.address },
    //         result => {
                
    //         },
    //         this
    //     );
    // }

    clickCreateGame() {
        PoolManager.getNode(this.createGame,this.node);
    }
    async initRace() {
        if(cc.sys.isMobile){
            if(!WalletConnectCtrl.instance.session){
                this.mobileConnectBtn.active = true;
                PoolManager.setNode(this.loadingNode);
                return;
            }else{
                this.mobileConnectBtn.active = false;
            }
        }
        const EvmTransport = RaceTransport.EVMTransport;
        const transport = new EvmTransport(LinkKit.instance.web3, 80001); 

        App.Race.Transport = transport;
        const AppHelper = App.Race.AppHelper;
        
        this.helper = new AppHelper(transport);//transport

        this.facadeWallet = App.Race.EvmWallet;
        this.initUserInfo();
    }
    async initUserInfo(){
        if(await this.getUserIsLogin()){
            this.nameEditbox.node.active = false;
            this.btnLab.string = "登录";
        }else{
            this.nameEditbox.node.active = true;
            this.btnLab.string = "创建";
        }
        this.loginBtn.active = true;
        PoolManager.setNode(this.loadingNode);
        
    }
    
    async createProfile() {
        LinkKit.instance.checkChain();
        console.log("加载数据");
        if(await this.getUserIsLogin()){
            App.SceneMgr.switchScene("LobbyScene");
        }else{
            
            await this.helper.createProfile(this.facadeWallet, this.nameEditbox.string, "");
            const profile = await this.helper.getProfile(this.facadeWallet.walletAddr);
            console.log(profile, "profile1====");
            if(profile && profile.nick !== ""){
                App.SceneMgr.switchScene("LobbyScene");
            }
        }
    }
    async getUserIsLogin(){
        // console.log(this.helper, "this.helper===");
        if (this.helper) {
            let address = LinkKit.instance.toChecksumAddress(this.facadeWallet.walletAddr);
            App.Race.WalletAddress = address;
            const profile = await this.helper.getProfile(this.facadeWallet.walletAddr);
            console.log(profile, "名称值");
            if(profile && profile.nick !== ""){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }
    protected onDestroy(): void {
        App.CustomEventListener.off(GameConstant.GameEvent.INIT_WALLET_CONNECT, this.initRace, this);
        App.CustomEventListener.off(GameConstant.GameEvent.CHANGE_CHAINID, this.initRace, this);
    }
}
