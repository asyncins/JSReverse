const CryptoJS = require("crypto-js");


var Index = function (req, res) {
    res.send('Welcome,JSReverse - JavaScript Reverse Server.')
  }

// Base64解码
var decryptBase64 = function(request, response){
    let value = request.query.value;
    let bytes = CryptoJS.enc.Base64.parse(value);
    let result = bytes.toString(CryptoJS.enc.Utf8);
    response.send(result)
}

// MD5加密
var encryptMD5 = function(request, response){
    let value = request.query.value;
    let bytes = CryptoJS.MD5(value);
    let result = bytes.toString();
    response.send(result)
}

// AES解密
var decryptAES = function(request, response){
    let value = request.query.value;
    let secret = CryptoJS.enc.Utf8.parse(request.query.secret);
    let iv = request.query.iv;
    let wordMode = request.query.mode
    let wordPadding = request.query.padding
    let mode = ""
    let padding = ""

    // 匹配加密模式
    switch (wordMode){
        case 'cbc':
            mode = CryptoJS.mode.CBC;
            break;
        case 'cfb':
            mode = CryptoJS.mode.CFB
            break;
        case 'ctr':
            mode = CryptoJS.mode.CTR
            break;
        case 'ecb':
            mode = CryptoJS.mode.ECB
            break;
        case 'ofb':
            mode = CryptoJS.mode.OFB
            break;
        default:
            mode = CryptoJS.mode.CBC
    }

    // 匹配填充模式
    switch (wordPadding){
        case 'pkcs7':
            padding = CryptoJS.pad.Pkcs7;
            break;
        case 'pkcs5':
            padding = CryptoJS.pad.Pkcs5;
            break;
        case 'zero':
            padding = CryptoJS.pad.ZeroPadding;
            break;
        case 'no':
            padding = CryptoJS.pad.NoPadding;
            break;
        default:
            padding = CryptoJS.pad.Pkcs7;
    }

    if (iv == undefined){
        iv = CryptoJS.enc.Utf8.parse("0000000000000000")
    }else{
        iv = CryptoJS.enc.Utf8.parse(request.query.iv) 
    }

    // 解密，传入密文、密钥和向量并设置加密与填充模式
    let bytes = CryptoJS.AES.decrypt(value, secret, {
        iv: iv,
        mode: mode,  // mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
        padding: padding  // NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5
    });
    let result = CryptoJS.enc.Utf8.stringify(bytes);
    response.send(result)
}

module.exports = {
    Index,
    decryptBase64,
    decryptAES,
    encryptMD5
}