/**
 *  指定字符编码，返回原始的 buffer
 */
const fs = require('fs');
const path = require('path');

// 如果是相对路径，是相对于当前进程所在的路径（process.cwd()），而不是相对于当前脚本所在的路径。
const filePath = path.join(__dirname, 'read.txt');
// fs.readFile() 函数会缓存整个文件
// 异步读文件
// 如果没有指定文件编码，返回的是原始的缓存二进制数据，这时需要调用buffer对象的toString方法，将其转为字符串
fs.readFile(filePath, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
  // Hello world.
});  