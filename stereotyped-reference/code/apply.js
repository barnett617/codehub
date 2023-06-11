Function.prototype.myApply = function(context = window, args = []) {
  context.fn = this;
  let result = context.fn.call(context, ...args);
  delete context.fn;
  return result;
}

function greet(...hobbies) {
  console.log(this.name, 'likes', hobbies);
}

const person1 = {
  name: 'Jerry',
}

const person2 = {
  name: 'Tom'
}


greet.apply(person1, ['dancing', 'hiking', 'singing']);
greet.apply(person2, ['eating', 'drinking', 'sleeping']);

greet.myApply(person1, ['dancing', 'hiking', 'singing']);
greet.myApply(person2, ['eating', 'drinking', 'sleeping']);


// Jerry likes [ 'dancing', 'hiking', 'singing' ]
// Tom likes [ 'eating', 'drinking', 'sleeping' ]
// Jerry likes [ 'dancing', 'hiking', 'singing' ]
// Tom likes [ 'eating', 'drinking', 'sleeping' ]