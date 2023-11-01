// let SignClient,Web3Modal;
// SignClient = window["SignClient"];
// Web3Modal = window["Web3Modal"];
// // if(!cc.sys.isNative){
// //     SignClient = window["SignClient"];
// //     Web3Modal = window["Web3Modal"];
// //     // WalletConnectModal = window["WalletConnectModal"];
// //     // generateNonce = window["generateNonce"];
// //   }

import App from "../Common/App";
import { DEFAULT_MAIN_CHAINS, DEFAULT_TEST_CHAINS } from "../Common/constants/default";
import GameConstant from "../Common/GameConstant";
import { getOptionalNamespaces, getRequiredNamespaces } from "../Common/help/namespaces";
import { UIManager } from "../UI/UIManager";

const {ccclass, property} = cc._decorator;

let OPENT_TYPE = {
    NONE: 0,
    LOGIN: 1,
    BIND: 2,
};

@ccclass
export default class WalletConnectCtrl extends cc.Component {
    private static _instance: WalletConnectCtrl = null;

    static get instance() {
        return this._instance
    }
    static get signClient(){
        return this.signClient;
    }
    static get topic(){
        return this.topic;
    }
    static get session(){
        return this.session;
    }
    uri = null;
    signClient = null;
    walletAddress = null;
    walletType = null;
    WalletAddressSign = null;
    WalletSignMessage = null;
    modal = null;
    session = null;
    topic = null;
    openModalType = OPENT_TYPE.NONE;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        WalletConnectCtrl._instance = this;
        this.init();
    }

    start () {
        
    }

    init(){
        if(!cc.sys.isMobile){
            return;
        }
        if(this.uri || this.signClient){
            return;
        }
        window.crypto.randomUUID = ()=>{
            return "111111"
        }
        this.initSignClient();
        this.initModal();
    }

    async initSignClient(){
        try {
            
            this.signClient = await window["SignClient"].init({
                projectId: 'a3dc8ad13f78f67b3b915cc23769b1fa',
                metadata: {
                  name: 'my-sign-dapp',
                  description: 'A dapp using WalletConnect SignClient',
                  url: 'web-test.whalepoker.com',//window.location.host,
                  icons: ['https://my-auth-dapp.com/icons/logo.png']
                }
            });
            const lastKeyIndex = this.signClient.session.getAll().length - 1;
            const lastSession = this.signClient.session.getAll()[lastKeyIndex];
            console.log(lastSession, "lastSession===");
            if(lastSession){
                this.topic = lastSession.topic;
                this.session = lastSession;
            }
            App.CustomEventListener.dispatchEvent(GameConstant.GameEvent.INIT_WALLET_CONNECT);

            this.signClient.on('session_event', ({ event }) => {
                // Handle session events, such as "chainChanged", "accountsChanged", etc.
                console.log(event, "session_event=========");
            })

            this.signClient.on('session_proposal', ({ event }) => {
                // Handle session events, such as "chainChanged", "accountsChanged", etc.
                console.log(event, "session_proposal=========");
            })

            this.signClient.on('session_request', ({ event }) => {
                // Handle session events, such as "chainChanged", "accountsChanged", etc.
                console.log(event, "session_request=========");
            })

            this.signClient.on('session_ping', ({ event }) => {
                // Handle session events, such as "chainChanged", "accountsChanged", etc.
                console.log(event, "session_ping=========");
            })
              
            this.signClient.on('session_update', ({ topic, params }) => {
                const { namespaces } = params
                const _session = this.signClient.session.get(topic)
                // Overwrite the `namespaces` of the existing session with the incoming one.
                const updatedSession = { _session, namespaces };
                console.log(updatedSession, "session_update===========");
                // Integrate the updated session state into your dapp state.
                // onSessionUpdate(updatedSession)
            })
            //断开连接事件
            this.signClient.on('session_delete', ({ event }) => {
                // Session was deleted -> reset the dapp state, clean up from user session, etc.
                console.log(event, "session_delete============")
            })
        } catch (error) {
            
        }
    }

    initModal(){
        this.modal = new window["Web3Modal"]({
            projectId: 'a3dc8ad13f78f67b3b915cc23769b1fa',
            chains: [
                'eip155:80001',
                'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ',
                'cosmos:cosmoshub-4',
                'polkadot:91b171bb158e2d3848fa23a9f1c25182'
            ],
            explorerRecommendedWalletIds: [
                'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
                '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
                '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
                '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927'
            ],
            themeMode: "light",
            walletConnectVersion: 2,
          });
    }

    getWalletAddress(){
        if(this.session){
            const allNamespaceAccounts = Object.values(this.session.namespaces)
            .map((namespace:any) => namespace.accounts)
            .flat();
            
            allNamespaceAccounts.map((account) => {
                const [namespace, reference, address] = account.split(":");
                this.walletAddress = address;
            })
        }
        return this.walletAddress || '#testttttttttttttttt4';
    }

    async handleOpenModal(type = 0) {
        if(this.signClient == null){
            UIManager.toastDialog("加载中请稍后");
            return;
        }

        const chains = DEFAULT_TEST_CHAINS;
        const requiredNamespaces = getRequiredNamespaces(chains);
        const optionalNamespaces = getOptionalNamespaces(chains);
        console.log(requiredNamespaces, optionalNamespaces, "chain===");
        const { uri, approval } = await this.signClient.connect({
            undefined,
            requiredNamespaces,
            optionalNamespaces
        });
        
        if (uri) {
            // Create a flat array of all requested chains across namespaces.
            const standaloneChains = Object.values(requiredNamespaces)
              .map((namespace) => namespace.chains)
              .flat() as string[];
            this.modal.openModal({ uri, standaloneChains});
          }
  
          const session = await approval();
          this.session = session;
          console.log(session, "session======");
          if(session){
            this.topic = session.topic;
            this.modal.closeModal();
            App.CustomEventListener.dispatchEvent(GameConstant.GameEvent.INIT_WALLET_CONNECT);
          }
        //   this.signClient.pairing.getAll({ active: true })
    }

    async openModal(uri){
        await this.modal.openModal({
            uri: uri,
        });
    }
    async disConnect(){
        if (typeof this.signClient === "undefined" || this.session == null) {
            throw new Error("WalletConnect is not initialized");
        }
        try {
            console.log(this.signClient, this.session, "点击退出");
            await this.signClient.disconnect({
              topic: this.session.topic,
              reason: "User disconnected",
            });
            this.session = null;
            console.log(this.session, "退出成功");
        } catch (error) {
            
            return;
        }
    }
    onDestroy() {
        WalletConnectCtrl._instance = null
    }
}
