const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'writeSync.txt');
const content = 'Hello world';
// 异步写文件
const result = fs.writeFileSync(filePath, content);
console.log(result);
