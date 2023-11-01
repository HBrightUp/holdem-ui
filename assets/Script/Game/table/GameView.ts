const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView { 
    myself_bottom_y:number;
    UserPoint:any[] = [];
    UserHashIndexs:any[] = [];

    initUserPoints(desktype) {
        const self = this;
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        const screenWidth1 = screen.width;
        const screenHeight1 = screen.height;

        // console.log(`屏幕宽度: ${screenWidth}`);
        // console.log(`屏幕高度: ${screenHeight}`);

        // console.log(`屏幕宽度下: ${screenWidth1}`);
        // console.log(`屏幕高度下: ${screenHeight1}`);

        let Scene = cc.director.getScene();
        let canvas = Scene.getChildByName('Canvas');
        let canvasH = canvas.height;

        let canvasW = 1920; 
        let gui_height = canvasH; 
        let gui_width = canvasW;

        if (gui_height < 1080)
        {
            gui_height = 1080;
        }

        if(gui_height > 1080){
            gui_height = 1080;
        }
        let user_width = 124; 

        self.UserPoint = [];
        self.UserHashIndexs = [];
        let posxs = [];
        let posys = [];
        let off_top = 164 + this.getIsPhone();//上面按钮y位置
        let bottom_y = 383 - this.getIsPhone(); //上边框的间隔 下面按钮y位置
        let top_y = gui_height - off_top;  //顶部玩家的y坐标
        let tableHeight = top_y - bottom_y; //整个桌子的高
        self.myself_bottom_y = bottom_y; // 自己的y坐标

        let half_y = self.myself_bottom_y + tableHeight/2; //竖直中间玩家的y坐标  接近1/2非标准中间 615
        let bottom_jiao_y = bottom_y + 20;
        let one_of_four_y = self.myself_bottom_y + tableHeight/4+20;//竖直1/4桌高的y坐标  接近1/4非标准
        let three_of_four_y = self.myself_bottom_y + 3 * tableHeight / 4; //竖直2/4桌高的y坐标   接近2/4非标准

        let anchorOffx = 62/2;
        let half_x = gui_width / 2 - anchorOffx; //自己的位置 水平中间玩家的x坐标  62是锚点的位置不是0.5
        let left_half_x = 300;  //左边 上下中间位置的玩家 x坐标
        let left_up_jiao_x = 514; //水平1/3的x坐标
        let left_bottom_jiao_x = 350; //左下角
        let left_one_four_x = 320; // 3/4桌高的x坐标
        let left_three_four_x = 340; // 3/4桌高的x坐标
        let left_bottom_one_four_x = 520; //下边有三个人的左边 x坐标
        let left_top_one_four_x = 660;   //上边有三个人的左边 x坐标   

        let right_half_x = gui_width - user_width - left_half_x;  //右边 上下中间位置的玩家 x坐标
        let right_up_jiao_x =  gui_width - user_width - left_up_jiao_x; //水平1/3的x坐标
        let right_bottom_jiao_x = gui_width - user_width - left_bottom_jiao_x; //右下角
        let right_one_four_x = gui_width - user_width - left_one_four_x;//3/4桌高的x坐标
        let right_three_four_x = gui_width - user_width - left_three_four_x;//3/4桌高的x坐标
        let right_bottom_one_four_x = gui_width - user_width - left_bottom_one_four_x;
        let right_top_one_four_x = gui_width - user_width - left_top_one_four_x;

        if (desktype == 2) {
            self.UserPoint = [[half_x, bottom_y], [half_x, top_y]];
            self.UserHashIndexs = [0, 4];
        }
        else if (desktype == 3) {
            self.UserPoint = [[half_x, bottom_y], [left_three_four_x, three_of_four_y], [right_three_four_x, three_of_four_y]];
            self.UserHashIndexs = [0, 2, 7];
        }
        else if (desktype == 4) {
            self.UserPoint = [[half_x, bottom_y], [left_half_x, half_y], [half_x, top_y], [right_half_x, half_y]];
            self.UserHashIndexs = [0, 2, 4, 7];
        }
        else if (desktype == 5) {
            self.UserPoint = [[half_x, bottom_y], [left_bottom_jiao_x, bottom_jiao_y], [left_up_jiao_x, top_y], [right_up_jiao_x, top_y], [right_bottom_jiao_x, bottom_jiao_y]];
            self.UserHashIndexs = [0, 1, 4, 5, 8];
        }
        else if (desktype == 6) {
            posxs = [half_x, left_bottom_jiao_x, left_three_four_x, half_x, right_three_four_x, right_bottom_jiao_x];
            posys = [bottom_y, bottom_jiao_y, three_of_four_y, top_y, three_of_four_y, bottom_jiao_y];
            self.UserHashIndexs = [0, 1, 3, 4, 6, 8];
        }
        else if (desktype == 7) {
            posxs = [half_x, left_bottom_one_four_x, left_half_x, left_top_one_four_x, right_top_one_four_x, right_half_x, right_bottom_one_four_x];
            posys = [bottom_y, bottom_y, half_y, top_y, top_y, half_y, bottom_y];
            self.UserHashIndexs = [0, 1, 3, 4, 5, 6, 8];
        }
        else if (desktype == 8) {
            posxs = [half_x, left_bottom_one_four_x, left_half_x, left_up_jiao_x, half_x, right_up_jiao_x, right_half_x, right_bottom_one_four_x];
            posys = [bottom_y, bottom_y, half_y, top_y, top_y, top_y, half_y, bottom_y];
            self.UserHashIndexs = [0, 1, 2, 4, 5, 6, 7, 8];
        }
        else if (desktype == 9) {
            posxs = [half_x, left_bottom_one_four_x, left_one_four_x, left_three_four_x, left_top_one_four_x, right_top_one_four_x, right_three_four_x, right_one_four_x, right_bottom_one_four_x];
            posys = [bottom_y, bottom_y, one_of_four_y, three_of_four_y, top_y, top_y, three_of_four_y, one_of_four_y, bottom_y];
            self.UserHashIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        }

        if (posxs.length) {
            for (let i = 0; i < desktype; i++) {
                self.UserPoint.push([posxs[i], posys[i]]);
            }
        }
        console.log(self.UserPoint, "找位置");
        return self.UserPoint;
    }
    getIsPhone(){
        let phoneHeight = 0;
        if(cc.sys.isMobile){
            phoneHeight = 100;
        }
        return phoneHeight;
    }
    getPhoneisCurved(){
        let curvedHeight = 100;
        // 检测是否支持屏幕的设备信息
        if ('screen' in window && 'orientation' in window.screen) {
            // 获取设备方向信息
            var isCurved = window.screen.orientation.angle !== 0;

            if (isCurved) {
                curvedHeight = 100;
                console.log('这是曲面屏幕手机');
            } else {
                console.log('这不是曲面屏幕手机');
            }
        } else {
            console.log('无法确定屏幕是否曲面');
        }
        return curvedHeight;
    }
    // 刘海屏幕高度
    getNotchHeightForGame = function () {
        let notchHeight = 0;
        // 先读取本地数据，防止安卓弹出其他activity时数据错误
        let cacheHeight = cc.sys.localStorage.getItem("GET_NOTCH_HEIGHT_GAME");
        // console.log('>>> SDK getNotchHeightForGame:', cacheHeight);
        if(cacheHeight){
            return parseInt(cacheHeight);
        }

        // 安卓
        if (this.isNotchScreen()) //不是刘海屏 高度是0
        {
            if (cc.sys.platform == cc.sys.ANDROID) {
                notchHeight = jsb.reflection.callStaticMethod("JNI/JniHelper", "getNotchHeight", "()I");
            }
            // iOS
            else if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD) {
                notchHeight = jsb.reflection.callStaticMethod("NativeOcClass", "getNotchHeight", "methodSignature")+15;
            }
        }
        // 存入本地数据
        cc.sys.localStorage.setItem("GET_NOTCH_HEIGHT_GAME", notchHeight);

        return notchHeight;

    }

    isNotchScreen = function () {
        let isLiuHai = null;

        // 先读取本地数据是否是刘海屏，防止安卓弹出其他activity时判断错误
        let isNotch = cc.sys.localStorage.getItem("IS_NOTCH_SCREEN");
        // console.log('>>> SDK isNotchScreen:', isNotch);
        if(isNotch){
            if(isNotch == "true"){
                return true;
            }else if(isNotch == "false"){
                return false;
            }
        }
        // 安卓
        if (cc.sys.platform == cc.sys.ANDROID) {
            isLiuHai = jsb.reflection.callStaticMethod("JNI/JniHelper", "isNotchScreen", "()Z");
        }
        // iOS
        else if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD) {
            isLiuHai = jsb.reflection.callStaticMethod("NativeOcClass", "isNotchScreen", "methodSignature");
        }

        // 存入本地数据
        cc.sys.localStorage.setItem("IS_NOTCH_SCREEN", isLiuHai);

        if (isLiuHai == null) {
            return false
        } else {
            // ManagerHelp_SetSystemAlert("isLiuHai = " + isLiuHai);
            return isLiuHai;
        }
    }
}
