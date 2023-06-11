const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'write.txt');
const content = 'Hello world';
// 异步写文件
fs.writeFile(filePath, content, (err) => {
  if (err) {
    throw err;
  }
  console.log('write done');
});