import { MD5 } from 'crypto-js';
import App from '../Common/App';

const { ccclass, property } = cc._decorator;

@ccclass
export default class StageDiffCtrl {
    private originalData: any;
    private updatedData: any;

    constructor(originalData: any, updatedData: any) {
        this.originalData = originalData;
        this.updatedData = updatedData;
    }

    // 比较对象的属性是否发生变化
    public static getChanges(Stage:any) {
        //第一次进来
        // if(this.originalData == undefined){
        //     this.originalData = this.updatedData;
        //     return;
        // }
        // let newPlayer = this.updatedData.playerMap;
        // let oldPlayer = this.updatedData.playerMap;
        // const changes = [];
        // const originalHash = this.md5Hash(oldPlayer);
        // const updatedHash = this.md5Hash(newPlayer);
        // if (originalHash !== updatedHash) {
        //     let addrArr:string[] = [];
        //     newPlayer.forEach((value,key)=>{
        //         addrArr.push(key);
        //     });
        //     const filteredArrA = addrArr.includes(App.Race.WalletAddress);
        //     console.log(addrArr, filteredArrA, App.Race.WalletAddress); // 输出 [2]
        //     if(!filteredArrA){
        //         changes.push(App.Race.WalletAddress);
        //     }
        // }
        // App.GameDataCtrl.OldGameData = this.originalData;
        let changes = "";
        let newPlayer = Stage.playerMap;
        let playerOrder = Stage.playerOrder;
        let addrArr:string[] = [];
        for(var i=0;i<playerOrder.length;i++){
            if(!newPlayer.has(playerOrder[i])){
                addrArr.push(playerOrder[i]);
            }
        }
        if(addrArr.length > 0){
            changes = addrArr[0];
        }
        console.log(addrArr, changes, "离开地址");
        return changes;
        // let addrArr:string[] = [];
        // newPlayer.forEach((value,key)=>{
        //     addrArr.push(key);
        // });
        // // if(playerOrder.length == newPlayer.size){
        // //     return changes;
        // // }
        // const filteredArrA = addrArr.includes(App.Race.WalletAddress);
        // if(!filteredArrA){
        //     changes = App.Race.WalletAddress;
        //     return changes;
        // }
        // return changes;
    }
    //转哈希
    md5Hash(data: any): string {
        return MD5(data).toString();
    }
    public static actionTimeoutAddress(address:string,Stage:any){
        let player = Stage.playerMap;
        return !player.has(address);
    }
}

// export class TimeSeriesDiffComparator{
//     private obj: any;
//     private lastValue: any;
  
//     constructor() {
//       this.obj = undefined;
//       this.lastValue = undefined;
//     }
  
//     updateObj(obj: any) {
//       // 如果是第一次更新，直接更新并返回undefined
//       if (this.lastValue === undefined) {
//         this.obj = obj;
//         this.lastValue = obj;
//         return undefined;
//       }
//       let newHash = this.md5Hash(obj);
//       let oldHash = this.md5Hash(this.lastValue);
//       console.log(newHash, oldHash, obj,this.lastValue, "对比结果");
//       // 检查对象是否发生变化
//       if (newHash !== oldHash) {
//         // 对象发生变化，处理变化的值，并更新上一次的值
//         let changes = "";
//         let newPlayer = obj;
//         let addrArr:string[] = [];
//         newPlayer.forEach((value,key)=>{
//             addrArr.push(key);
//         });
//         const filteredArrA = addrArr.includes(App.Race.WalletAddress);
//         if(!filteredArrA){
//             changes = App.Race.WalletAddress;
//         }
//         let diffData = {
//             outAddress:changes,
//             isChange:true
//         }
//         this.obj = obj;
//         this.lastValue = obj;
//         return diffData;
//       }
//     //   if (obj !== this.lastValue) {
//     //     // 对象发生变化，处理变化的值，并更新上一次的值
//     //     const diffValue = obj;
//     //     this.obj = obj;
//     //     this.lastValue = obj;
//     //     return diffValue;
//     //   }
//       // 对象未发生变化，返回undefined
//       return undefined;
//     }
  
//     getLastValue() {
//       return this.lastValue;
//     }
//     //转哈希
//     md5Hash(data: any): string {
//         return MD5(data).toString();
//     }
//   }
  
//   // 示例用法
//   const comparator = new TimeSeriesDiffComparator();
  
//   // 第一次更新
//   let value = 100;
//   let diff = comparator.updateObj(value);
//   console.log("变化的值:", diff); // undefined，因为第一次更新没有前一次的值
  
//   // 第二次更新，值未发生变化
//   value = 100;
//   diff = comparator.updateObj(value);
//   console.log("变化的值:", diff); // undefined
  
//   // 第三次更新，值发生变化
//   value = 150;
//   diff = comparator.updateObj(value);
//   console.log("变化的值:", diff); // 150，因为值从100变为150
  
//   // 获取上一次更新的值
//   const lastValue = comparator.getLastValue();
//   console.log("上一次更新的值:", lastValue); // 150
  