/**
 *  指定字符编码，返回原始的 buffer
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'read.txt');
// fs.readFile() 函数会缓存整个文件
// 同步读文件
/**
 * 第二个参数可以是一个表示配置的对象，也可以是一个表示文本文件编码的字符串。
 * 默认的配置对象是{ encoding: null, flag: 'r' }
 * 无法同readFile一样调用buffer对象的toString方法，将其转为字符串
 */
const result = fs.readFileSync(filePath, 'utf8');  
console.log(result);
// Hello world.