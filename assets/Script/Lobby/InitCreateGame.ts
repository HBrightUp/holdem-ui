// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SliderCommon from "../Common/SliderCommon";
import PoolManager from "../PoolManager/PoolManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InitCreateGame extends cc.Component {

    @property(cc.Node)
    nodeSlider: cc.Node = null;

    @property(cc.Prefab)
    pfSlider: cc.Prefab = null;
    
    jsSliderScript:any[] = [];
    currentMinNum:number = 0;
    currentMaxNum:number = 9;
    minBuyIn:number = 100;
    maxBuyIn:number = 200;
    tableSize:number = 2;
    autoStart:number = 2;

    // onLoad () {}

    start () {
        this.initCommonSliderNew();
    }
    initCommonSliderNew(){
        let minimumBuyin = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        let maximumBuyin = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];
        let tableSize = [2, 3, 4, 5, 6, 7, 8, 9];
        let autoStart = [2, 3, 4, 5, 6]
        let slider_datas = [
            { index: 0, name: "minimumBuyin", title: "Minmum buy-in", datasource: minimumBuyin},
            { index: 1, name: "maximumBuyin", title: "Maximum buy-in", datasource: maximumBuyin},
            { index: 2, name: "tableSize", title: "Table size(players)", datasource: tableSize},
            { index: 3, name: "autoStart", title: "Auto-start(players)", datasource: autoStart},
        ];

        for (let i = 0; i < slider_datas.length; i++) {
            let item = slider_datas[i];

            let pSlider = cc.instantiate(this.pfSlider);
            pSlider.name = item.name;
            this.nodeSlider.addChild(pSlider);

            let jsSlider = pSlider.getComponent(SliderCommon);
            jsSlider.initSliderCommon(this, item.index, item.title, item.datasource, (progress, resultIndex, onlyCache) => {
                this.onSliderCommonEnd(i, progress, resultIndex, onlyCache);
            });

            this.jsSliderScript.push(jsSlider);
        }
    }
    // slider滑动结束，返回当前选中的值
    onSliderCommonEnd(k, progress, index, onlyCache) {
        let min_take_in = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        let max_take_in = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];
        let autoStart = [2, 3, 4, 5, 6]
        if (k == 0) {
            let currentIndex = this.jsSliderScript[1].currentIndex;
            this.jsSliderScript[0].currentIndex = index;
            let value = min_take_in[index];
            this.currentMaxNum = index;
            this.minBuyIn =  this.jsSliderScript[0].currentNum;

            if (onlyCache) {
                return;
            }

            let value1 = value;
            let value2 = max_take_in[this.currentMinNum];
            if(index == 0){
                this.currentMinNum = 0;
            }
            if (value1 >= value2) {
                let max_take_in_temp = max_take_in;
                let nextindex = 0;
                for (let i = 0; i < max_take_in_temp.length; i++) {
                    let value2 = max_take_in_temp[i];
                    if (value1 < value2) {
                        nextindex = i;
                        break;
                    }
                }
                this.currentMinNum++;
                if(currentIndex > nextindex){
                    return;
                }
                // console.log("onSliderCommonEnd =====min value1: " + value1 + " value2: " + value2 + " nextindex: " + nextindex);
                this.jsSliderScript[1].sliderCommonToNext(nextindex);
            }
        }
         else if (k == 1) {
            // let currentIndex = this.jsSliderScript[0].currentIndex;
            let value = max_take_in[index];
            this.maxBuyIn =  this.jsSliderScript[1].currentNum;
            if (onlyCache) {
                return;
            }
            this.jsSliderScript[1].currentIndex = index;
            let value1 = min_take_in[this.currentMaxNum];
            let value2 = value;
            if (value1 >= value2) { // value1 > value2， 调整 value1（往左滑），使 value1 < value2
                let min_take_in_temp = min_take_in;
                let lastindex = 0;
                for (let i = min_take_in_temp.length - 1; i >= 0; i--) {
                    let value1 = min_take_in_temp[i];
                    if (value1 < value2) {
                        lastindex = i;
                        break;
                    }
                }
                this.currentMaxNum--;
                this.jsSliderScript[0].sliderCommonToLast(lastindex);
            }

        } 
        else if (k == 2) {
            this.tableSize =  this.jsSliderScript[2].currentNum;
            

        } else if (k == 3) {
            this.autoStart =  this.jsSliderScript[3].currentNum;
            let tableSize = this.jsSliderScript[2].currentNum;
            let autonum = this.autoStart;
            if (tableSize < autonum) {
                let lastindex = -1;
                for (let i = autoStart.length - 1; i >= 0; i--) {
                    autonum = autoStart[i];
                    if (tableSize >= autonum) {
                        lastindex = i;
                        break;
                    }
                }
                this.jsSliderScript[3].sliderCommonToLast(lastindex);
            }
        }
    }
    getCurrentNum(){
        var obj = {
            minBuyIn:this.minBuyIn,
            maxBuyIn:this.maxBuyIn,
            tableSize:this.tableSize,
            autoStart:this.autoStart
        }
        return obj;
    }
    closePanel(){
        PoolManager.setNode(this.node);
    }
}
