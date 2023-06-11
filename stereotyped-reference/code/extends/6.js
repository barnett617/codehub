// 寄生组合式继承

function Parent(name) {
  this.name = name;
  this.colors = ['red', 'green'];
}
Parent.prototype.getName = function() {
  return this.name;
}
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
const anotherPrototype = Object.create(Parent.prototype);
anotherPrototype.constructor = Child;
Child.prototype = anotherPrototype;

Child.prototype.getAge = function() {
  return this.age;
}

const child = new Child('Tom', 20);
child.colors.push('blue');
console.log(child.colors);
console.log(child.getName());
console.log(child.getAge());

const child2 = new Child('Jerry', 18);
console.log(child2.colors);
console.log(child2.getName());
console.log(child2.getAge());

// [ 'red', 'green', 'blue' ]
// Tom
// 20
// [ 'red', 'green' ]
// Jerry
// 18