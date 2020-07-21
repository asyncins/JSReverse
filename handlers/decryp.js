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
    let iv = CryptoJS.enc.Utf8.parse(request.query.iv );

    // 解密，传入密文、密钥和向量并设置加密与填充模式
    let bytes = CryptoJS.AES.decrypt(value, secret, {
        iv: iv,
        // mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
        mode: CryptoJS.mode.CBC,
        // NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5
        padding: CryptoJS.pad.Pkcs7
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