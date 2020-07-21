const appl = require('./application.js')
const app = require('./application.js');
let {Index, decryptBase64, decryptAES, encryptMD5} = require('./handlers/decryp.js');

app.get('/', Index)
app.get('/decrypt/base64', decryptBase64)
app.get('/decrypt/aes', decryptAES)
app.get('/decrypt/md5', encryptMD5)

module.exports = app;