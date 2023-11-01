// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SingtonClass from "../Common/SingtonClass";

const {ccclass, property} = cc._decorator;

interface IEventData {
    func: Function;
    target: any;
}

interface IEvent {
    [eventName: string]: IEventData[];
}

@ccclass
export default class CustomEventListener extends SingtonClass {

    public handle: IEvent = {};

    public on(eventName: string, cb: Function, target?: any) {
        if (!this.handle[eventName]) {
            this.handle[eventName] = [];
        }

        const data: IEventData = { func: cb, target };
        this.handle[eventName].push(data);
    }

    public off(eventName: string, cb: Function, target?: any) {
        const list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }

        for (let i = 0; i < list.length; i++) {
            const event = list[i];
            if (event.func === cb && (!target || target === event.target)) {
                list.splice(i, 1);
                break;
            }
        }
    }

    public dispatchEvent(eventName: string, ...args: any) {
        const list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }

        for (let i = 0; i < list.length; i++) {
            const event = list[i];
            event.func.apply(event.target, args);
        }
    }


    //移除节点上的所有事件监听
    public removeAll(target: any) {
        var keys = Object.keys(this.handle);
        for (let i: number = 0, len = keys.length; i < len; i++) {
            var type = keys[i];
            var arr: Array<any> = this.handle[type];
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].target == target) {
                    arr.splice(j, 1);
                    j--;
                }
            }
        }
    }
}
