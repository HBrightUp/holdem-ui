import GameDataCtrl from "./GameDataCtrl";
import HallDataCtrl from "./HallDataCtrl";
import UserDataCtrl from "./UserDataCtrl";
import CommonDataCtrl from "./CommonDataCtrl";
import SceneMgr from "../SceneKit/SceneMgr"
// import LinkKit from "../Web3/LinkKit";
import CustomEventListener from "../Event/CustomEventListener";
import RaceDataCtrl from "./RaceDataCtrl";
import StageGame from "../Stage/StageGame";
import Chipmanager from "./Chipmanager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class App {
    //链接数据
    public static globalData: any = null;
    public static _socketUrl: any;
    /**
         * 版本号
         */
    public static version: string;

    /**
        * 日志
        */
    public static log(message?: any, ...optionalParams: any[]) {
        //if (App.globalData && App.globalData.IsDebug)
        console.log(message, ...optionalParams);
    }
    /**
    *事件类
    */
    public static get CustomEventListener(): CustomEventListener {
        return CustomEventListener.getSingtonInstance();
    }
    /**
     * 大厅数据
     */
     public static get HallDataCtrl(): HallDataCtrl {
        return HallDataCtrl.getSingtonInstance();
    }
    /**
     * 游戏内数据
     */
    public static get GameDataCtrl(): GameDataCtrl {
        return GameDataCtrl.getSingtonInstance();
    }
    /**
     * 用户数据
     */
    public static get UserDataCtrl(): UserDataCtrl {
        return UserDataCtrl.getSingtonInstance();
    }
    /**
     * 通用类数据
     */
    public static get CommonDataCtrl(): CommonDataCtrl {
        return CommonDataCtrl.getSingtonInstance();
    }
    /**
     * Race类管理
     */
    public static get Race(): RaceDataCtrl {
        return RaceDataCtrl.getSingtonInstance();
    }
     /**
     * 场景管理类
     */
    public static get SceneMgr(): SceneMgr {
        return SceneMgr.getSingtonInstance();
    }
     /**
     * 场景管理类
     */
     public static get StageGame(): StageGame {
        return StageGame.getSingtonInstance();
    }
    /**
     * chips
     */
    public static get Chipmanager(): Chipmanager {
        return Chipmanager.getSingtonInstance();
    }
    /** */
    static init(jsonData: any) {
        this.globalData = jsonData;
        jsonData = jsonData.json;
        // console.log(this.globalData , "数据");
        
        // App.HallDataCtrl.isDebug = jsonData.IsDebug;
        // console.log(App.HallDataCtrl.serverType , jsonData.HttpServerTest,jsonData.HttpServer,"地址");
        // if (App.HallDataCtrl.serverType == 1) {//测试
        //     App.GameServerCtrl.initServer(jsonData.HttpServerTest+"/private/sockets");
        //     LinkKit.instance.initServer(jsonData.HttpServerTest);
        // } else if(App.HallDataCtrl.serverType == 2){
        //     App.GameServerCtrl.initServer(jsonData.HttpServer+"/private/sockets");
        //     LinkKit.instance.initServer(jsonData.HttpServer);
        // } else if(App.HallDataCtrl.serverType == 3){
        //     App.GameServerCtrl.initServer(jsonData.HttpServer1+"/private/sockets");
        //     LinkKit.instance.initServer(jsonData.HttpServer1);
        // }else{
        //     App.GameServerCtrl.initServer("http://"+App.HallDataCtrl.serverType+":8080/v1/private/sockets");
        //     LinkKit.instance.initServer("http://"+App.HallDataCtrl.serverType+":8080/v1");
        // }

        // if (jsonData.IsDebug == 1) {//测试
        //     App.GameServerCtrl.initServer(jsonData.HttpServerTest);
        // } else {
        //     App.GameServerCtrl.initServer(jsonData.HttpServer);
        // }

        // App.KHttp.sendHttpPost();

        // App._socketUrl = jsonData.data;

        // App.version = window["version"]||"1.0.0";
    }
    //加载URL数据
    static initUrlParamData() {
        // App.LabelUtils.init('en');

        
        var url = window.location.search;
        if (!url) {
            return;
        }
    }
}
