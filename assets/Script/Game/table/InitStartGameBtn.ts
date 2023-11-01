
import App from "../../Common/App";
import GameConstant from "../../Common/GameConstant";
import { StartGame } from "../../Race/GameEvent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InitStartGameBtn extends cc.Component {
    client:any;
    onLoad () {
        this.client = App.Race.AppClientCurrent;
    }

    start () {
        this.node.on("click",this.onStartGame,this);
    }

    async onStartGame(){
        await this.client.current.submitEvent(new StartGame());
    }
}
