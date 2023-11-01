import App from "./Common/App";
import GameConstant from "./Common/GameConstant";
import WalletConnectCtrl from "./Web3/WalletConnectCtrl";
let  RaceSdkCore ,Borsh, RaceTransport, RaceWaller, WalletConnect;
if(!cc.sys.isNative){
  RaceSdkCore = window["RaceSdkCore"];
  Borsh = window["Borsh"];
  RaceTransport = window["RaceTransport"];
  RaceWaller = window["RaceWaller"];
  WalletConnect = window["WalletConnect"];
}

const {ccclass, property} = cc._decorator;
declare global {
    interface Window {
      Borsh: typeof Borsh;
      RaceSdkCore: typeof RaceSdkCore;
      field: any;
      serialize: any;
      Web3Modal:any;
    }
    
  }
@ccclass
export default class Helloworld extends cc.Component {
    onLoad () {
      // App.CustomEventListener.on(GameConstant.GameEvent.INIT_WALLET_CONNECT, this.initRace, this);
      if(!cc.sys.isMobile){
        this.initRace();
      }else{
        App.CustomEventListener.on(GameConstant.GameEvent.INIT_WALLET_CONNECT, this.initRace, this);
      }
     
    }
    initRace(){
        App.Race.RaceSdkCore = RaceSdkCore;
        App.Race.Borsh = Borsh;
        window.Borsh = Borsh;
        window.RaceSdkCore = RaceSdkCore;
        if(Borsh){
          window.field = Borsh.field;
          window.serialize = Borsh.serialize;
        }

        console.log(RaceSdkCore,"数据");
        // console.log(RaceTransport, RaceWaller, "EVM");
        // console.log(App.Race.RaceSdkCore.CloseGameAccountParams , "CloseGameAccountParams------");
        // const transport = createTransport(chain, rpc);
        const AppHelper = RaceSdkCore.AppHelper;
        const AppClient = RaceSdkCore.AppClient;

        let EvmWallet, evmeWallet;
        // if(WalletConnectCtrl.instance.session){
        //   EvmWallet = window["WalletConnect"].WallConnectAdapter;
        //   console.log(WalletConnectCtrl.instance.signClient, WalletConnectCtrl.instance.topic, "TOPIc");
        //   evmeWallet = new EvmWallet(WalletConnectCtrl.instance.signClient, WalletConnectCtrl.instance.topic);
        //   console.log(evmeWallet, "evmeWallet===");
        // }
        if(cc.sys.isMobile){
          if(WalletConnectCtrl.instance.session){
            EvmWallet = window["WalletConnect"].WallConnectAdapter;
            evmeWallet = new EvmWallet(WalletConnectCtrl.instance.signClient, WalletConnectCtrl.instance.topic);
          }
        }else{
          EvmWallet = RaceWaller.EVMWalletAdapter;
          evmeWallet = new EvmWallet(window['ethereum']);
        }

        App.Race.AppHelper = AppHelper;
        App.Race.AppClient = AppClient;

        App.Race.EvmWallet = evmeWallet;
        // 
    }
    protected onDestroy(): void {
      App.CustomEventListener.off(GameConstant.GameEvent.INIT_WALLET_CONNECT, this.initRace, this);
  }
}
