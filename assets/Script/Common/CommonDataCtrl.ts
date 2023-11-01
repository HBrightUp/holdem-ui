import SingtonClass from "./SingtonClass";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CommonDataCtrl extends SingtonClass {
    private _tableData:any;
    private _sceneName:string = "Loading";
    private _currentTableAddress:string;
    private _settleVersion:any = 0;
    private _isWaitJoin:boolean = false;

    set tableData(data: any) {
        this._tableData = data;
    }

    get tableData() {
        return this._tableData;
    }

    set sceneName(data: any) {
        this._sceneName = data;
    }

    get sceneName() {
        return this._sceneName;
    }
    
    set currentTableAddress(data: any) {
        this._currentTableAddress = data;
    }

    get currentTableAddress() {
        return this._currentTableAddress;
    }

    
    set settleVersion(data: any) {
        this._settleVersion = data;
    }

    get settleVersion() {
        return this._settleVersion;
    }

    set isWaitJoin(data: boolean) {
        this._isWaitJoin = data;
    }

    get isWaitJoin() {
        return this._isWaitJoin;
    }
    
}
