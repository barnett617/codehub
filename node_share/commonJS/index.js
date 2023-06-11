const path = require('path');
// const filtPath = path.join(__dirname, 'calc');
// const calc = require(filtPath);
// require寻找顺序
const calc = require('./calc');
// require得到的是模块的module.exports
// 通过调用module.exports上绑定的变量使用模块上暴露的变量
var a = 1;
var b = 2;
var result = calc.add(a, b);
console.log(result);
// 3