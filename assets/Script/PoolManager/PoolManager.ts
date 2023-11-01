// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PoolManager{

    public static get poolMap() { return this._poolMap }
    private static _poolMap: Map<string, cc.NodePool> = new Map<string, cc.NodePool>();

    public static get prefabMap() { return this._prefabMap }
    private static _prefabMap: Map<string, cc.Prefab> = new Map<string, cc.Prefab>();

    public static async get(path: string): Promise<cc.Node> {
        const pool = this._poolMap.get(path);
        if (pool && pool.size() > 0) {
            return pool.get();
        } else if (this._prefabMap.has(path)) {
            return cc.instantiate(this._prefabMap.get(path));
        }
        const node = await this.getFromRes(path);
        return (node ? node : null);
    }

    public static put(path: string, node: cc.Node): void {
        let pool = this._poolMap.get(path);
        if (!pool) {
            pool = new cc.NodePool();
            this._poolMap.set(path, pool);
        }
        pool.put(node);
    }

    public static getFromRes(path: string): Promise<cc.Node> {
        return new Promise(res => {
            cc.resources.load(path, (error: Error, prefab: cc.Prefab) => {
                if (!error) {
                    prefab.addRef();
                    this._prefabMap.set(path, prefab);
                    res(cc.instantiate(prefab));
                } else {
                    res(null);
                }
            });
        });
    }

    public static handle = new Map<string, cc.Node[]>();

    public static getNode(prefab: cc.Prefab, parent: cc.Node) {
        const name = prefab.data.name;
        let node: cc.Node = null;
        const pool = this.handle.get(name);
        if (this.handle.has(name) && pool.length > 0) {
            node = this.handle.get(name).pop();
        } else {
            node = cc.instantiate(prefab) as cc.Node;
        }
        node.setParent(parent);
        return node;
    }

    public static setNode(target: cc.Node) {
        const name = target.name;
        if(target.parent){
            target.parent.removeChild(target);
        }
        target.parent = null;
        if (this.handle.has(name)) {
            this.handle.get(name).push(target);
        } else {
            if (name.length > 0) {
                this.handle.set(name, [target]);
            } else {
                target.destroy();
            }
        }
    }
    public static setLoading(){
        let scene = PoolManager.GetCurrentCanvas();
        let loading = scene.getChildByName("loading");
        if(loading){
            PoolManager.setNode(loading);
        }
    }
    public static async getLoading(){
        const uiLoading = await cc.resources.loadAsync<cc.Prefab>(
            'loading',
            cc.Prefab
        )
        PoolManager.getNode(uiLoading, PoolManager.GetCurrentCanvas());
    }
    public static GetCurrentCanvas() {
        let Scene = cc.director.getScene();
        if (!Scene) return;
    
        let canvas = Scene.getChildByName('Canvas');
        if (!canvas) return;
    
        let persistRootNode = Scene.getChildByName('tableNode');
        //  && isPersist
        if (persistRootNode) return persistRootNode;
    
        return canvas;
    }
}
