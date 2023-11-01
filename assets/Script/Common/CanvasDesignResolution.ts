// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CanvasDesignResolution extends cc.Component {
    @property
    wGameWidth: number = 1920;

    @property
    wGameHeight: number = 1080;

    @property
    isGameScene: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        const G_IsPCGame = function () {
            if (cc.sys.os == "Windows" || cc.sys.os == "OS X") { // PC浏览器
                return true;
            }
            return false;
        };
        if (cc.sys.isBrowser) {
            let sceneName = cc.director.getScene().name;
            if (G_IsPCGame()) {
                //PC浏览器
                // logd("getFrameSize0  =====sceneName: " + sceneName);
                if (sceneName == "GameSceneHoldem" || (this.isGameScene && sceneName == "New Node")) {
                    this.wGameWidth = 1920//968*4;
                    cc.view.setDesignResolutionSize(this.wGameWidth, this.wGameHeight, cc.ResolutionPolicy.SHOW_ALL);
                    this.node.width = this.wGameWidth;
                    this.node.getComponent(cc.Widget).updateAlignment();
                }else {
                    cc.view.setDesignResolutionSize(this.wGameWidth, this.wGameHeight, cc.ResolutionPolicy.SHOW_ALL);
                }

            }else {
                //手机浏览器
                if (sceneName == "GameSceneHoldem")
                {
                    let size = cc.view.getFrameSize();
                    let framescale = size.height / size.width;
                    // logd("getFrameSize1  =====width: " + size.width + " height: " + size.height + " framescale: " + framescale);
                    if (framescale < 1.770)
                    {
                        // logd("getFrameSize ===== FIXED_HEIGHT");
                        cc.view.setDesignResolutionSize(this.wGameWidth, this.wGameHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
                    }else{
                        // logd("getFrameSize ===== FIXED_WIDTH");
                        cc.view.setDesignResolutionSize(this.wGameWidth, this.wGameHeight, cc.ResolutionPolicy.FIXED_WIDTH);
                    }
                }
            }
        }
    }

}
