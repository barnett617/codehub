// 组合继承

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
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.getAge = function() {
  return this.age;
}

const child = new Child('Jerry', 18);
child.colors.push('blue');
console.log(child.colors);
console.log(child.getName());
console.log(child.getAge());

const child2 = new Child('Tom', 20);
console.log(child2.colors);
console.log(child2.getName());
console.log(child2.getAge());

// [ 'red', 'green', 'blue' ]
// Jerry
// 18
// [ 'red', 'green' ]
// Tom
// 20

// 问题：两次调用父类构造方法，第一次为创建子类原型时，第二次为子类构造函数内部