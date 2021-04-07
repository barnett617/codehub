var TreeNode = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var PriorityQueue = function() {
    this.root = new TreeNode(0);
}
PriorityQueue.prototype.size = function() {
    let root = this.root;
    let size = 0;
    var helper = function(root) {
        if (!root) return;
        size++;
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return size;
}
PriorityQueue.prototype.poll = function() {
    // remove the top(minimum value) of heap
}
PriorityQueue.prototype.offer = function(val) {
    // add val to heap and refact the whole heap
}
PriorityQueue.prototype.peek = function() {
    // return the minimum number(top on heap)
    return this.root.val;
}

var KthLargest = function(k, nums) {
    this.queue = new PriorityQueue();
    this.k = k;
    for (let num of nums) {
        this.add(num);
    }
}
KthLargest.prototype.add = function(val) {
    if (this.queue.size() < this.k) {
        this.queue.offer(val);
    } else if (val > this.peek()) {
        this.queue.poll();
        this.queue.offer(val);
    }
    return this.queue.peek();
}

function main() {
    let l = new KthLargest(3, [1, 2, 3]);
    console.log(l.add(2));
    console.log(l.add(1));
    console.log(l.add(3));
    console.log(l.add(4));
}
main();