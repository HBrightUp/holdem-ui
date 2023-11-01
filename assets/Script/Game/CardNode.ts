// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardNode extends cc.Component {

    @property(cc.SpriteAtlas)
    cardAtlas: cc.SpriteAtlas = null;

    @property(cc.Sprite)
    spCardTex: cc.Sprite = null;

    @property(cc.Node)
    cardBack: cc.Node = null;

    @property(cc.Sprite)
    cardValue: cc.Sprite = null;

    cardWidth:number = 82;
    cardHeight:number = 112;
    //翻牌动画
    reverseSelfShare(value) {
        // console.log(value , "Card Value");
        let scale = this.node.scale;
        this.node.runAction(cc.sequence(
            cc.delayTime(0.1),
            cc.scaleTo(0.1, 0, scale),
            cc.callFunc(() => {
                this.cardBack.active = false;
                //展示牌值
                this.InitCardData(value);
            }),
            cc.scaleTo(0.1, scale, scale)));
    }
    InitCardData(cbCardData) {
        const self = this;
        this.cardBack.active = false;
        //更新牌数据
        //牌值与花色
        // let color = cbCardData >> 4;
        // let value = cbCardData & 0xf;
        if(!cbCardData){
            return;
        }

        let color = cbCardData[0];
        let value = cbCardData[1];
        var str = "poker_f_"+this.getCardColor(color)+"_"+this.getCardValue(value);
        this.cardValue.spriteFrame = this.cardAtlas.getSpriteFrame(str);
    }
    getCardColor(color: string) {
        let colorStr = "";
        switch (color) {
            case "d": //"方块"
                colorStr = "3";
                break;
            case 'c'://"梅花",
                colorStr = "2";
                break;
            case 'h'://"红心"
                colorStr = "0";
                break;
            case 's'://"黑桃"
                colorStr = "1";
                break;
        }
        return colorStr;
    }
    getCardValue(value:string){
        let valueStr = "";
        if(value == 'a'){
            valueStr = "0";
        }else if(value == 't'){
            valueStr = "9";
        }else if(value == 'j'){
            valueStr = "10";
        }else if(value == 'q'){
            valueStr = "11";
        }else if(value == 'k'){
            valueStr = "12";
        }else{
            valueStr = (Number(value) - 1).toString();
        }
        return valueStr;
    }
    // getCardColor(color: number) {
    //     let colorStr = "";
    //     switch (color) {
    //         case 1: //"方块"
    //             colorStr = "3";
    //             break;
    //         case 2://"梅花",
    //             colorStr = "2";
    //             break;
    //         case 3://"红心"
    //             colorStr = "0";
    //             break;
    //         case 4://"黑桃"
    //             colorStr = "1";
    //             break;
    //     }
    //     return colorStr;
    // }
    // getCardValue(value:number){
    //     let valueStr = "";
    //     if(value == 14){
    //         valueStr = "0";
    //     }else{
    //         valueStr = (value - 1).toString();
    //     }
    //     return valueStr;
    // }
}
