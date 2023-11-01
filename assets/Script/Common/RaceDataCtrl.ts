import SingtonClass from "../Common/SingtonClass";
import { Holdem } from "../Race/Holdem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RaceDataCtrl extends SingtonClass {
    private _RaceSdkCore:any;
    private _Borsh:any;
    private _AppHelper;
    private _AppClient;
    private _FacadeTransport;
    private _FacadeWallet;
    private _EvmWallet;
    private _Transport;
    private _Holdem:Holdem;
    private _AppClientCurrent;
    private _WalletAddress:string;

    set RaceSdkCore(RaceSdkCore) {
        this._RaceSdkCore = RaceSdkCore;
    }

    get RaceSdkCore() {
        return this._RaceSdkCore;
    }
    
    set Borsh(Borsh){
        this._Borsh = Borsh;
    }
    get Borsh(){
        return this._Borsh;
    }

    set AppHelper(AppHelper) {
        this._AppHelper = AppHelper;
    }

    get AppHelper() {
        return this._AppHelper;
    }

    set AppClient(AppClient){
        this._AppClient = AppClient;
    }
    get AppClient(){
        return this._AppClient;
    }

    set FacadeTransport(FacadeTransport){
        this._FacadeTransport = FacadeTransport;
    }
    get FacadeTransport(){
        return this._FacadeTransport
    }
    
    set FacadeWallet(FacadeWallet){
        this._FacadeWallet = FacadeWallet;
    }
    get FacadeWallet(){
        return this._FacadeWallet;
    }

    set EvmWallet(EvmWallet){
        this._EvmWallet = EvmWallet;
    }
    get EvmWallet(){
        return this._EvmWallet;
    }
    
    set Transport(Transport){
        this._Transport = Transport;
    }
    get Transport(){
        return this._Transport;
    }

    set Holdem(Holdem){
        this._Holdem = Holdem;
    }
    get Holdem(){
        return this._Holdem;
    }

    set AppClientCurrent(AppClientCurrent){
        this._AppClientCurrent = AppClientCurrent;
    }
    get AppClientCurrent(){
        return this._AppClientCurrent;
    }

    set WalletAddress(address:string){
        this._WalletAddress = address;
    }

    get WalletAddress(){
        return this._WalletAddress;
    }
}
