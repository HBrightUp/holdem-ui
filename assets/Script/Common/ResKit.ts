/**
 * 统一管理 Cocos Creator 的资源加载&释放等接口
 * TODO 引用计数
 */

//  import { bundleUrl } from '../Configs/Configure'
//  import { calculateRealPath } from './AssetWrapper/RealPath'
 
 class ResKit {
     /**
      * 该函数用于加载 resources 目录下的内容
      * @param paths
      * @param type
      */
     public loadRes<T extends cc.Asset>(
         paths: string,
         type: typeof cc.Asset
     ): Promise<T | null> {
         return new Promise((resolve, reject) => {
             cc.resources.load(paths, type, (error: Error, assets: T) => {
                 if (error) {
                     // reject(error)
                     console.warn('资源找不到:', paths)
                     resolve(null)
                     return
                 }
                 resolve(assets)
             })
         })
     }
 
     public loadDir<T extends cc.Asset>(
         dir: string,
         type?: typeof cc.Asset,
         onComplete?: (assets: Array<T>) => void
     ) {
         cc.resources.loadDir(dir, type, (error: Error, assets: Array<T>) => {
             if (error) {
                 console.error(`加载资源目录失败! ${dir}`)
                 return
             }
 
             onComplete && onComplete(assets)
         })
     }
 
     /**
      * 加载本地Bundle内容
      * @param url
      */
     public loadRemote<T extends cc.Asset>(url: string): Promise<T | null> {
         return new Promise((resolve, reject) => {
             cc.assetManager.loadRemote(url, (error: Error, asset: T) => {
                 if (error) {
                     reject(null)
                     return
                 }
 
                 resolve(asset)
             })
         })
     }
 
     /**
      * 加载远程图片
      * @param url           //地址
      * @param onComplete    //回调
      * @param isNetwork     //是否网络地址
      * @param isPremultiplyAlpha     //是否勾选预乘（去除图片白边）
      */
     public async loadRemoteSpriteFrame(
         url: string,
         onComplete?: (assets: cc.SpriteFrame) => void,
         isNetwork: boolean = false,
         isPremultiplyAlpha: boolean = false
     ) {
         let path: string = url
         if (!isNetwork) {
             if (!url.endsWith('.png')) {
                 url += '.png'
             }
            //  path = calculateRealPath(url)
         }
         console.log(path , "加载地址");
         // path = "niuniuGame/bundle/icon/role/1.png";
         cc.assetManager.loadRemote<cc.Texture2D>(path, (err, assets) => {
             if (err) {
                 console.error(err)
                 return
             }
             if (isPremultiplyAlpha) {
                 assets.setPremultiplyAlpha(true)
             }
             console.log(new cc.SpriteFrame(assets) , assets , "加载的是啥");
             onComplete && onComplete(new cc.SpriteFrame(assets))
         })
     }
 
     loadBundle<T extends cc.Asset>(
         path: string,
         type?: typeof cc.Asset,
         onComplete?: (assets: T | Array<T>) => void
     ) {
         const arr = path.split('/')
         const bundleName = arr.shift()
         const prefabName = arr.join('/')
         //TODO: 微信小游戏需要修改bundleName路径
         cc.assetManager.loadBundle(
            //  bundleUrl(bundleName),
             null,
             (err, bundle) => {
                 if (err) {
                     console.error(`加载资源文件失败: ${path}`, err)
                     return
                 }
                 bundle.load(prefabName, type, (err2: Error, assets: T) => {
                     if (err2) {
                         console.error(`加载资源文件失败2: ${path}`, err2)
                         return
                     }
                     onComplete && onComplete(assets)
                 })
             }
         )
     }
 }
 
 const resKit = new ResKit()
 export default resKit as ResKit
 