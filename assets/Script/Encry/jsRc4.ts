// import { RC4  } from "encry/rc4";
// let JSEncrypt = require("jsencrypt");

// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class rc4 {

//     ctor() {

//     },
//     //洗牌非对称加密解密
//     /**
//     * 单个加密，独立密钥
//     * @param code 
//     * @returns 
//     */
//     encrypt(code) {
//         var rc4 = new RC4(this.generatePass());
//         return rc4.encrypt(code);
//     },
//     getSecretKey() {
//         return this.generatePass();//new RC4(this.generatePass());
//     },
//     /**
//      * 统一加密。统一密钥
//      * @param code 
//      * @returns 
//      */
//     encryptCode(secretKey, code) {
//         return new RC4(secretKey).encrypt(code);
//     },
//     /**
//      * 不同密钥解密
//      * @param secretKey 密钥
//      * @param code 密文
//      * @returns 
//      */
//     decryptCode(secretKey, code) {
//         return new RC4(secretKey).decrypt(code);
//     },

//     generatePass() {
//         var pass = "";
//         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
//         // var array = new Uint32Array(10);
//         // window.crypto.getRandomValues(array);(0-1)*10
//         var passLength = 32;//(Math.random() * 10) + Math.floor(Math.random()*(10-1)+1);

//         for (var i = 0; i < passLength; i++)
//             pass += possible.charAt(Math.floor(Math.random() * possible.length));

//         return pass;
//     },
//     /**
//      * 
//      * @param key 加密/解密的密钥
//      * @param str 要加密/解密的字符串
//      * @returns 
//      */
//     rc4Code(key, str) {
//         var s = [], j = 0, x, res = '';
//         for (var i = 0; i < 256; i++) {
//             s[i] = i;
//         }
//         for (i = 0; i < 256; i++) {
//             j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
//             x = s[i];
//             s[i] = s[j];
//             s[j] = x;
//         }
//         i = 0;
//         j = 0;
//         for (var y = 0; y < str.length; y++) {
//             i = (i + 1) % 256;
//             j = (j + s[i]) % 256;
//             x = s[i];
//             s[i] = s[j];
//             s[j] = x;

//             res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
//         }
//         return res;
//     },
//     // rc4Code(key, str) {
//     //     var s = [], j = 0, x, res = '';
//     //     for (var i = 0; i < 256; i++) {
//     //         s[i] = i;
//     //     }
//     //     for (i = 0; i < 256; i++) {
//     //         j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
//     //         x = s[i];
//     //         s[i] = s[j];
//     //         s[j] = x;
//     //     }
//     //     i = 0;
//     //     j = 0;
//     //     for (var y = 0; y < str.length; y++) {
//     //         i = (i + 1) % 256;
//     //         j = (j + s[i]) % 256;
//     //         x = s[i];
//     //         s[i] = s[j];
//     //         s[j] = x;

//     //         res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
//     //     }
//     //     return res;
//     // }
//     // getRc4Type(key, poker){
//     //     var rc4 = [],encry:any='';
//     //     for(var i=0;i<poker.length;i++){
//     //         encry += this.rc4Code(key,poker[i]);
//     //     }

//     //     //加密后转格式发送
//     //     for(var i=0;i<encry.length;i++){
//     //         rc4.push(encry.charCodeAt(i));
//     //     }
//     //     return rc4;
//     // }
//     /**
//      * 加密处理
//      * @param key 
//      * @param poker 
//      * @returns 
//      */
//     rc4CodedeRrypt(key, poker) {
//         var c = "";
//         var encry = "";
//         var e = [];
//         for (var i = 0; i < poker.length; i++) {
//             c = String.fromCharCode(poker[i]);
//             if (key.length > 1) {
//                 encry += this.rc4Code(key[i], c);
//             } else {
//                 encry += this.rc4Code(key[0], c);
//             }

//         }
//         //将格式加密

//         // console.log(encry , c,"加密后，无转");
//         //加密后转格式发送
//         for (var i = 0; i < encry.length; i++) {
//             e.push(encry.charCodeAt(i));
//         }
//         return e;
//     },
//     /**
//      * 解密处理
//      * @param key 
//      * @param poker 
//      * @returns 
//      */
//     rc4CodeCipher(key, poker) {
//         // console.log(key,poker , "密钥和牌");
//         var f = "";
//         var jiemi = "";
//         var arr = [];
//         for (var i = 0; i < poker.length; i++) {
//             f = String.fromCharCode(poker[i]);
//             if (key.length > 1) {
//                 jiemi += this.rc4Code(key[i], f);
//             } else {
//                 jiemi += this.rc4Code(key[0], f);
//             }

//         }
//         for (var i = 0; i < jiemi.length; i++) {
//             arr.push(jiemi.charCodeAt(i))
//         }
//         return arr;
//     },
//     rc4CodeCipher1(key, poker, num = 0) {
//         // console.log(key,poker , "密钥和牌");
//         var f = "";
//         var jiemi = "";
//         var arr = [];

//         f = String.fromCharCode(poker[0]);
//         jiemi += this.rc4Code(key[num], f);
//         for (var i = 0; i < jiemi.length; i++) {
//             arr.push(jiemi.charCodeAt(i))
//         }
//         num++;
//         if (num >= key.length) {
//             return arr;
//         }
//         return this.rc4CodeCipher1(key, arr, num);
//     },
//     rc4CodeCipher2(key, poker) {
//         // console.log(key,poker , "密钥和牌");
//         var f = "";
//         var jiemi = "";
//         var arr = [];

//         f = String.fromCharCode(poker);
//         jiemi += this.rc4Code(key, f);
//         for (var i = 0; i < jiemi.length; i++) {
//             arr.push(jiemi.charCodeAt(i))
//         }
//         // console.log(arr , "解密数据s");
//         return arr;
//     },
//     //获取密钥对,回调获取公私钥
//     async getRsaKeys(func) {
//         const self = this;
//         var crypto = window.crypto || window.webkitCrypto || window.mozCrypto || window.oCrypto || window.msCrypto;
//         if(!window.crypto.subtle){
            
//             var privateKey = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCk5/SJ1LMx2H75"+
//             "KDFyf4FcnvczLRX+o12ddcY7T5bpgjIfDHOsJ2CWgK7xY0tfIY32kprsxWUvQW4V"+
//             "KQW2R5Cf6zdLacerCKlotCm7TNHXzcaio+IUI6YLaukA/Pu3n9At9DvH8PzZSS1w"+
//             "Ydkk3XEfcSe/8s9H80BKZ8Ppni7xn9t0W9ykeAwl9RIHIjtOa20cJo3GLarV2Czm"+
//             "cxrzioTn9YcppEP37TsZ7T+dzLfM1PU7hRgQzG6dZKxc22KELX3lJKm2BMT5aOat"+
//             "J0hhFzL915cc9nWPS1XrsuYQA9kMTXwSzjJDY0GQVxkvvqrt4oXR2x+ti5vXn4u5"+
//             "iW3CZIyNAgMBAAECggEADmEFYyFPULjadXpKOXwhuQRJdMZpJQ90ob67vr81Xv4R"+
//             "xcBNs8SpOOZWmsi4MT7ZRJdK9/tMU98GLMUrcNXzp+YYJ7S9Cs5SC0WuX90WbRVN"+
//             "zS+yDmR/XX6Ae6wTfNLsEZ26urfqLD4jvqlhiEPg0ceJmkSfS1xMDlDW9d9ro3jT"+
//             "cZPtl71RqYWRJxgf9smk94vAYlXVsLHIs2dqlw6ESt6XimMchR5vpo4ogUc96L/U"+
//             "7s8D1m4WHxiJX9v1raJs4JmmIpaRL93OkE0NQae8uF2dCht52IvDL9bTYEKzUTXe"+
//             "/bn7IY3bDIfgT9sJHleU9F01LnXXgYcg8Tf//X2tJwKBgQDfoCBigLsbW5XpGyOU"+
//             "VvDMTrfc+JFmMTH29g2iJxdLec1yZyKCqCJugxxUcveQFIkt5OV9Ul1aE/J2sK7s"+
//             "Z6zKvrLq3SjUkegGnsuTZRg3OwaxUh9p9hR8QfYW7kYgq9KhbNN9vXF5MPWOfe50"+
//             "AqL5Z80hioqW+J0nlCrxA0x4bwKBgQC8x5reE7++sNOPevqBeXTcMk70Q/rtBC7O"+
//             "Mzrvplgmh88MZ+U75Fhqv/6LArRmMQoBrpCc5YvWo82ISQrcZ3IYU3cn0kPE7jZV"+
//             "fXPwtrF86PJjfI3kSXfozOGZ7hAUFUFNNzd7ACel58XaLcbxQ1XMyrjftg2tEn+8"+
//             "/OV6SHAwwwKBgQC+xPdbkL4NpJ/KcGB114UsharMUzCWoTkimN0gi4CP3qSpB9qk"+
//             "45Ib/LVaRYlz3FD6Wd58fpsskP+yyR8whXEetHgla+29CYuKukSoxQFXfH9FHe22"+
//             "kzr+lba98R7aGDpjg1cYWVhILsAMgtm9FdK6ORcBmhKIoCZQ8VGAsXO2+QKBgAeZ"+
//             "SUSTKu60E2/9FURM7UVHySHP8rPDrVajfUXUPkwev1jSfcmxYVW6sLZLv5M1eh+j"+
//             "NTL7kmtrYISR3BwPFeqgwXUa45tzs0Axso8H65EJl2glxVhhFLCMPrCBgqgsStqe"+
//             "1F7hHLdy4uXrXcysVzHNHy/yFg7XZcjnrR0E+W8dAoGBAIT7e32O0ag08eHl9T4h"+
//             "6INfxoxXumJ+lOVeQ3s7cc7QfiB7ltOSlHdK2YnWej/z2Zw9MpMgbHbGEXSsxRgl"+
//             "kCMuj/iOgg9tDej3EO4G4hoMDSCeInc/YhTQivRxx8vNDR0ej4dxrggC6g8WEF2x"+
//             "8XlkuE06iRaANhD2rXXdAQC5";
//             var publicKey = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCk5/SJ1LMx2H75"+
//             "KDFyf4FcnvczLRX+o12ddcY7T5bpgjIfDHOsJ2CWgK7xY0tfIY32kprsxWUvQW4V"+
//             "KQW2R5Cf6zdLacerCKlotCm7TNHXzcaio+IUI6YLaukA/Pu3n9At9DvH8PzZSS1w"+
//             "Ydkk3XEfcSe/8s9H80BKZ8Ppni7xn9t0W9ykeAwl9RIHIjtOa20cJo3GLarV2Czm"+
//             "cxrzioTn9YcppEP37TsZ7T+dzLfM1PU7hRgQzG6dZKxc22KELX3lJKm2BMT5aOat"+
//             "J0hhFzL915cc9nWPS1XrsuYQA9kMTXwSzjJDY0GQVxkvvqrt4oXR2x+ti5vXn4u5"+
//             "iW3CZIyNAgMBAAECggEADmEFYyFPULjadXpKOXwhuQRJdMZpJQ90ob67vr81Xv4R"+
//             "xcBNs8SpOOZWmsi4MT7ZRJdK9/tMU98GLMUrcNXzp+YYJ7S9Cs5SC0WuX90WbRVN"+
//             "zS+yDmR/XX6Ae6wTfNLsEZ26urfqLD4jvqlhiEPg0ceJmkSfS1xMDlDW9d9ro3jT"+
//             "cZPtl71RqYWRJxgf9smk94vAYlXVsLHIs2dqlw6ESt6XimMchR5vpo4ogUc96L/U"+
//             "7s8D1m4WHxiJX9v1raJs4JmmIpaRL93OkE0NQae8uF2dCht52IvDL9bTYEKzUTXe"+
//             "/bn7IY3bDIfgT9sJHleU9F01LnXXgYcg8Tf//X2tJwKBgQDfoCBigLsbW5XpGyOU"+
//             "VvDMTrfc+JFmMTH29g2iJxdLec1yZyKCqCJugxxUcveQFIkt5OV9Ul1aE/J2sK7s"+
//             "Z6zKvrLq3SjUkegGnsuTZRg3OwaxUh9p9hR8QfYW7kYgq9KhbNN9vXF5MPWOfe50"+
//             "AqL5Z80hioqW+J0nlCrxA0x4bwKBgQC8x5reE7++sNOPevqBeXTcMk70Q/rtBC7O"+
//             "Mzrvplgmh88MZ+U75Fhqv/6LArRmMQoBrpCc5YvWo82ISQrcZ3IYU3cn0kPE7jZV"+
//             "fXPwtrF86PJjfI3kSXfozOGZ7hAUFUFNNzd7ACel58XaLcbxQ1XMyrjftg2tEn+8"+
//             "/OV6SHAwwwKBgQC+xPdbkL4NpJ/KcGB114UsharMUzCWoTkimN0gi4CP3qSpB9qk"+
//             "45Ib/LVaRYlz3FD6Wd58fpsskP+yyR8whXEetHgla+29CYuKukSoxQFXfH9FHe22"+
//             "kzr+lba98R7aGDpjg1cYWVhILsAMgtm9FdK6ORcBmhKIoCZQ8VGAsXO2+QKBgAeZ"+
//             "SUSTKu60E2/9FURM7UVHySHP8rPDrVajfUXUPkwev1jSfcmxYVW6sLZLv5M1eh+j"+
//             "NTL7kmtrYISR3BwPFeqgwXUa45tzs0Axso8H65EJl2glxVhhFLCMPrCBgqgsStqe"+
//             "1F7hHLdy4uXrXcysVzHNHy/yFg7XZcjnrR0E+W8dAoGBAIT7e32O0ag08eHl9T4h"+
//             "6INfxoxXumJ+lOVeQ3s7cc7QfiB7ltOSlHdK2YnWej/z2Zw9MpMgbHbGEXSsxRgl"+
//             "kCMuj/iOgg9tDej3EO4G4hoMDSCeInc/YhTQivRxx8vNDR0ej4dxrggC6g8WEF2x"+
//             "8XlkuE06iRaANhD2rXXdAQC5";
//             func(privateKey, publicKey);
//             return;
//         }
//         //window.crypto 只能在https安全的地址下访问，否则为空
//         await window.crypto.subtle.generateKey(
//             {
//                 name: "RSA-OAEP",
//                 modulusLength: 2048, //can be 1024, 2048, or 4096
//                 publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
//                 hash: { name: "SHA-512" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
//             },
//             true, //whether the key is extractable (i.e. can be used in exportKey)
//             ["encrypt", "decrypt"] //must be ["encrypt", "decrypt"] or ["wrapKey", "unwrapKey"]
//         ).then(function (key) {
//             window.crypto.subtle.exportKey(
//                 "pkcs8",
//                 key.privateKey
//             ).then(function (keydata1) {
//                 window.crypto.subtle.exportKey(
//                     "spki",
//                     key.publicKey
//                 ).then(function (keydata2) {
//                     var privateKey = self.RSA2text(keydata1, 1);
//                     var publicKey = self.RSA2text(keydata2);
//                     func(privateKey, publicKey);
//                 }).catch(function (err) {
//                     console.error(err);
//                 });
//             })
//                 .catch(function (err) {
//                     console.error(err);
//                 });
//         })
//             .catch(function (err) {
//                 console.error(err);
//             });
//     },
//     //解析
//     RSA2text(buffer, isPrivate = 0) {
//         var binary = '';
//         var bytes = new Uint8Array(buffer);
//         var len = bytes.byteLength;
//         for (var i = 0; i < len; i++) {
//             binary += String.fromCharCode(bytes[i]);
//         }
//         var base64 = window.btoa(binary);
//         var text = base64.replace(/[^\x00-\xff]/g, "$&\x01").replace(/.{64}\x01?/g, "$&\n");//"-----BEGIN " + (isPrivate ? "PRIVATE" : "PUBLIC") + " KEY-----\n";
//         // text += base64.replace(/[^\x00-\xff]/g, "$&\x01").replace(/.{64}\x01?/g, "$&\n");
//         // text += "\n-----END " + (isPrivate ? "PRIVATE" : "PUBLIC") + " KEY-----";
//         return text;
//     },
//     //公钥加密
//     /**
//      * 
//      * @param {*} content 加密内容
//      * @param {*} publicKey 公钥
//      * @returns 
//      */
//     encryptPublic(content, publicKey) {
//         var encryptor = new JSEncrypt()  // 创建加密对象实例
//         encryptor.setPublicKey(publicKey)//设置公钥
//         return encryptor.encrypt(content)  // 对内容进行加密
//     },
//     //私钥解密
//     /**
//      * 
//      * @param {*} content 解密内容
//      * @param {*} privateKey 私钥
//      * @returns 
//      */
//     decryptPrivate(content, privateKey) {
//         var decrypt = new JSEncrypt()  // 创建加密对象实例
//         decrypt.setPrivateKey(privateKey)//设置私钥
//         return decrypt.decrypt(content)  // 对内容进行解密
//     },
// }
