// 原型式继承

// 方式一：自定义函数实现
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

// 方式二：使用Object.create()方法实现
const person = {
  name: 'person',
  colors: ['red', 'green']
}
const person1 = Object.create(person, {
  name: {
    value: 'Tom'
  }
})
const person2 = Object.create(person, {
  name: {
    value: 'Jerry'
  }
})
person1.colors.push('blue');
console.log(person1.colors);
console.log(person2.colors);

// [ 'red', 'green', 'blue' ]
// [ 'red', 'green', 'blue' ]


// 问题：包含引用类型的属性值会被多个子类实例共享