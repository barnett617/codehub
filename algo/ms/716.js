/**
 * initialize your data structure here.
 */
 var MaxStack = function() {
  this.stack = [];
  this.maxStack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MaxStack.prototype.push = function(x) {
  this.stack.push(x);
  const max = this.maxStack.length ? this.maxStack[this.maxStack.length - 1] : x;
  this.maxStack.push(max > x ? max : x);
};

/**
* @return {number}
*/
MaxStack.prototype.pop = function() {
  this.maxStack.pop();
  return this.stack.pop();
};

/**
* @return {number}
*/
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MaxStack.prototype.peekMax = function() {
  return this.maxStack[this.maxStack.length - 1];
};

/**
* @return {number}
*/
MaxStack.prototype.popMax = function() {
  const max = this.peekMax();
  const buffer = [];
  while (this.top() !== max) {
      buffer.push(this.pop());
  }
  this.pop();
  while (buffer.length) {
      this.push(buffer.pop());
  }
  return max;
};

/** 
* Your MaxStack object will be instantiated and called as such:
* var obj = new MaxStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.peekMax()
* var param_5 = obj.popMax()
*/

function test() {
  var obj = new MaxStack();
  console.log(obj.push(5));
  console.log(obj.push(1));
  console.log(obj.push(5));
  console.log(obj.top());
  console.log(obj.popMax());
  console.log(obj.top());
  console.log(obj.peekMax());
  console.log(obj.pop());
  console.log(obj.top());
}

test();

// summary

// 1. use 2 stacks to store data and current max
// 2. popMax: pop until find maximum, then restore stack