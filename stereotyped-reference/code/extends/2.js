// 构造函数

function Parent() {
  this.colors = ['red', 'green', 'blue'];
}
function Child() {
  Parent.call(this);
}

const child = new Child();
child.colors.push('yellow');
console.log(child.colors);

const child2 = new Child();
console.log(child2.colors);

// [ 'red', 'green', 'blue', 'yellow' ]
// [ 'red', 'green', 'blue' ]

// 使用子类的实例执行父类的构造方法来使得子类实例拥有父类的初始化属性

// 问题：父类方法无法复用