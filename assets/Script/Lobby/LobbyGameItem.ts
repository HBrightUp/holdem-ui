// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import App from "../Common/App";
import PoolManager from "../PoolManager/PoolManager";
import NewListViewItem from "../UI/ListView/NewListViewItem";
import { UIManager } from "../UI/UIManager";
import LinkKit from "../Web3/LinkKit";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyGameItem extends NewListViewItem {

    @property(cc.Label)
    lab_name: cc.Label = null;

    @property(cc.Label)
    lab_min: cc.Label = null;

    @property(cc.Prefab)
    loading: cc.Prefab = null;

    @property(cc.Node)
    user_head_node: cc.Node = null;
    
    @property(cc.SpriteFrame)
    user_head_spr: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    user_head_null: cc.SpriteFrame = null;

    UserPoint:any[] = [];
    UserHeadImg:cc.Node[] = [];
    itemData:any;
    private isClick:boolean = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
       
    }
    onListViewItemInit() {
        // const data = this.itemData
        // this.addressLabel.string = KGameUtils.subConString(data.config.gameToken);
        // this.peopleNumber.string = data.players.length +"/"+data.config.maxPlayerNum;
        // this.threshold.string = data.config.threshold;//LinkKit.instance.divBN(data.config.threshold)+"";
    }
    protected OnInitItem(param?: any): void {

        let data = param[this._index - 1];
        this.itemData = data;
        this.initHead(data);
    }
    initHead(itemData:any){
        let point = this.initUserPoints(Number(itemData.maxPlayers));
        this.lab_name.string = itemData.title;
        this.lab_min.string = LinkKit.instance.mulBN((itemData.minDeposit).toString()) + "/" + LinkKit.instance.mulBN((itemData.maxDeposit).toString());
        this.user_head_node.removeAllChildren();
        this.UserHeadImg = [];
        
        for(var i=0;i<point.length;i++){
            let headImg = this.createNode();
            var pos = cc.v3(point[i][0], point[i][1], 0);
            headImg.position = pos;
            this.user_head_node.addChild(headImg);
            this.UserHeadImg.push(headImg);
        }
        let player = itemData.players;
        for(var i=0;i<player.length;i++){
            let head = this.UserHeadImg[player[i].position].getComponent(cc.Sprite);
            head.spriteFrame = this.user_head_spr;
        }
    }
    createNode(){
        let node = new cc.Node("user_head");
        let spr = node.addComponent(cc.Sprite);
        spr.spriteFrame = this.user_head_null;
        spr.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        node.width = 66;
        node.height = 66;
        return node;
    }
    initUserPoints(desktype) {
        const self = this;

        let Scene = cc.director.getScene();
        let canvas = Scene.getChildByName('Canvas');
        let canvasH = canvas.height;
        let canvasW = 450; 
        let gui_height = 150; 
        let gui_width = 410;

        let user_width = 124; 
       
        self.UserPoint = [];
        let posxs = [];
        let posys = [];

        let off_top = 154 + 20;
        let top_y = 160+6; //上边框的间隔
        let bottom_y = gui_height - off_top;  //顶部玩家的y坐标
        let tableHeight = top_y - bottom_y; //整个桌子的高

        let half_y = bottom_y + tableHeight/2; //竖直中间玩家的y坐标  接近1/2非标准中间 615
        let bottom_jiao_y = bottom_y + 10;

        let anchorOffx = 0;
        let half_x = gui_width / 2 - anchorOffx; //自己的位置 水平中间玩家的x坐标  62是锚点的位置不是0.5
        let right_half_x = 400;  //左边 上下中间位置的玩家 x坐标
        let left_up_jiao_x = 514; //水平1/3的x坐标
        let left_bottom_jiao_x = 350; //左下角
        let left_one_four_x = 0; // 3/4桌高的x坐标
        let left_three_four_x = 80; // 3/4桌高的x坐标
        let left_bottom_one_four_x = 90; //下边有三个人的左边 x坐标
        let left_top_one_four_x = 110;   //上边有三个人的左边 x坐标   

        let left_half_x = gui_width - right_half_x;  //右边 上下中间位置的玩家 x坐标
        let right_up_jiao_x =  gui_width - user_width - left_up_jiao_x; //水平1/3的x坐标
        let right_bottom_jiao_x = gui_width - left_bottom_jiao_x; //右下角
        let right_one_four_x = gui_width - user_width - left_one_four_x;//3/4桌高的x坐标
        let right_three_four_x = gui_width - left_three_four_x;//3/4桌高的x坐标
        let right_bottom_one_four_x = gui_width  - left_bottom_one_four_x;
        let right_top_one_four_x = gui_width - left_top_one_four_x;

        if (desktype == 2) {
            self.UserPoint = [[half_x, bottom_y], [half_x, top_y]];
        }
        else if (desktype == 3) {
            self.UserPoint = [[half_x, bottom_y], [left_three_four_x, top_y], [right_three_four_x, top_y]];//
        }
        else if (desktype == 4) {
            self.UserPoint = [[half_x, bottom_y], [left_half_x, half_y], [half_x, top_y],[right_half_x, half_y]];
        }
        else if (desktype == 5) {
            self.UserPoint = [[half_x, bottom_y], [right_bottom_jiao_x, bottom_jiao_y], [left_three_four_x, top_y],  [right_three_four_x, top_y], [left_bottom_jiao_x, bottom_jiao_y]];
        }
        else if (desktype == 6) {
            posxs = [half_x, right_bottom_jiao_x, left_three_four_x, half_x, right_three_four_x, left_bottom_jiao_x];
            posys = [bottom_y, bottom_jiao_y, top_y, top_y, top_y, bottom_jiao_y];
        }
        else if (desktype == 7) {
            posxs = [half_x, right_bottom_jiao_x, left_half_x, left_top_one_four_x, right_top_one_four_x, right_half_x, left_bottom_jiao_x];//
            posys = [bottom_y, bottom_jiao_y, half_y, top_y, top_y, half_y, bottom_jiao_y];//
        }
        else if (desktype == 8) {
            posxs = [half_x, right_bottom_jiao_x, left_half_x, left_three_four_x, half_x , right_three_four_x, right_half_x, left_bottom_jiao_x];//
            posys = [bottom_y, bottom_jiao_y, half_y, top_y, top_y, top_y, half_y, bottom_jiao_y];
        }
        else if (desktype == 9) {
            posxs = [half_x, 90, 20, 30,120,310,400,400,315];//, left_top_one_four_x, right_top_one_four_x, right_three_four_x, right_one_four_x, right_bottom_one_four_x
            posys = [bottom_y, 0, 40, 120,165,160,120,45,2];//, top_y, top_y, three_of_four_y, one_of_four_y, bottom_y
        }

        if (posxs.length) {
            for (let i = 0; i < desktype; i++) {
                self.UserPoint.push([posxs[i], posys[i]]);
            }
        }
        return self.UserPoint;
    }
    async onClickItem(){
        
        if(App.CommonDataCtrl.isWaitJoin){
            UIManager.toastDialog("请耐心等待，合约结算中");
            if(!this.isClick){
                this.scheduleOnce(()=>{
                    this.isClick = false;
                    App.CommonDataCtrl.isWaitJoin = false;
                },15)
            }
            this.isClick = true;
            return;
        }
        PoolManager.getNode(this.loading,PoolManager.GetCurrentCanvas());
        let addr: string = this.itemData.addr;;
        const wallet = App.Race.EvmWallet;
        App.CommonDataCtrl.currentTableAddress = addr;
        // App.SceneMgr.switchScene("GameScene");
        await App.StageGame.initClient(wallet, addr);
        
    }
}
