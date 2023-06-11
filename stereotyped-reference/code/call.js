Function.prototype.myCall = function(context, ...args) {
  context = context || window;
  context.fn = this;
  let result = context.fn.apply(context, ...args);
  delete context.fn;
  return result;
}

var obj = {
  name: 'Tom'
}

function greet() {
  this.name = 'Jerry';
  this.type = 'animal';
  console.log('Hello', this.name);
  return this.type;
}

const type1 = greet.call(obj);
console.log('type1', type1);

const type2 = greet.myCall(obj);
console.log('type2', type2);

// Hello Jerry
// type1 animal
// Hello Jerry
// type2 animal