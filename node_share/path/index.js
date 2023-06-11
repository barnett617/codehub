const path = require('path');

console.log(__dirname);
// /Users/wangxin/code/github/node/node_share/path
// 被执行文件`所在目录`绝对路径

console.log(__filename);
// /Users/wangxin/code/github/node/node_share/path/index.js
// 被执行文件绝对路径

console.log(process.cwd());
// /Users/wangxin/code/github/node/node_share
// 执行文件（执行node命令）所在绝对路径

console.log(path.resolve('./'));
// 不使用require时候，./与process.cwd()一样，使用require时候，与__dirname一样
// require是编译时执行，read是运行时执行