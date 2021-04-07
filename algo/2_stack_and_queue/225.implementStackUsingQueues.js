function MyQueue() {
    this.value = [];
}
MyQueue.prototype.offer = function(val) {
    this.value.unshift(val);
    // this.value.push(val);
}
MyQueue.prototype.poll = function() {
    return this.value.pop();
    // return this.value.shift();
}
MyQueue.prototype.isEmpty = function() {
    return this.value.length === 0;
}
MyQueue.prototype.peek = function() {
    return this.value[this.value.length - 1];
}

var MyStack = function() {
    this.q1 = new MyQueue();
    this.q2 = new MyQueue();
    this.front = null;
}
MyStack.prototype.push = function(val) {
    // 当未发生出栈时，新插入的元素就是栈顶
    this.front = val;
    this.q1.offer(val);
}
MyStack.prototype.pop = function() {
    let popVal = null;
    let q1 = this.q1;
    let q2 = this.q2;
    if (!q1.isEmpty()) {
        while (q1.value.length > 1) {
            let out = q1.poll();
            if (q1.value.length === 1) this.front = out;
            q2.offer(out);
        }
        popVal = q1.poll();
    } else if (!q2.isEmpty()) {
        while (q2.value.length > 1) {
            let out = q2.poll();
            if (q2.value.length === 1) this.front = out;
            q1.offer(out);
        }
        popVal = q2.poll();
    }
    return popVal;
}
MyStack.prototype.isEmpty = function() {
    return this.q1.isEmpty() && this.q2.isEmpty();
}
MyStack.prototype.peek = function() {
    if (this.isEmpty()) return null;
    return this.front;
}

// function main() {
//     let s = new MyStack();
//     s.push(1);
//     s.push(2);
//     console.log(1, s.peek());
//     console.log(2, s.pop());
//     console.log(3, s.isEmpty());
// }
// main();

var MyQueue2 = function() {
    this.value = [];
}
MyQueue2.prototype.offer = function (val) {
    this.value.push(val);
}
MyQueue2.prototype.poll = function() {
    return this.value.shift();
}
MyQueue2.prototype.peek = function() {
    return this.value[0];
}
MyQueue2.prototype.isEmpty = function() {
    return this.value.length === 0;
}

var MyStack2 = function() {
    this.q = new MyQueue2();
}
MyStack2.prototype.push = function(val) {
    this.q.offer(val);
    let size = this.q.value.length;
    // 循环遍历队列，将新元素置顶
    while (size-- > 1) {
        this.q.offer(this.q.poll());
    }
}
MyStack2.prototype.pop = function() {
    return this.q.poll();
}
MyStack2.prototype.peek = function() {
    return this.q.peek();
}
MyStack2.prototype.isEmpty = function() {
    return this.q.isEmpty();
}

function main2() {
    let s = new MyStack2();
    s.push(1);
    s.push(2);
    console.log(1, s.peek());
    console.log(2, s.pop());
    console.log(3, s.isEmpty());
}

main2();
