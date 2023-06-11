Function.prototype.myBind = function(context = window, ...args) {
  let originFunc = this;
  let bindArgs = [...args];
  return function() {
    let execArgs = bindArgs.concat(Array.from(arguments));
    originFunc.apply(context, execArgs);
  }
}

function greeting(...args) {
  console.log('This is', this.name);
  console.log('He info', args[0], args[1]);
  console.log('Hobbies', args[2]);
  return this.name + args;
}

const jerry = {
  name: 'Jerry'
}

const tom = {
  name: 'Tom'
}

const newFun = greeting.bind(jerry, 175, 65);
const result = newFun(['eating', 'drinking']);
console.log('result', result);

// This is Jerry
// He info 175 65
// Hobbies [ 'eating', 'drinking' ]
// result Jerry175,65,eating,drinking