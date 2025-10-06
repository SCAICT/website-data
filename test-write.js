const fs = require('fs');

// 建立 benign 測試檔案
fs.writeFileSync('benign-test.txt', '這是一個安全測試檔案');

console.log('Benign file created.');
