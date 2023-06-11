/**
 * 在执行脚本时携带需要读写文件的绝对路径
 */
var fs = require('fs');

function copy(src, dst) {
    //使用 fs.readFileSync 从源路径读取文件内容，并使用 fs.writeFileSync 将文件内容写入目标路径
    fs.writeFileSync(dst, fs.readFileSync(src));	
}

function main(argv) {
    copy(argv[0], argv[1]);
}

console.log(process.argv);
// console.log(process.argv.slice(2));
main(process.argv.slice(2));

// node fs/index.js ./fs/a.txt ./fs/b.txt