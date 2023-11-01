import resKit from '../Common/ResKit';
import { ethers,utils } from './ethers/ethers-v4.min';

const { ccclass } = cc._decorator;

//返回BigNumber
export function toBN(num: number | string) {
    return LinkEthers.instance.web3.utils.toBN(num)
}

//返回Wei
export function toWei(num: number | string) {
    return LinkEthers.instance.web3.utils.toWei(num)
}

@ccclass
export default class LinkEthers extends cc.Component{
    private static _instance: LinkEthers = null;
    
    private _configs: any
    get configs() {
        return this._configs
    }

    static get instance() {
        return this._instance
    }
    
    private _web3Provider: any
    get web3() {
        return this._web3Provider
    }
    
    private _web3Singer: any
    get web3Singer() {
        return this._web3Singer
    }

    private _address: any
    get address() {
        return this._address
    }

    private _precisionStr = '1000000000000000000';
    private _precisionStr1 = '1000000';
    get precisionStr() {
        return this._precisionStr
    }

    divBN(nb: string | number, decimals:number = 6): string {
        return ethers.utils.parseUnits(nb,decimals).toString();
    }

    mulBN(nb: string | number, decimals:number = 6): string {
        return ethers.utils.formatUnits(nb,decimals);
    }

    balanceOf(balance:string | number, decimals:number = 6){
        return ethers.utils.formatUnits(balance, decimals);
    }
    
    async onLoad() {
        LinkEthers._instance = this
        // //如果不是polygon链是提示切链
        this.connectToEthereum();
        // 正式服使用正式服的合约地址配置
        let contractName: string = 'contract_dev';
        const jsonAsset = await resKit.loadRes(contractName, cc.JsonAsset)
        this._configs = jsonAsset['json'] || {};
    }

    start() {
        this.listenType();
    }
    
    // 连接到以太坊节点
    async connectToEthereum() {
        let provider;
        let signer;
        if (window['ethereum']) {
            // 请求用户授权连接
            // await window['ethereum'].request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window['ethereum']);
            this._web3Provider = provider;
            signer = provider.getSigner();
            this._web3Singer = signer;
            // const rpcProvider = new ethers.providers.JsonRpcProvider(
            //     'https://matic-mumbai.chainstacklabs.com'
            // );
            await provider
                .send('eth_requestAccounts', [])
                .then((result) => {
                    this._address = result[0];
                    // this.getPublicKey(this._address);
                    console.log(result , "-----");
                })

            await this.getAddress();
            console.log('已连接到以太坊节点');
        } else {
            console.error('未检测到以太坊节点');
            return null;
        }
    }
    // 检验当前链
    async checkChain() {
        // 创建一个以太坊提供者
        
        // 获取当前网络 ID
        const network = await this._web3Provider.getNetwork();
        
        // 判断当前链是否为 Polygon
        if (network.chainId === 80001) {
            console.log('当前链为 测试链 Polygon');
            // 在此处执行你希望在 Polygon 上执行的操作
        } else {
            this.switchChain(80001);
            console.log('当前链不是 测试链 Polygon');
            // 在此处执行你希望在其他链上执行的操作，例如提示用户切换到 Polygon
            // 这里只是一个简单的示例，你可以根据实际需求进行相应的操作
        }
    }
    // 切换链
    async switchChain(chainId: number) {
        try {
            await this._web3Provider.send('wallet_switchEthereumChain', [{ chainId: `0x${chainId.toString(16)}` }]);
            console.log('链切换成功');
        } catch (error) {
            // console.error('链切换失败', error);
            this.addCustomChain(80001);
        } finally{
            this.addCustomChain(80001);
        }
    }
    // 添加链
    async addCustomChain(chainId: number) {
        
        if (window['ethereum'] && window['ethereum'].request) {
            try {
                var chainData = {
                    chainId: `0x${chainId.toString(16)}`,
                    chainName: 'Polygon Test',
                    nativeCurrency: {
                        name: 'MATIC',
                        symbol: 'MATIC',
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
                    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
                }
                const tx = window['ethereum'].request({ method: 'wallet_addEthereumChain', params: [chainData] })
                console.log('链添加成功');
            } catch (error) {
                console.error('链添加失败', error);
            }
        } else {
            console.error('未检测到以太坊节点或不支持添加链');
        }
    }
    /**
     * 
     * @param address 合约地址
     * @param abi 合约abi
     * @param method 调用方法
     * @param arg 参数
     * @param callBack 回调
     * @param callbackTarget 
     * @param isNotLoading 是否展示Loaidng
     */
    async getContractInfo(
        address: string, 
        abi: any,
        method: string,
        arg: any[],
        callBack: Function,
        callbackTarget: any,
        isNotLoading?: boolean
        ) {
        try {
            // 调用合约
            const contract = await this.contract(abi, address);
            
            if(!contract[method]){
                console.warn(`call undefined method: ${method}`)
            }
            if(callBack){
                callBack(await contract[method](...arg));
            }
            // const decimals = await contract.decimals();
            // const name = await contract.name();
            // const symbol = await contract.symbol();
            // const balance = await contract.balanceOf(this._address);
            // const balanceAmount = ethers.utils.formatUnits(balance, decimals);
            // console.log(balanceAmount, "收拾收拾");
        } catch (error) {
            console.error('获取合约信息失败', error);
        }
    }
    /**
     * 
     * @param address 合约地址
     * @param abi 合约abi
     * @param method 方法
     * @param args 参数
     * @param callBack 回调
     * @param callbackTarget 
     * @param isNotLoading 是否展示Loaidng
     */
    async sendContractTransaction(
        address: string,
        abi: any,
        method: string,
        args: any[],
        callBack: Function,
        callbackTarget: any,
        isNotLoading?: boolean
    ) {
        // if (!isNotLoading) {
            
        // }
        try {
            const contract = await this.contract(abi, address);
            if (!contract[method]) {
                throw new Error(`Method ${method} not found in contract.`);
            }
            const transaction = await contract[method](...args);
            const receipt = await transaction.wait();
            if (callBack) {
                callBack(receipt);
            }
        } catch (error) {
            console.error('交易发送失败', error);
        }
    }
     /**
     * 获取合约地址
     * @param abi
     * @param address
     */
     async contract(abi: string, address: string) {
        let contract = new ethers.Contract(address, abi, this._web3Singer);
        // await this.changeAddress()
        return contract;
    }
    
  
    async getAddress(){
        if (window['ethereum']['selectedAddress']) {
            console.log(111111);
            this._address = window['ethereum']['selectedAddress']
        } else {
            await window['ethereum'].request({
                method: 'eth_requestAccounts',
            })
            console.log(222222,window['ethereum'].address);
            this._address = window['ethereum'].address
        }
    }
    async getPublicKey(address) {
        try {
            // 1. 创建一个私钥
            // const privateKey = '0x...'; // 输入您的私钥
            // const wallet = new ethers.Wallet(privateKey);
            // const publicKey = wallet.signingKey.publicKey;

            // console.log('公钥:', wallet, publicKey);
            

            console.log(this._web3Provider , "_web3Provider");
            // const publicKey = await this._web3Provider.getPublicKey();
            // console.log('Public Key:', publicKey);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    toChecksumAddress(address) {
        return utils.getAddress(address);
      }
      
    async listenType() {
        let w = window as any;
        //监听切换账户
        // w.ethereum?.on('accountsChanged', (accounts) => {
        //     console.log('切换账户了', accounts);
        // });
        // //监听切换链了（TP不兼容）
        // w.ethereum?.on('chainChanged', (chainId) => {
        //     console.log('切换账户了', chainId);
        // });
        // //监听连接钱包
        // w.ethereum?.on('connect', (error, payload) => {
        //     console.log('监听连接钱包', error, payload);
        // });
        // //监听断开连接钱包
        // w.ethereum?.on('disconnect', (error) => {
        //     console.log('监听断开连接钱包', error);
        // });
        // //断开连接
        // w.ethereum?.on('close', (accounts) => {
        //     console.log('断开连接', accounts);
        // });
        // 监听连接钱包的 Promise 对象
        // this._web3Singer.connect.then(() => {
        //     // 用户点击了同意，签名成功
        //     console.log('Wallet connected');
        // }).catch((error) => {
        //     // 用户点击了拒绝，签名失败
        //     console.log('Wallet connection rejected:', error);
        // })

        // 创建一个与以太坊网络连接的 Provider
        // const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai-bor.publicnode.com');

        // 请求用户连接钱包
        // const signer = await provider.getSigner();
        // console.log(signer , "signer");
        // const connectedWalletPromise = signer.connect();

        // // 监听连接钱包的 Promise 对象
        // connectedWalletPromise.then(() => {
        //     // 用户点击了同意，签名成功
        //     console.log('Wallet connected');
        // }).catch((error) => {
        //     // 用户点击了拒绝，签名失败
        //     console.log('Wallet connection rejected:', error);
        // });
    }
    getWalletType() {
        const ethereum = window['ethereum']
        if (!ethereum) {
            return 'no'
        } else if (ethereum.isImToken) {
            return 'imtoken'
        } else if (ethereum.isTokenPocket) {
            return 'tokenpocket'
        } else if (
            ethereum.rpcUrl &&
            ethereum.rpcUrl.indexOf('bitkeep') !== -1
        ) {
            return 'bitkeep'
        } else if (ethereum.isMetaMask && ethereum._metamask) {
            return 'metamask'
        } else {
            return 'unknown'
        }
    }
    onDestroy() {
        LinkEthers._instance = null
    }
  
}
