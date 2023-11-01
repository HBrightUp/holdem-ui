// import { ModuleType } from './ModuleConfig'

/**
 * 窗口配置
 */
export interface SceneConfig {
    /**
     * 场景类型
     */
    sceneType: SceneType
    /**
     * 场景所在bundle
     */
    // moduleType: ModuleType

    /**
     * 场景名
     */
    sceneName: string

    // 预加载预制体列表
    preloadList?: string[]
}

export enum SceneType {
    // 保留值
    NONE = 0,
    // loading场景
    LOADING,
    // 大厅
    LOBBY,
    //德州
    GAMESCENE
}

export const scenes: SceneConfig[] = [
    {
        sceneType: SceneType.LOADING,
        // moduleType: ModuleType.REAL_LOADING,
        sceneName: 'LoadingScene'
    },
    {
        sceneType: SceneType.LOBBY,
        // moduleType: ModuleType.LOBBY,
        sceneName: 'LobbyScene'
    },
    {
        sceneType: SceneType.GAMESCENE,
        // moduleType: ModuleType.GAMESCENE,
        sceneName: 'GameScene'
    },
]
