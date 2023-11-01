import SingtonClass from "./SingtonClass";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameDataCtrl extends SingtonClass {
    private _gameStageData:any;
    private _gameCard:any;
    private _userChips:number;
    private _eventData:any;
    private _collectBets:any;
    private _settleVersion:BigInt;
    private _gameAddr:string;
    private _gameTableInfo:any;
    private _oldGameData:any;
    private _isSeat:boolean = false;

    set GameStageData(data: any) {
        this._gameStageData = data;
    }

    get GameStageData() {
        return this._gameStageData;
    }

    set GameCard(data: any) {
        this._gameCard = data;
    }

    get GameCard() {
        return this._gameCard;
    }

    set UserChipsBalance(data: any) {
        this._userChips = data;
    }

    get UserChipsBalance() {
        return this._userChips;
    }

    set EventData(data: any) {
        this._eventData = data;
    }

    get EventData() {
        return this._eventData;
    }
    
    set CollectBets(data){
        this._collectBets = data;
    }
    get CollectBets(){
        return this._collectBets;
    }

    set SettleVersion(data:BigInt){
        this._settleVersion = data;
    }
    get SettleVersion(){
        return this._settleVersion;
    }

    set GameAddr(addr:string){
        this._gameAddr = addr;
    }

    get GameAddr(){
        return this._gameAddr;
    }

    set GameTableInfo(data:any){
        this._gameTableInfo = data;
    }

    get GameTableInfo(){
        return this._gameTableInfo;
    }

    set OldGameData(data:any){
        this._oldGameData = data;
    }

    get OldGameData(){
        return this._oldGameData;
    }

    set IsSeat(type:boolean){
        this._isSeat = type;
    }

    get IsSeat(){
        return this._isSeat;
    }
}
