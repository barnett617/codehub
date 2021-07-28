/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  const min = this.minStack[this.minStack.length - 1];
  this.minStack.push(min < val ? min : val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.minStack.pop();
  return this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  // the logic below is for popMin()
  
  // const min = this.minStack[this.minStack.length - 1];
  // const buffer = [];
  // while (this.top() !== min) {
  //     buffer.push(this.pop());
  // }
  // this.pop();
  // while (buffer.length) {
  //     this.push(buffer.pop());
  // }
  // return min;
  
  return this.minStack[this.minStack.length - 1]
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/