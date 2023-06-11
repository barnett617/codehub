var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('./a.txt');
  var f2 = yield readFile('./b.txt');
  // console.log(f1.toString());
  // console.log(f2.toString());
};

function print(content) {
  console.log(content);
}

const result = gen();
result.next().value.then((f1) => {
  print(f1.toString());
})
result.next().value.then((f2) => {
  print(f2.toString());
})

// print(result.next());
// print(result.next());
// print(result.next());
// print(result.next());
// result.next();
// result.next();
// result.next();