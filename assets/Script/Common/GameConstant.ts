// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

enum GameStage {
    Init,
    ShareKey,
    Play,
    Runner,
    Settle,
    Showdown,
}
enum PlayStage {
    Dealing = 0,
    Betting,
    Reacting,
    Revealing,
    Ending,
}
enum ServerEvent {
    INIT_USER_SEAT = "INIT_USER_SEAT",//同步进桌
    OTHER_USER_ENTER = "OTHER_USER_ENTER",//桌子消息
    UPDATE_USER_TYPE = "UPDATE_USER_TYPE",//更新下注状态
    UPDATE_USER_DATA = "UPDATE_USER_DATA",//更新用户数据
    UPDATE_CUSTOM_TYPE = "UPDATE_CUSTOM_TYPE",//更新点击按钮的状态
    GAME_RUNNER = "GAME_RUNNER",//All in
    GAME_SETTLE = "GAME_SETTLE",//结算
    GAME_SHOWDOWN = "GAME_SHOWDOWN",//开牌
    USER_LEAVE_GAME = "USER_LEAVE_GAME",//离开游戏
    ACTION_TIMEOUT = "ACTION_TIMEOUT",//操作超时

}
enum GameEvent {
    INIT_WALLET_CONNECT = "INIT_WALLET_CONNECT",//同步进桌
    CHANGE_CHAINID = "CHANGE_CHAINID",//切换链ID

}
enum ServerError {
    PARAMS_ERR = "参数错误",
}

enum EventKind {
    Custom = 'Custom',
    Ready = 'Ready',//attach
    ShareSecrets = 'ShareSecrets',//连接通信使加密信息
    OperationTimeout = 'OperationTimeout',//操作超时
    Mask = 'Mask',//
    Lock ='Lock',//
    RandomnessReady = 'RandomnessReady',
    Sync = 'Sync',//有用户或节点进来时同步消息
    ServerLeave = 'ServerLeave',
    Leave = 'Leave',
    GameStart = 'GameStart',
    WaitingTimeout = 'WaitingTimeout',
    DrawRandomItems = 'DrawRandomItems',
    DrawTimeout = 'DrawTimeout',
    ActionTimeout = 'ActionTimeout',
    AnswerDecision = 'AnswerDecision',
    SecretsReady = 'SecretsReady',
    Shutdown = 'Shutdown'
}
const TokenAdress = [
    "0x0a2664F0425a43EE03150BAd5751D35678F61d94"
]
enum AdressCtrl {
    tokenAddr = "0x0a2664F0425a43EE03150BAd5751D35678F61d94",
    regAddr = "0x4e73784de8042d6310d163df93fdf79f96398bd5",

}
enum HoldemStage {
    Init,
    ShareKey,
    Play,
    Runner,
    Settle,
    Showdown,
}
enum GameType {
    NONE,
    //德州
    TEXAS,
    //奥马哈
    OMAHA,
    OFC,
    MAHA,
}
enum ChainType {
    //Polygon
    POLYGON = 137,
    //BSC测试
    BSCTEST = 97,
    POLYGON_TEST = 80001,
}
@ccclass
export default class GameConstant {
    public static GameType = GameType;
    public static ChainType = ChainType;
    public static ServerEvent = ServerEvent;
    public static GameEvent = GameEvent;
    public static ServerError = ServerError;
    public static GameStage = GameStage;
    public static PlayStage = PlayStage;
    public static EventKind = EventKind;
    public static TokenAdress = TokenAdress;
    public static AdressCtrl = AdressCtrl;
}
