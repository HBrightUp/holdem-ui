

import App from "../Common/App";
import GameConstant from "../Common/GameConstant";
import SingtonClass from "../Common/SingtonClass";
import PoolManager from "../PoolManager/PoolManager";
import { CollectBets, Holdem } from "../Race/Holdem";
import StageDiffCtrl from "../Race/StageDiffCtrl";
import { UIManager } from "../UI/UIManager";

import { KGameUtils } from "../Utils/KGameUtils";
import LinkKit from "../Web3/LinkKit";

const ServerEvent = GameConstant.ServerEvent;

const {ccclass, property} = cc._decorator;

@ccclass
export default class StageGame extends SingtonClass {

    
    async initClient(wallet:any,addr:string){
        
        try {
            
            App.GameDataCtrl.GameAddr = addr;

            const AppClient = App.Race.AppClient;
            const evmTransport = App.Race.Transport;
            let c = await AppClient.initialize({ transport: evmTransport, wallet, gameAddr: addr, onEvent: this.onEvent, onClose: this.onSocketClose });
            let appClient = Object.create(AppClient);
            const appClientProto = appClient.prototype;
            appClientProto.current = c;
            
            App.Race.AppClientCurrent = appClientProto.current;
            await c.attachGame();
        } catch (error) {
            PoolManager.setLoading();
            UIManager.toastDialog("加载出错");
            console.log(error, "抛出异常")
        }
    }
    async onSocketClose(){
        const wallet = App.Race.EvmWallet;
        let addr = App.CommonDataCtrl.currentTableAddress;
        await App.StageGame.initClient(wallet, addr);
        // this.initClient(wallet, addr);
    }
    async onEvent(_context, stateData: Uint8Array, event: any){
        console.log(_context , "event-------");
        // console.log(_context.timestamp);
        const deserialize = App.Race.Borsh.deserialize;
        const Stage = deserialize(Holdem, stateData);
        App.Race.Holdem = Stage;
        if(Stage.bb){
            Stage.bb = Number(LinkKit.instance.mulBN(Stage.bb.toString()));
        }
        if(Stage.minRaise){
            console.log(Stage);
            //minRaise出现错误
            if( Number(LinkKit.instance.mulBN(Stage.minRaise.toString())) > 10000){
                return;
            }
            Stage.minRaise = Number(LinkKit.instance.mulBN(Stage.minRaise.toString()));
        }

        if(Stage.sb){
            Stage.sb = Number(LinkKit.instance.mulBN(Stage.sb.toString()));
        }
        App.GameDataCtrl.GameStageData = Stage;
        console.log("Stage", Stage);
        
        if(Stage.stage == GameConstant.GameStage.Settle){//结算
            console.log("Settle=======");
            App.CustomEventListener.dispatchEvent(ServerEvent.GAME_SETTLE,true);
        }
        if(Stage.stage == GameConstant.GameStage.Showdown){//开牌
            console.log("Showdown=======");
            App.CustomEventListener.dispatchEvent(ServerEvent.GAME_SHOWDOWN);
        }

        if (event !== undefined) {
            // console.log(event , "event-----------");
            let kind = event.kind();
            console.log(kind , "获取Kind");
            let data = JSON.stringify(event, KGameUtils.replacer);
            
            let player = Stage.playerMap;
            let eventData = JSON.parse(data);
            console.log(eventData, "EVENT解析数据");
            App.GameDataCtrl.EventData = eventData;
            App.GameDataCtrl.GameStageData = Stage;
            
            if(kind == "Ready"){
                App.GameDataCtrl.SettleVersion = _context.settleVersion;
            }

            //判断进桌
            if(kind == "Sync" && data !== "{}" && eventData.newPlayers){
                App.CustomEventListener.dispatchEvent(ServerEvent.INIT_USER_SEAT, eventData.newPlayers);
            }
            //离桌
            if (kind == 'Leave' && App.Race.AppClientCurrent && Stage){
                App.CustomEventListener.dispatchEvent(ServerEvent.USER_LEAVE_GAME,eventData.playerAddr);
            }
            
            if (kind == 'SecretsReady' && App.Race.AppClientCurrent && Stage) {
                
                try {
                    let card = await App.Race.AppClientCurrent.getRevealed(Stage.deck_random_id);
                    let cardValue = [];
                    card.forEach((value, key) => {
                        cardValue.push(value);
                    });
                    // console.log(cardValue , "获取牌");
                    App.GameDataCtrl.GameCard = cardValue;
                    
                    App.CustomEventListener.dispatchEvent(ServerEvent.OTHER_USER_ENTER, true);
                    if(Stage.stage == GameConstant.GameStage.Runner){//All in
                        let outAddress = StageDiffCtrl.getChanges(Stage);
                        if(outAddress && outAddress.length > 0){
                            App.CustomEventListener.dispatchEvent(ServerEvent.USER_LEAVE_GAME,outAddress);
                        }else{
                            App.CustomEventListener.dispatchEvent(ServerEvent.GAME_RUNNER,Stage);
                        }
                    }
                    
                } catch (e) {
                    console.error(e);
                }
                
            }
            //点击下注后，只会发送这个消息，只能从这里更新数据
            if (kind == 'Custom'){
                let display = Stage.display;
                if(display.length > 0){
                    let collectBets = display[0];
                    if(collectBets instanceof CollectBets){
                        App.GameDataCtrl.CollectBets = collectBets.betMap
                    }
                }
                App.GameDataCtrl.GameStageData = Stage;

                App.CustomEventListener.dispatchEvent(ServerEvent.UPDATE_CUSTOM_TYPE, false);
            }
            //操作超时更新
            if (kind == 'ActionTimeout' && App.Race.AppClientCurrent && Stage){
                let isOut = StageDiffCtrl.actionTimeoutAddress(event.playerAddr,Stage);
                if(isOut){
                    App.CustomEventListener.dispatchEvent(ServerEvent.USER_LEAVE_GAME, event.playerAddr);
                }else{
                    App.CustomEventListener.dispatchEvent(ServerEvent.ACTION_TIMEOUT, true);
                }
            }
            //操作超时更新
            if (kind == 'WaitingTimeout' && App.Race.AppClientCurrent && Stage){
                
            }
        }else{
            if(App.GameDataCtrl.SettleVersion == _context.settleVersion){
                return;
            }
            if(App.CommonDataCtrl.sceneName == "GameScene"){
                return;
            }
            App.SceneMgr.switchScene("GameScene");
        }
    }
}
