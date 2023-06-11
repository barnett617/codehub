// 原型链
function Parent() {
  this.name = 'parent';
}
Parent.prototype.getName = function() {
  return this.name;
}
function Child() {
  this.age = 18;
}
Child.prototype = new Parent();
Child.prototype.getName = function() {
  return this.name;
}

const child = new Child();
console.log(child.getName());

// 重写子类原型，使得子类实例能能够沿着原型链访问到父类的属性和方法

// 问题：所有子类共享父类属性和方法，子类无法向父类构造方法传参