import App from "../../Common/App";
import LinkKit from "../../Web3/LinkKit";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CountingChips extends cc.Component {

    @property(cc.Node)
    pan_btn: cc.Node = null;    

    @property(cc.Node)
    pan_slider: cc.Node = null;    

    @property(cc.Slider)
    chips_slider: cc.Slider = null;

    @property(cc.EditBox)
    chips_editbox: cc.EditBox = null;

    @property(cc.Button)
    betBtn: cc.Button = null;

    @property(cc.Node)
    raiseBtn: cc.Node = null;

    @property(cc.Node)
    foldTime: cc.Node = null;

    @property(cc.Node)
    checkTime: cc.Node = null;

    selectChips:number = 0;

    // onLoad () {}

    start () {
        // this.updateChipsShow();
    }
    updateChipsShow(){
        let balance = Number(App.GameDataCtrl.UserChipsBalance);
        let minRaise = Number(App.GameDataCtrl.GameStageData.minRaise);
        
        let num = balance/minRaise;
        let len = num >=5 ? 5 : Math.floor(num);
        let currentRaise = this.initChipsData();

        if(currentRaise > balance){//大于余额
            this.chips_editbox.string = balance + "";
            this.pan_slider.active = false;
            this.pan_btn.active = false;
            this.selectChips = 0;
        }else{
            this.pan_slider.active = true;
            this.pan_btn.active = true;
            this.chips_editbox.string = currentRaise + "";
        }

        this.initRaiseNum(currentRaise);
        
        for(var i=0;i<Number(len);i++){
            this.pan_btn.children[i].active = true;
            this.pan_btn.children[i].getChildByName("lab_desc").getComponent(cc.Label).string = i+2 + "x BB";
            this.pan_btn.children[i].getChildByName("lab_num").getComponent(cc.Label).string = (i+2) * currentRaise +"";
        }

        this.chips_slider.node.on("slide",()=>{
            let chips = this.chips_slider.progress * (balance - currentRaise);
            let currentChips = currentRaise + Math.floor(chips);

            this.chips_editbox.string = currentChips + "";
            this.selectChips = currentChips;

            this.initRaiseNum(currentChips);

        },this);
        
    }
    initRaiseNum(currentRaise:number){

        let balance = Number(App.GameDataCtrl.UserChipsBalance);
        let raiStr:string = "RAISE";

        if(currentRaise >= balance){
            raiStr = "All in ";
            currentRaise = balance;
        }

        this.raiseBtn.getChildByName('chipNum').getComponent(cc.Label).string = raiStr + currentRaise;
        this.betBtn.node.getChildByName('chipNum').getComponent(cc.Label).string = "BET " + App.GameDataCtrl.GameStageData.bb;
    }
    initChipsData(){
        let streetBet = Number(LinkKit.instance.mulBN(App.GameDataCtrl.GameStageData.streetBet.toString()));
        console.log(App.GameDataCtrl.GameStageData.minRaise, streetBet, "streetBet33333333");
        let raise = Number(App.GameDataCtrl.GameStageData.minRaise) + streetBet;
        return raise;
    }
    onClickBBbtn(target,customEventData){
        // let minRaise = Number(App.GameDataCtrl.GameStageData.minRaise);
        let currentRaise = Number(this.initChipsData());
        let currentChips = (Number(customEventData) + 1) * currentRaise;
        
        this.selectChips = currentChips;
        this.raiseBtn.getChildByName("chipNum").getComponent(cc.Label).string = "Raise " + currentChips;

    }

    clearCountData(){
        this.selectChips = 0;
        this.raiseBtn.getChildByName("chipNum").getComponent(cc.Label).string = "";
        this.chips_slider.progress = 0;
    }
    // slider
    // update (dt) {}
}
