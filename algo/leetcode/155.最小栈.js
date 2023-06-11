/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    // this.stack = [];

    // this.stack = [];
    // this.minList = [];

    // this.min = Infinity;
    // this.stack = [];

    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // this.stack.push(x)

    // this.stack.push(x);
    // if (this.minList.length === 0 || x <= this.minList[this.minList.length - 1]) {
    //     this.minList.push(x)
    // }

    // this.stack.push(x);
    // if (x < this.min) {
    //     this.min = x;
    // }

    this.stack.push({
        value: x,
        min: this.stack.length === 0 ? x : Math.min(x, this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // this.stack.pop()

    // var x = this.stack.pop();
    // if (x === this.minList[this.minList.length - 1]) {
    //     this.minList.pop();
    // }

    // var x = this.stack.pop();
    // if (x === this.min) {
    //     this.min = Math.min(...this.stack);
    // } 

    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // return this.stack[this.stack.length - 1]

    // return this.stack[this.stack.length - 1];

    // return this.stack[this.stack.length - 1];

    return this.stack[this.stack.length - 1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // return Math.min(...this.stack)

    // return this.minList[this.minList.length - 1];

    // return this.min

    return this.stack[this.stack.length - 1].min
};
// 解法一
//  (352 ms)
//  (44.2 MB)

// 解法二
// (120 ms)
//  (44.6 MB)

// 解法三
//  (192 ms)
//  (44.3 MB)

// 解法四
//  (132 ms)
//  (44.3 MB)

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

