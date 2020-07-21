const CryptoJS = require("crypto-js");


let value = '123456';  // 待加密字符串加密
let secret_value = 'af25-87hk-a35v-5';  // 密钥 16 位
let iv_value = '0000000000000000';  // 初始向量 initial vector 16 位

// 密钥和向量处理
let secret = CryptoJS.enc.Utf8.parse(secret_value);
let iv = CryptoJS.enc.Utf8.parse(iv_value);

// 加密
let encrypted = CryptoJS.AES.encrypt(value, secret, {
    iv: iv,
    // mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
    mode: CryptoJS.mode.CBC,
    // NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5
    padding: CryptoJS.pad.Pkcs7
});

// 将加密结果转换为字符串
encrypted = encrypted.toString();


// 解密，传入密文、密钥和向量并设置加密与填充模式
let decrypted = CryptoJS.AES.decrypt(encrypted, secret, {
    iv: iv,
    // mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
    mode: CryptoJS.mode.CBC,
    // NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5
    padding: CryptoJS.pad.Pkcs7
});

// 将解密结果转换为utf8字符串
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

/*
打印明文、密文和解密结果
xLilCRGWQ/CGqBUVya+4LQ==
123456
*/
console.log(value)
console.log(encrypted)
console.log(decrypted)


