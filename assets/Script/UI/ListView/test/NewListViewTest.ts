import NewListView from "../NewListView";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({type: NewListView,displayName:"测试列表", visible: true})
    private newListView: NewListView = null

    protected start(): void {
        this.newListView.InitWithNum(105)
    }
}
