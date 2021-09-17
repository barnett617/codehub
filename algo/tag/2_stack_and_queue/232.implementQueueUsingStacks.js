function MyStack() {
    this.value = [];
}
MyStack.prototype.push = function(val) {
    this.value.push(val);
}
MyStack.prototype.pop = function() {
    return this.value.pop();
}
MyStack.prototype.peek = function() {
    return this.value[this.value.length - 1];
}
MyStack.prototype.isEmpty = function() {
    return this.value.length === 0;
}

var MyQueue = function() { 
    this.stackForIn = new MyStack();
    this.stackForOut = new MyStack();
    this.front;
}
MyQueue.prototype.offer = function(val) {
    if (this.stackForIn.isEmpty()) this.front = val;
    this.stackForIn.push(val);
}
MyQueue.prototype.poll = function() {
    if (this.stackForOut.isEmpty()) {
        while (!this.stackForIn.isEmpty()) {
            this.stackForOut.push(this.stackForIn.pop());
        }
        return this.stackForOut.pop();
    } else {
        return this.stackForOut.pop();
    }
}
MyQueue.prototype.peek = function() {
    if (this.stackForOut.isEmpty()) {
        if (this.stackForIn.isEmpty()) {
            this.front = undefined;
        }
        return this.front
    } else {
        return this.stackForOut.peek();
    }
}
MyQueue.prototype.isEmpty = function() {
    return this.stackForIn.isEmpty() && this.stackForOut.isEmpty();
}

const q = new MyQueue();
q.offer(1);
q.offer('test');
q.offer(-1);
console.log(1, q.peek());  // 1
console.log(2, q.poll());  // 1
console.log(3, q.peek());  // test
q.offer(5);
q.offer('hello');
console.log(4, q.peek());  // test
console.log(5, q.poll());  // test
console.log(6, q.poll());  // -1
console.log(7, q.poll());  // 5
console.log(8, q.poll());  // hello
console.log(9, q.peek());  // undefined
