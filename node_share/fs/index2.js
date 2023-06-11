/**
 * 执行时使用当前文件夹的文件
 */
const path = require('path');
var fs = require('fs');

function copy(src, dst) {
    //使用 fs.readFileSync 从源路径读取文件内容，并使用 fs.writeFileSync 将文件内容写入目标路径
    const srcPath = path.join(__dirname, '/', src);
    const dstPath = path.join(__dirname, '/', dst);
    // console.log(srcPath);
    // console.log(dstPath);
    fs.writeFileSync(dstPath, fs.readFileSync(srcPath));	
}

function main(argv) {
    copy(argv[0], argv[1]);
}

// console.log(process.argv);
// console.log(process.argv.slice(2));
main(process.argv.slice(2));

// node fs/index2.js a.txt b.txt