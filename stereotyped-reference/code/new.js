// new的实现
function fakeNew(func) {
  if (typeof func !== 'function') {
    throw 'argument should be a function';
  }
  let target = Object.create(func.prototype);
  let args = [].slice.call(arguments, 1);
  let result = func.apply(target, args);
  let isObj = typeof result === 'object' && result !== null;
  let isFunc = typeof reuslt === 'function';
  if (isObj || isFunc) {
    return result;
  }
  return target;
}

class Func {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(this.name);
  }
}

const func = new Func('test');
func.print();

function Func2(name) {
  this.name = name;
}
Func2.prototype.print = function() {
  console.log(this.name);
}

const func2 = fakeNew(Func2, 'test');
func2.print();


// test
// test