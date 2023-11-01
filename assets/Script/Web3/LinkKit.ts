// import configure from '../Configs/Configure'
// import resKit from '../Framework/ResKit'

import App from "../Common/App";
import GameConstant from "../Common/GameConstant";
import resKit from "../Common/ResKit"

const { ccclass } = cc._decorator

// declare var Web3;
let Web3;
if(!cc.sys.isNative){
    Web3 = window["Web3"]
}

export interface WebPutResult {
    rc: number
    data?: any
}

//返回BigNumber
export function toBN(num: number | string) {
    return LinkKit.instance.web3.utils.toBN(num)
}

//返回Wei
// export function toWei(num: number | string) {
//     return LinkKit.instance.web3.utils.toWei(num)
// }

/*
18位精度数字运算（加n可以用number运算）（最后加上.toString()转成字符串使用）
加	    +	    toBN(‘1’).add(toBN(‘1’))     toBN(‘1’).addn(1)
减	    -	    toBN(‘1’).sub(toBN(‘1’))     toBN(‘1’).subn(1)
乘	    *	    toBN(‘1’).mul(toBN(‘1’))     toBN(‘1’).muln(1)
除	    /	    toBN(1).div(toBN(‘1’))       toBN(‘1’).divn(1)
等于     =      toBN(1).eq(toBN(1))           toBN(‘1’).eqn(1)
小于     <       toBN(1).lt(toBN(1))          toBN(‘1’).ltn(1)
小于等于  <=      toBN(1).lte(toBN(1))        toBN(‘1’).lten(1)
大于     >       toBN(1).gt(toBN(1))          toBN(‘1’).gtn(1)
大于等于  >=      toBN(1).gte(toBN(1))        toBN(‘1’).gten(1)

例如：
let newAllTotal: string = toBN(oldAllTotal).add(toBN(attInfoAll.count)).toString()
let bvtCount: string = toBN(info.bvx).muln(this._count).divn(info.total).toString()
*/


@ccclass
export default class LinkKit extends cc.Component {
    private static _instance: LinkKit = null

    // 使用channelCode读取，是prod则为正式服
    // private _isProd: boolean = configure.channelCode === '1'

    // 所有URL需要加上/api前缀，测试服端口号使用80
    private Host: string;/// = 'http://192.168.100.54:8080/v1'
    // readonly Host: string = 'http://192.168.100.58:8080/v1'
    // readonly Host: string = this._isProd 
    //                         ? 'https://public-test.bovine-verse.games/bovineverse-api'
    //                         : 'https://khshsvb.bovineversetest.com/api'

    private _token: string
    set token(value: string) {
        if (this._token != value) {
            this._token = value
        }
    }
    get token() {
        return this._token
    }

    private _tokenTime: number = 0
    set tokenTime(value: number) {
        if (this._tokenTime < value) {
            this._tokenTime = value
        }
    }
    get tokenTime() {
        return this._tokenTime
    }

    static get instance() {
        return this._instance
    }

    private _web3: any
    get web3() {
        return this._web3
    }

    private _address: any
    get address() {
        return this._address
    }

    private _sig: string
    get sig() {
        return this._sig
    }

    private _web3Data: any
    get web3Data() {
        return this._web3Data
    }

    private _configs: any
    get configs() {
        return this._configs
    }

    private _precisionStr = 1000000;
    get precisionStr() {
        return this._precisionStr
    }

    // divBN(nb: string | number) : number{
    //     if (typeof nb == 'string') {
    //         return parseInt(nb) / 1000000000000000000
    //     } else {
    //         return nb / 1000000000000000000
    //     }
    // }

    // mulBN(nb: number): string{
    //     return (nb * 1000000000000000000).toString()
    // }

    divBN(nb: string | number): number | string {
        return this.toWei(nb,this._precisionStr);
    }

    mulBN(nb: string | number): string {
        return this.fromWei(nb,this._precisionStr);
    }

    toChecksumAddress(address) {
        return this._web3.utils.toChecksumAddress(address);
      }

    initServer(serverUrl: string) {
		this.Host = serverUrl;
	}
    async onLoad() {
        
        LinkKit._instance = this;
        // if(cc.sys.isMobile){
        //     return;
        // }
        // //如果不是polygon链是提示切链
        // this.usePolygonMainnet()

        try {
            if (typeof window['ethereum'] !== 'undefined') {
                this._web3 = new Web3(window['ethereum'])//可以填入自己的RPC
                // let provider = new Web3.providers.Web3Provider(window['ethereum']);
            } else if (window['web3']) {
                this._web3 = new Web3(window['web3']['currentProvider'])
            } else {
                // this._web3 = new Web3(
                //     // 'https://data-seed-prebsc-1-s2.binance.org:8545/'
                //     new Web3.providers.HttpProvider('https://matic-mumbai.chainstacklabs.com')
                // )
                this._web3 = new Web3('wss://polygon-mumbai-bor.publicnode.com')

            }
            console.log(this._web3, "this._web=====");
            this._web3.currentProvider.on('networkChanged', (networkId) => {
                console.log(`Network changed to networkId ${networkId}`);
                if(networkId == GameConstant.ChainType.POLYGON_TEST){
                    App.CustomEventListener.dispatchEvent(GameConstant.GameEvent.CHANGE_CHAINID);
                }
                
                // 这里可以执行您的处理逻辑
            });
            

            // cc.log('this._isProd', this._isProd)
            await this.getAddress();
        } catch (error) {
            console.log(error, "加载Web3错误");
        }
        
        
        // 正式服使用正式服的合约地址配置
        let contractName: string = 'contract_dev';
        const jsonAsset = await resKit.loadRes(contractName, cc.JsonAsset)
        this._configs = jsonAsset['json'] || {}
    }
    connectMetaMask(){

    }
    connectTrust(){
        
    }
    onDestroy() {
        LinkKit._instance = null
    }
    // 检测是否为polygon链
    async checkChain(): Promise<boolean>{
        if(cc.sys.isMobile){
            return;
        }
        // 判断是不是polygon链
        const id = await this.web3.eth.getChainId()
        
        // let a = await LinkKit.instance.web3.utils.hexValue(id)
        console.log( "当前链ID", id);
        if(Number(id) !== GameConstant.ChainType.POLYGON_TEST){
            //如果不是polygon链是提示切链
            this.switchChain(GameConstant.ChainType.POLYGON_TEST)
            return false
        }
        return true
    }
    //如果不是polygon链是提示切链
    async switchChain(chainId:number){
        try{
            window['ethereum'].request({ method: 'wallet_switchEthereumChain', params: [{ chainId: `0x${chainId.toString(16)}` }] })
        } catch (error){
            this.addPolygonChain(chainId);
        } finally{
            this.addPolygonChain(chainId);
        }
        
    }
    //添加polygon
    addPolygonChain(chainId:number){
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
        } catch (error) {
            console.error('链添加失败', error);
        }
        
    }
    
    async confirmationBox() {
        await window['ethereum'].enable()
    }
    async getAddress(){
        if (window['ethereum']['selectedAddress']) {
            this._address = window['ethereum']['selectedAddress']
        } else {
            await window['ethereum'].request({
                method: 'eth_requestAccounts',
            })
            this._address = window['ethereum'].address
        }
    }
    async getSignData(): Promise<any> {//msg: string
        return new Promise(async resolve => {

            // 检测是否为polygon链
            let isPolygonMainnet: boolean = await this.checkChain()
            if(!isPolygonMainnet){
                resolve(null)
                return
            }

            // if (window['ethereum']['selectedAddress']) {
            //     this._address = window['ethereum']['selectedAddress']
            // } else {
            //     await window['ethereum'].request({
            //         method: 'eth_requestAccounts',
            //     })
            //     this._address = window['ethereum'].address
            // }
            // var signature = this.web3.eth.account.sign(msg,'0xe1aACbF5CE2f90b62fc739234c19e6C1cb49d2b4');//.signMessage(msg)
            // var signature = this.web3.eth.accounts.hashMessage(msg);
            // console.log(signature , "签名消息");
            this.web3.currentProvider.sendAsync(
                {
                    method: 'personal_sign',
                    params: [this.address],//msg, 
                    from: this.address,
                },
                (err, res) => {
                    if (err) {
                        console.warn('getAddress-err: ', err)
                        resolve(null)
                        //链上拒绝交易
                        
                        return
                    }

                    // this._sig = `${this.getWalletType()} ${res.result}`
                    this._sig = `${res.result}`
                    this._web3Data = {
                        address: this.address,
                        sig: this._sig,
                    }
                    resolve(this._web3Data)
                }
            )
        })
    }
    
    /**
     * 获取合约地址
     * @param abi
     * @param address
     */
    async contract(abi: string, address: string) {
        const contract = new this.web3.eth.Contract(abi, address);
        console.log(this.web3.eth, contract);
        // await this.changeAddress()
        // console.log('切换地址: ', this.web3Data.address)
        return contract
    }

    private changeAddress() {
        return new Promise(resolve => {
            new this.web3.eth.getAccounts().then(data => {
                
                var address = data[0].toLowerCase();
                // console.log('切换地址: ', address,this.web3Data.address)
                if (address !== this.address) {
                    resolve(false)
                    return
                }
                resolve(true)
            })
        })
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

    /**
     * 链上数据 call
     * @param abi abi
     * @param address address
     * @param method 方法名称
     * @param arg 方法参数
     * @param callBack 回调函数
     * @param callbackTarget 回调作用域
     * @param isNotLoading 是否不显示loading
     * @returns 是否成功
     */
    call(
        abi: string,
        address: string,
        method: string,
        arg: any[],
        callBack: Function,
        callbackTarget: any,
        isNotLoading?: boolean
    ): Promise<boolean> {
        if (!isNotLoading) {
            
        }
        return new Promise(async resolve => {
            const contract = await this.contract(abi, address)
            if (!contract.methods[method]) {
                console.warn(`call undefined method: ${method}`)
                if (!isNotLoading) {
                    
                }
                resolve(false)
            }
            contract.methods[method](...arg).call((err, result) => {
                if (err) {
                    resolve(false)
                    cc.warn(`call method failed : ${method}`)
                    if (!isNotLoading) {
                        
                    }
                    return
                }

                if (callBack) {
                    callBack.call(callbackTarget, result)
                }
                if (!isNotLoading) {
                    
                }
                resolve(true)
            })
        })
    }

    /**
     * 链上数据 send
     * @param abi abi
     * @param address address
     * @param method 方法名
     * @param arg 方法参数
     * @param sendData data数据
     * @param callBack 回调
     * @param callbackTarget 回调作用域
     * @param isNotLoading 是否不显示loading
     * @returns 是否成功
     */
    send(
        abi: string,
        address: string,
        method: string,
        arg: any[],
        sendData: any,
        callBack: Function,
        callbackTarget: any,
        isNotLoading?: boolean
    ): Promise<boolean> {
        if (!isNotLoading) {
            
        }

        let cb = callBack
        let cbTarget = callbackTarget
        let res = null

        return new Promise(async resolve => {
            // 检测是否为polygon链
            let isPolygonMainnet: boolean = await this.checkChain();
            if(!isPolygonMainnet){
                if (!isNotLoading) {
                    
                }
                resolve(false)
                return
            }

            const price = await this.web3.eth.getGasPrice()
            let newPrice = Number(LinkKit.instance.web3.utils.toWei('20', 'gwei')) + Number(price)
            // cc.log('newPrice', newPrice)
            // this.web3.eth.gasPrice = newPrice

            const contract = await this.contract(abi, address)

            if (!contract.methods[method]) {
                console.warn(`send undefined method: ${method}`)
                if (!isNotLoading) {
                    
                }
                resolve(false)
            }
            // contract.methods.method().api;
            contract.methods[method](...arg)
                // .send(sendData)
                .send({ from: LinkKit.instance.address, gasPrice: newPrice })
                .once('receipt', result => {
                    // res = result
                    // console.log(method + " send receipt...")
                    console.log('send complete, method: ', method)
                    if (callBack) {
                        callBack.call(callbackTarget, result)
                    }
                    if (!isNotLoading) {
                        
                    }
                    resolve(true)
                })
                // https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html?highlight=confirmation
                .on('confirmation', (no, b) => {
                    // console.log(method + " confirmation:", no)
                    // if (no == 24) {
                    //     if (cb) {
                    //         cb.call(cbTarget, res)
                    //     }
                    //     if (!isNotLoading) {
                    //         
                    //     }
                    //     resolve(true)
                    // }
                })
                .on('error', result => {
                    console.warn(
                        `send fail, method: ${method}, receipt: ${result}`
                    )
                    if (!isNotLoading) {
                        
                    }
                    //链上拒绝交易
                    
                    resolve(false)
                })
        })

    }

    /**
     * 获取玩家身上的BNB
     * @returns
     */
    getUserToken(): Promise<number> {
        return new Promise(async resolve => {
            this.web3.eth.getBalance(this.address, (err, result) => {
                if (err == null) {
                    resolve(this.web3.utils.fromWei(result, 'ether'))
                } else {
                    resolve(0)
                }
            })
        })
    }

    private buildUrl(handler, obj?: any): string {
        var params = []
        for (var p in obj) {
            params.push(
                encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])
            )
        }

        if (obj) {
            return this.Host + handler + '?' + params.join('&')
        } else {
            return this.Host + handler
        }
    }

    //是否授权中
    private _isAuthing: boolean = false

    // 地址鉴权
    async verify() {
        if (this._isAuthing) {
            return false
        }
        this._isAuthing = true

        const response = <{ address: string; token: string }>await this.Post(
            '/auth/verify',
            {
                address: this.address,
                sig: this.sig,
            }
        )
        if (response) {
            LinkKit.instance.token = response.token
            LinkKit.instance.tokenTime = new Date().getTime() + 14 * 60 * 1000
        }

        this._isAuthing = false
        return true
    }

    async Post<T>(handler: string, params?: any): Promise<T> {
        // 检查授权时间
        const currentTime = new Date().getTime()
        if (currentTime >= this.tokenTime && this.token) {
            await this.verify()
        }

        return new Promise(resolve => {
            const xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status <= 207) {
                        // cc.log('Post-responseText===', xhr.responseText)
                        const res = JSON.parse(xhr.responseText)
                        // console.log(res.data , "获取HTTP消息");
                        resolve(res.data);
                        // if (res.code != 1) {
                        //     cc.log('res.code', res.code)
                        //     resolve(null)
                        // } else {
                        //     resolve(res.data)
                        // }
                    } else {
                        cc.log('xhr.status', xhr.status)
                        resolve(null)
                    }
                }
            }
            console.log(this.Host , "");
            xhr.open('POST', this.Host + handler, true)
            xhr.setRequestHeader('content-type', 'application/json')
            // console.log('token: ', this.token)
            if (this.token) {
                xhr.setRequestHeader('Token', this.token)
            }
            xhr.send(JSON.stringify(params))
        })
    }

    Get(handler: string, params?: any): Promise<any> {
        const url = this.buildUrl(handler, params)
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status <= 207) {
                        // cc.log('Get-responseText', xhr.responseText)
                        const res = JSON.parse(xhr.responseText);
                        resolve(res.data)
                        // console.log(res , "请求GET");
                        // if (res.code != 1) {
                        //     cc.log('res.code', res.code)
                        //     resolve(null)
                        // } else {
                        //     resolve(res.data)
                        // }
                    } else {
                        cc.log('xhr.status', xhr.status)
                        resolve(null)
                    }
                }
            } 
            // xhr.withCredentials = true; 
            xhr.open('GET', url, true);
            // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
            // xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type,Authorization');
            
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.setRequestHeader("Authorization", "Bearer " + this.token);
           

            // if (this.token) {
            //     xhr.setRequestHeader('Token', this.token)
            // }
            
            xhr.send()
        })
    }

    async Put(handler: string, params?: any): Promise<WebPutResult> {
        // 检查授权时间
        const currentTime = new Date().getTime()
        if (currentTime >= this.tokenTime && this.token) {
            await this.verify()
        }

        return new Promise(resolve => {
            const xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status <= 207) {
                        // cc.log('Put-responseText===', xhr.responseText)
                        const res = JSON.parse(xhr.responseText)
                        if (res.code != 1) {
                            cc.log('res.code', res.code)
                            resolve({ rc: res.code })
                        } else {
                            resolve({ rc: res.code, data: res.data })
                        }
                    } else {
                        cc.log('xhr.status', xhr.status)
                        resolve({ rc: 1000 })
                    }
                }
            }
            xhr.open('PUT', this.Host + handler, true)
            xhr.setRequestHeader('content-type', 'application/json')
            // console.log('token: ', this.token)
            if (this.token) {
                xhr.setRequestHeader('Token', this.token)
            }
            xhr.send(JSON.stringify(params))
        })
    }

    // 是否自己的地址
    isSelfAddress(address: string) {
        return address.toLocaleLowerCase() == this._address.toLocaleLowerCase()
    }

    isAddress(address: string): boolean {
        return this.web3.utils.isAddress(address)
    }
    toWei(number: number | string, unit: number){
        // validator.validate(['number'], [number]);
        const denomination = this.web3.utils.toBigInt(unit);
        // if value is decimal e.g. 24.56 extract `integer` and `fraction` part
        // to avoid `fraction` to be null use `concat` with empty string
        const [integer, fraction] = String(
            typeof number === 'string' && !this.web3.utils.isHexStrict(number) ? number : this.web3.utils.toNumber(number),
        )
            .split('.')
            .concat('');
    
        // join the value removing `.` from
        // 24.56 -> 2456
        const value = BigInt(`${integer}${fraction}`);
    
        // multiply value with denomination
        // 2456 * 1000000 -> 2456000000
        const updatedValue = value * denomination;
    
        // count number of zeros in denomination
        const numberOfZerosInDenomination = denomination.toString().length - 1;
    
        // check which either `fraction` or `denomination` have lower number of zeros
        const decimals = Math.min(fraction.length, numberOfZerosInDenomination);
    
        if (decimals === 0) {
            return updatedValue.toString();
        }
    
        // Add zeros to make length equal to required decimal points
        // If string is larger than decimal points required then remove last zeros
        return updatedValue.toString().padStart(decimals, '0').slice(0, -decimals);
    };
    fromWei(number: number | string, unit: number){
        const denomination = this.web3.utils.toBigInt(unit);
    
    
        // value in wei would always be integer
        // 13456789, 1234
        const value = String(this.web3.utils.toNumber(number));
    
        // count number of zeros in denomination
        // 1000000 -> 6
        const numberOfZerosInDenomination = denomination.toString().length - 1;
    
        if (numberOfZerosInDenomination <= 0) {
            return value.toString();
        }
    
        // pad the value with required zeros
        // 13456789 -> 13456789, 1234 -> 001234
        const zeroPaddedValue = value.padStart(numberOfZerosInDenomination, '0');
    
        // get the integer part of value by counting number of zeros from start
        // 13456789 -> '13'
        // 001234 -> ''
        const integer = zeroPaddedValue.slice(0, -numberOfZerosInDenomination);
    
        // get the fraction part of value by counting number of zeros backward
        // 13456789 -> '456789'
        // 001234 -> '001234'
        const fraction = zeroPaddedValue.slice(-numberOfZerosInDenomination).replace(/\.?0+$/, '');
    
        if (integer === '') {
            return `0.${fraction}`;
        }
    
        if (fraction === '') {
            return integer;
        }
    
        return `${integer}.${fraction}`;
    };
}
