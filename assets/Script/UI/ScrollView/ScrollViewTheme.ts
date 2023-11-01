const { ccclass, property } = cc._decorator

export enum ScrollViewThemeType {
    A,
}

@ccclass('ScrollViewThemeConfig')
export class ScrollViewThemeConfig {
    @property({ type: cc.Enum(ScrollViewThemeType) })
    type: ScrollViewThemeType = ScrollViewThemeType.A

    @property({ type: cc.SpriteFrame })
    upNormal: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    upHover: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    downNormal: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    downHover: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    bottomNormal: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    bottomHover: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    sliderBG: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    sliderNormal: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    sliderHover: cc.SpriteFrame = null

    @property({ type: cc.SpriteFrame })
    sliderKnob: cc.SpriteFrame = null
}
