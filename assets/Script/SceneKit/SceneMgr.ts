
import App from '../Common/App';
import SingtonClass from '../Common/SingtonClass';
import { SceneConfig, SceneType } from './SceneConfig'

const { ccclass, property } = cc._decorator

/**
 * 用于管理 Scene
 * 场景直接的切换采用 渐隐 渐现 的方式
 * 通过 evtSceneReady 时间通知 Scene
 * 场景 { MapScene, GameScene } Bundle 不释放
 * Scene的Bundle 应和SceneName 同名
 */

export default class SceneMgr extends SingtonClass{
    private static instance: SceneMgr = null;
  
    // private constructor() {
    //   // 私有构造函数，防止外部实例化
    // }
  
    public static getInstance(): SceneMgr {
      if (!this.instance) {
        this.instance = new SceneMgr();
      }
      return this.instance;
    }
  
    /**
     * 获取当前场景
     */
    public getCurrentScene(): cc.Scene {
      return cc.director.getScene();
    }
  
    /**
     * 预加载场景
     * @param sceneName 场景名称
     * @param onProgress 进度回调函数
     * @param onLoaded 加载完成回调函数
     */
    public preloadScene(sceneName: string, onProgress?: (completedCount: number, totalCount: number, item: cc.Asset) => void, onLoaded?: () => void): void {
        cc.director.preloadScene(sceneName, onProgress, onLoaded);
    }
  
    /**
     * 跳转场景
     * @param sceneName 场景名称
     * @param onLaunched 场景加载完成后回调函数
     * @param transitionType 过渡效果类型，默认为 NONE
     * @param duration 过渡效果持续时间，默认为 0.3 秒
     */
    public switchScene(sceneName: string, onLaunched?: Function,  duration: number = 0.3): void {
        //transitionType: director.TransitionType = director.TransitionType.NONE,
        // transition: transitionType,
        // cc.director.loadScene(sceneName, {
        //     onLaunched: onLaunched(),
            
        //     duration: duration,
        // });
        App.CommonDataCtrl.sceneName = sceneName;

        cc.director.loadScene(sceneName);
    }
  
    /**
     * 执行场景回调函数
     * @param callback 回调函数
     */
    public runSceneCallback(callback: () => void): void {
      callback();
    }
}``
