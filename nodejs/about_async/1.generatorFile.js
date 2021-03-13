var fs = require('fs');

var readFile = function(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function(error, data) {
            if (error) reject(error);
            resolve(data);
        })
    })
}

var gen = function* () {
    var f1 = yield readFile('./files/a.txt');
    var f2 = yield readFile('./files/b.txt');
}

const result = gen();
// console.log(result.next());
// console.log(result.next());

// { value: Promise { <pending> }, done: false }
// { value: Promise { <pending> }, done: false }

/**
 * yield后面的内容为yield.next()中的value
 */

result.next().value.then(f1 => {
    console.log(f1.toString());
})
result.next().value.then(f2 => {
    console.log(f2.toString())
})

/**
 * 该程序读取文件都会是一个异步行为
 * 上面程序会分别在读取到各自的文件后进行显示
 */