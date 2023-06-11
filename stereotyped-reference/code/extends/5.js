// 寄生式继承

function createChild(origin) {
  const clone = Object.create(origin);
  clone.getName = function() {
    return this.name;
  }
  console.log(this.name);
  return clone;
}

// 问题：无法对方法进行复用