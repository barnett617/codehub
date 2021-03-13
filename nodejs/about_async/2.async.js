/**
 * generator比较灵活，但很难操纵
 * 于是针对generator出现了语法糖async/await
 */
var fs = require('fs');
var readFile = function(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (error, data) {
            if (error) reject(error);
            resolve(data);
        })
    })
}

var asyncReadFile = async function() {
    var f1 = await readFile('./files/a.txt');
    var f2 = await readFile('./files/b.txt');
    console.log(f1.toString());
    console.log(f2.toString());
}

asyncReadFile()