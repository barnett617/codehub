function Stack() {
    this.value = [];
}
Stack.prototype.push = function(value) {
    this.value.push(value);
}
Stack.prototype.pop = function() {
    const val = this.value.pop();
    return val;
}
Stack.prototype.peek = function() {
    return this.value[this.value.length - 1];
}

module.exports = Stack;

function main() {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(-1);
    s.push('test');
    console.log(s.value);
    console.log(s.peek());   // test
    console.log(s.pop());   // test
    console.log(s.pop());   // -1
    console.log(s.value);
    console.log(s.peek());  // 2
}
// main();