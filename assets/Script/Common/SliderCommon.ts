// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import InitCreateGame from "../Lobby/InitCreateGame";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SliderCommon extends cc.Component {

    @property(cc.Label)
    lblTitle: cc.Label = null;

    @property(cc.Node)
    nodeSlider: cc.Node = null;

    @property(cc.Label)
    lblMinNum: cc.Label = null;

    @property(cc.Label)
    lblMaxNum: cc.Label = null;

    @property(cc.Label)
    lblCurrentNum: cc.Label = null;

    @property(cc.Slider)
    Slider: cc.Slider = null;

    @property(cc.Node)
    nodeSliderHandle: cc.Node = null;

    @property(cc.ProgressBar)
    ProgressBar: cc.ProgressBar = null;

    InitCreateGame:InitCreateGame;
    dataItem:any;
    count:number = 0;
    targetIndex:number;
    sliderCount:number;
    arrX:any[] = [];
    arrMark:any[] = [];
    lblValues:any[] = [];
    onSliderCommonEnd:any;
    currentIndex:number = 0;
    currentNum:number = 0;
    // onLoad () {}

    start () {
        this.Slider.node.on("slide", ()=>{
            this.touchEndedEventSlider(null);
        }, this);
    }

    initSliderCommon(InitCreateGame:InitCreateGame, index:number, title:string, data:any, onSliderEnd){
        this.targetIndex = index;
        this.InitCreateGame = InitCreateGame;
        this.lblTitle.string = title;
        this.onSliderCommonEnd = onSliderEnd;
        this.updateSliderCommonData(data);
        this.updateSliderCommon(0);
    }

    updateSliderCommonData(data:any){
        this.dataItem = data;
        this.count = data.length;
        this.sliderCount = data.length-1;
        this.lblMinNum.string = data[0];
        this.lblMaxNum.string = data[data.length-1];
        for (let i = 0; i < this.count-2; i++) {
            let index = (500/(this.count-1) * (i+1));
            this.arrX.push(index);
        }
    }

    touchEndedEventSlider(event){
        let percent = this.Slider.progress;
        let index = this.getIndex(percent);
        this.updateSliderCommon(index);
        this.ProgressBar.progress = index/this.sliderCount;
        this.nodeSliderHandle.x = -250 + index*(500/this.sliderCount);
        if (this.onSliderCommonEnd) {
            this.onSliderCommonEnd(this.ProgressBar.progress, index);
        }
        
    }

    updateSliderCommon(index:number){
        if(index == 0){
            this.lblCurrentNum.node.active = false;
        }else if(index == this.dataItem.length-1){
            this.lblCurrentNum.node.active = false;
        }else{
            this.lblCurrentNum.node.active = true;
        }
        this.lblCurrentNum.string = this.dataItem[index];
        this.currentNum = this.dataItem[index];
        this.nodeSliderHandle.x = -250 + index*(500/this.sliderCount);
    }
    // 滑动到下一刻度
    sliderCommonToNext (nextindex) {
        this.currentIndex = nextindex;
        this.updateSliderCommon(nextindex);

        if (this.onSliderCommonEnd) {
            this.onSliderCommonEnd(this.ProgressBar.progress, nextindex, true);
        }
    }

    // 滑动到前一刻度
    sliderCommonToLast (lastindex) {
        this.updateSliderCommon(lastindex);

        if (this.onSliderCommonEnd) {
            this.onSliderCommonEnd(this.ProgressBar.progress, lastindex, true);
        }
    }
    getIndex (percent) {
        let current = percent*500;
        let left = 0;
        let right = 0;
        let index = 0;

        let count = this.arrX.length;
        if (current >= 0 && current < this.arrX[0]) { // 第一个
            left = current - 0;
            right = this.arrX[0] - current;
            index = 0;
            if (left >= right) {
                return index+1;
            } else {
                return index;
            }
        }

        if (current > this.arrX[count-1]) { // 最后一个
            left = current - this.arrX[count-1];
            right = 500 - current;
            index = count;
            if (left >= right) {
                return index+1;
            } else {
                return index;
            }
        }

        for (let i = 0; i < count-1; i++) {
            if (current >= this.arrX[i] && current <= this.arrX[i+1]) {
                left = current - this.arrX[i];
                right = this.arrX[i+1] - current;
                index = i+1;
                if (left >= right) {
                    return index+1;
                } else {
                    return index;
                }
            }
        }
    }
}
