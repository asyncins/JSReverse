const app = require('./router.js')
const port = 3000

// var CryptoJS = require("crypto-js");
// // 编码
// let value = "https://www.sfhfpc.com/";
// let trans = CryptoJS.enc.Utf8.parse(value);
// let encrypted = CryptoJS.enc.Base64.stringify(trans);
// console.log(encrypted)

// appl.get('/', (req, res) => res.send(encrypted))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))