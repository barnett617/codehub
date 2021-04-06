const Stack = require('./stack');
function Queue() {
    this.stackForIn = new Stack();
    this.stackForOut = new Stack();
}
Queue.prototype.offer = function(value) {
    this.stackForIn.push(value);
}
Queue.prototype.roll = function() {
    let outVal;
    if (this.stackForOut.value.length === 0) {
        const inValue = this.stackForIn.value;
        while (inValue.length > 0) {
            this.stackForOut.push(this.stackForIn.pop());
        }
        outVal = this.stackForOut.pop();
    } else {
        outVal = this.stackForOut.pop();
    }
    return outVal;
}
Queue.prototype.values = function() {
    return this.stackForIn.value;
}
function main() {
    const q = new Queue();
    q.offer(1);
    q.offer(3);
    q.offer(-1);
    q.offer('test');
    console.log(q.roll());
    console.log(q.roll());
    q.offer('2');
    console.log(q.roll());
    console.log(q.roll());
    console.log(q.roll());
    console.log(q.roll());
}
main();