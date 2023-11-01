import SingtonClass from "./SingtonClass";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallDataCtrl extends SingtonClass {
    private _tableData:any;

    set tableData(data: any) {
        this._tableData = data;
    }

    get tableData() {
        return this._tableData;
    }
}
