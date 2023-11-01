import Toast from "../Common/Toast";

const {ccclass, property} = cc._decorator;

@ccclass('UIManager')
export class UIManager{
    public static toastDialog(content: string) {
        const toastNode = cc.find('ToastNode')!;
        toastNode.getComponent(Toast)!.setText(content);
    }
    public static toastView(data: any, func: Function) {
        const toastNode = cc.find('ToastNode');
        toastNode.getComponent(Toast).toastView(data, func);
    }
}
