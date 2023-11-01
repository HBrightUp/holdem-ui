/**
 * 工具类
 */
// import { UIManager } from '../UI/UIManager';
const { ccclass, property } = cc._decorator;

@ccclass('KGameUtils')
export class KGameUtils {
    //把数字转化为千分的数字格式
    static numFormatToThousand(num: any) {
        var num1 = parseInt(num);
        var num2 = "";
        if (num % 1)
            num2 = "." + num.toString().split(".")[1];
        var str = "";
        while (1) {
            if (num1 >= 1000) {
                var gewei = num1 % 10;
                var shiwei = Math.floor((num1 / 10) % 10);
                var baiwei = Math.floor((num1 / 100) % 10);
                str = "," + baiwei + shiwei + gewei + str;
                num1 = Math.floor(num1 / 1000);
            } else {
                str = num1 + str + num2;
                break;
            }
        }
        return str;
    }

    //对象深拷贝
    public static deepCopy(p: any, c: any) {
        var c = c || {};
        for (var i in p) {
            if (!p.hasOwnProperty(i)) {
                continue;
            }
            if (typeof p[i] === 'object') {
                c[i] = (p[i].constructor === Array) ? [] : {};
                this.deepCopy(p[i], c[i]);
            } else {
                c[i] = p[i];
            }
        }
        return c;
    }
    /**
    * 获取指定数的序号
    * @param num
    * @param length
    */
    //获取指定位数的序号（如：003）
    public static getSerialNum(num: any, length: number) {
        var serialNum: any = (Array(length).join("0") + num).slice(-length);
        return serialNum;
    }

    //距离
    public static v3GetDistance(d1: cc.Vec3, d2: cc.Vec3) {
        return Math.sqrt(Math.pow(d1.x - d2.x, 2) + Math.pow(d1.y - d2.y, 2) + Math.pow(d1.z - d2.z, 2))
    }
    //获取当前牌值
    public static getCardNum(cars: any) {
        var carsNum = (Number(cars) - 1) % 13 + 1;
        return carsNum;
    }
    //获取当前牌花色
    public static getCardColor(cars: any) {
        var color = (cars - 1) / 13 + 1;
        return parseInt(color.toString());
    }
    //获取时间戳
    public static getTimestamp(time: string) {
        var d = new Date(time);
        var t = d.getTime();
        return t;
    }
    //获取当前时间
    public static currentFormat() {
        var time = new Date();
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        var ld = time.toLocaleDateString();//当前日期
        var md = time.toLocaleTimeString();//当前时间
        var l = time.toLocaleString();//当前日期与时间

        // var reg = new RegExp('/', "g")
        // var newld = ld.replace(reg, '-');
        return ld;
    }
    //时间戳转换时间格式
    public static add0(m: number) { return m < 10 ? '0' + m : m }
    public static format(shijianchuo: any) {
        //shijianchuo是整数，否则要parseInt转换
        var time = new Date(shijianchuo);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + this.add0(m) + '-' + this.add0(d) + '   ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
    }

    /**
     * 转千分位并保留小数位
     * @param {*} number 数字
     * @param {*} n  保留小数点后多少位
     */
    public static parseFormatNum(number: any, n: number) {
        if (n != 0) {
            n = (n > 0 && n <= 20) ? n : 2;
        }
        number = parseFloat((number + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var sub_val = number.split(".")[0].split("").reverse();
        var sub_xs = number.split(".")[1];
        var show = "";
        for (var i = 0; i < sub_val.length; i++) {
            show += sub_val[i] + ((i + 1) % 3 == 0 && (i + 1) != sub_val.length ? "," : "");
        }
        if (n == 0) {
            return show.split("").reverse().join("");
        } else {
            let str = '';
            if (show.search("-") !== -1 && show.split("").length == 5) {//出现负数三位数
                str = show.split("").reverse().join("").replace(",", "")
            } else {
                str = show.split("").reverse().join("")
            }
            return str + "." + sub_xs;
        }
    }
    /**
     * 取整
     * @param {*} number 数字
     * @param {*} divisor  除数
     */
    public static rounding(num: any, divisor?: number) {
        if (!divisor) {
            divisor = 1;
        }
        var takInt = Math.floor(parseInt(num) / divisor);
        return takInt;
    }
    /**
     * 获取随机整数
     * @param min 最小
     * @param max 最大
     * @returns 
     */
    public static randomNum(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //精度计算
    public static computeTwo(num: any) {
        return parseFloat((Number(num)).toPrecision(12)).toFixed(8);
    }
    //获取闰年平年的天数
    public static getYearDay(year: any) {
        var day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//各月天数
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            day[1] = 29;
        }
        return day;
    }

    /**
     * 复制粘贴板
     * @param {*} str 需要复制的文字内容
     */
    public static copyString(str: string) {
        if (cc.sys.isNative) {
            //原生自己实现
        } else if (cc.sys.isBrowser) {
            const el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.fontSize = '16pt';

            const selection = getSelection();
            let originalRange;
            if (selection.rangeCount > 0) {
                originalRange = selection.getRangeAt(0);
            }
            document.body.appendChild(el);
            el.select();
            el.selectionStart = 0;
            el.selectionEnd = str.length;

            let success = false;
            try {
                success = document.execCommand('copy');
                // UIManager.toastDialog("复制到剪贴板成功");
                // App.log('“复制到剪贴板成功”');
            } catch (err) {
                // UIManager.toastDialog("复制到剪贴板失败");
                // App.log('“复制到剪贴板失败”');
            }

            document.body.removeChild(el);

            if (originalRange) {
                selection.removeAllRanges();
                selection.addRange(originalRange);
            }
            return success;
        }
    }
    /**
    * 数组去重
    * @param maxArr
    * @param minArr
    */
    public static arrRemoveRepetition(maxArr, minArr) {
        var nArr = [];  //存储新数组
        nArr = maxArr.filter(function (item) {
            var temp = minArr.map(function (v) {
                return v
            })
            return !temp.includes(Number(item))
        })
        return nArr
    }
    /**
     * 数组字符转Num
     */
    public static arrStringToNum(arr) {
        var nArr = [];
        for (var i = 0; i < arr.length; i++) {
            nArr.push(Number(arr[i]));
        }
        return nArr
    }
    /***
     * 数组去重1
     */

    // 封装去重的方法 maxArr 长度大的数组   minArr 长度小的数组,要进行比较的数组  id是判断依据，返回的结果
    public static arrRemoveRepetition1(maxArr, minArr, id) {
        var nArr = [];  //存储新数组
        nArr = maxArr.filter(function (item) {
            var temp = minArr.map(function (v) {
                return v[id]
            })
            return !temp.includes(item[id])
        })
        return nArr
    }

    /**
     * 获取滚动视图节点空间中的项目位置
     * @param {*} scrollview scrollView node
     * @param {*} item 需要转化的item
     */
    public static getPositionInView(scrollview: Node, item: Node) {
        // let worldPos = item.parent!.getComponent(UITransform)!.convertToWorldSpaceAR(item.position);
        // let viewPos = scrollview.getComponent(UITransform)!.convertToNodeSpaceAR(worldPos);
        // return viewPos;
    }


    static getHongHeiCardType(data: any) {
        if (data.length != 3) {
            return;
        }
        let cardTypeIndex = data[1];
        let cardValue = data[2];

        if (cardTypeIndex == 1) {
            if (cardValue == "T")
                cardValue = "10";
            return "对" + cardValue;
        } else {
            return KGameUtils.cardTypeArr[Number(cardTypeIndex)];
        }
    }

    private static cardTypeArr = ["高牌", "对子", "顺子", "金花", "顺金", "豹子"];

    /**
    * 限制名称长度
    * @param data
    */
    //限制名称长度
    static subMyName(data: string) {
        var realLength = 0, len = data.length, charCode = -1, isChinese: boolean = true, num = 6;
        for (var i = 0; i < len; i++) {
            charCode = data.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1;
                isChinese = false;
            } else {
                realLength += 2;
                num = 6;
                isChinese = true;
            }
        }
        if (realLength >= 5) {
            var str = ''
            if (isChinese) {
                num = num / 2;
            }
            str = data.substring(0, num) + '*';
            return str
        } else {
            return data
        }
    }
    /**
     * 字符串转字节码
     * @param str 
     * @returns 
     */
    static stringToByte(str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            } else {
                bytes.push(c & 0xFF);
            }
        }

        return new Uint8Array(bytes).buffer;
    }
    static strToByte(str) {
        const buffer = [];
        for (let i of str) {
            const _code = i.charCodeAt(0);
            if (_code < 0x80) {
                buffer.push(_code);
            } else if (_code < 0x800) {
                buffer.push(0xc0 + (_code >> 6));
                buffer.push(0x80 + (_code & 0x3f));
            } else if (_code < 0x10000) {
                buffer.push(0xe0 + (_code >> 12));
                buffer.push(0x80 + (_code >> 6 & 0x3f));
                buffer.push(0x80 + (_code & 0x3f));
            }
        }
        return Uint8Array.from(buffer);
    }
    /**
     * 字节转字符串
     * @param arr 
     * @returns 
     */
    static byteToString(arr) {
        if (typeof arr === 'string') {
            return arr;
        }
        var str = '',
            _arr = arr;
        for (var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2),
                v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[i].toString(2).slice(7 - bytesLength);
                for (var st = 1; st < bytesLength; st++) {
                    store += _arr[st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            } else {
                str += String.fromCharCode(_arr[i]);
            }
        }
        return str;
    }
    /**
    * 截取字符串展示开头和结尾
    * @param data
    */
    //截取字符串展示开头和结尾
    static subConString(data: string) {
        return data.slice(0, 4) + "..." + data.slice(data.length - 4, data.length);
    }
    /**
    * 设置金额数字k
    * @param num
    * @param digits
    */
    //设置金额数字k , m , g
    static nFormatter(num, digits) {//数字,几位小数
        const si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "K" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
    static getScaleTw(WinLight, time, time1) {
        return cc.tween(WinLight)
            .delay(time)
            .to(1.5, { scale: new cc.Vec3(1.6, 1.6, 1.6) })
            .to(0, { scale: new cc.Vec3(1, 1, 1) })
            .delay(time1)
            .union()
            .repeat(5);
    }

    static getOpacityTw(opacityNode, time, time1) {
        return cc.tween(opacityNode)
            .delay(time)
            .to(0, { opacity: 255 })
            .to(1.5, { opacity: 0 })
            .to(0, { opacity: 0 })
            .delay(time1)
            .union()
            .repeat(5);
    }

    static createKSGameInfo(text) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.text = text;
        document.head.appendChild(script);
        document.head.removeChild(script);
    }

    //小数运算

    static isInteger(obj) {
        return Math.floor(obj) === obj
    }

    static toInteger(floatNum) {
        var ret = { times: 1, num: 0 };
        if (KGameUtils.isInteger(floatNum)) {
            ret.num = floatNum;
            return ret
        }
        var strfi = floatNum + '';
        var dotPos = strfi.indexOf('.');
        var len = strfi.substr(dotPos + 1).length;
        var times = Math.pow(10, len);
        var intNum = parseInt((floatNum * times + 0.5).toString(), 10);
        ret.times = times;
        ret.num = intNum;
        return ret
    }

    static operation(a, b, op) {
        var o1 = KGameUtils.toInteger(a);
        var o2 = KGameUtils.toInteger(b);
        var n1 = o1.num;
        var n2 = o2.num;
        var t1 = o1.times;
        var t2 = o2.times;
        var max = t1 > t2 ? t1 : t2;
        var result = null;
        switch (op) {
            case 'add':
                if (t1 === t2) { // 两个小数位数相同
                    result = n1 + n2
                } else if (t1 > t2) { // o1 小数位 大于 o2
                    result = n1 + n2 * (t1 / t2)
                } else { // o1 小数位 小于 o2
                    result = n1 * (t2 / t1) + n2
                }
                return result / max;
            case 'subtract':
                if (t1 === t2) {
                    result = n1 - n2
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2)
                } else {
                    result = n1 * (t2 / t1) - n2
                }
                return result / max;
            case 'multiply':
                result = (n1 * n2) / (t1 * t2);
                return result;
            case 'divide':
                result = (n1 / n2) * (t2 / t1);
                return result
        }
    }

    //防止按钮连续点击
    static preventCombos(btn: cc.Button, disableTime: number = 0.4) {
        if (!btn.interactable) {
            return;
        }
        //如果屏蔽时间大于0，点击之后屏蔽
        if (disableTime > 0) {
            btn.interactable = false;      //禁用按钮 一定时间后再启用，防连击
            window.setTimeout(() => { if (btn) { btn.interactable = true } }, disableTime * 1000)
        }
    }
    /**
    * 通过角度获得圆上某点坐标
    * @param angle 角度
    * @param radius 半径
    * @param center 圆心坐标
    */
    public static getPosInCircle(angle, radius, center) {
        //求圆上某角度的点的坐标
        var x = Math.floor(center.x + radius * Math.cos((angle * Math.PI) / 180)); //Math.floor不加上的话 4，当angle=90时x不对
        var y = Math.floor(center.y + radius * Math.sin((angle * Math.PI) / 180));
        return cc.v3(x, y, 0);
    }
    /**
     * 获取椭圆上的点
     * @param a 
     * @param b 
     * @returns 
     */
    public static getPosInCircle1(angle, radius, center) {
        //求圆上某角度的点的坐标
        // var angle1 = (270-360/num*i+360)%360;
        // let angle = (angle1 + this.angle+360)%360;

        // var a = angle*Math.PI/180
        // var x = this.longLine*Math.cos(a)+this.center.x;
        // var y = this.shortLine*Math.sin(a)+this.center.y;
        // return cc.v3(x, y,0);
    }
    // 加减乘除的四个接口
    static add(a, b) {
        return KGameUtils.operation(a, b, 'add')
    }

    static subtract(a, b) {
        return KGameUtils.operation(a, b, 'subtract')
    }

    static multiply(a, b) {
        return KGameUtils.operation(a, b, 'multiply')
    }

    static divide(a, b) {
        return KGameUtils.operation(a, b, 'divide')
    }

    /**
     * 
     * @param buffer 解析ONEVENT事件
     * @returns 
     */
    static arrayBufferToBase64(buffer: ArrayBuffer): string {
        let binary = '';
        let bytes = new Uint8Array(buffer);
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }
    /**
     * 
     * @param _key 
     * @param value 
     * @returns 
     */
    static replacer(_key: string, value: any){
        if (typeof value === "bigint") {
            return value.toString();
        } else if (value instanceof Uint8Array) {
            return KGameUtils.arrayBufferToBase64(value);
        } else {
            return value;
        }
    }
}


function JsonAsset(arg0: string, JsonAsset: any, arg2: (err: any, jsonAsset: cc.JsonAsset) => void) {
    throw new Error('Function not implemented.');
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
