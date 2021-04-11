function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var preorderTraversal = function(root) {
    if (!root) return [];
    return [root.val].concat(preorderTraversal(root.left), preorderTraversal(root.right));
}

var preorderTraversal2 = function(root) {
    const res = [];
    const stack = [root];
    while (stack.length) {
        let cur = stack.pop();
        if (cur) {
            res.push(cur.val);
            if (cur.right) stack.push(cur.right);
            if (cur.left) stack.push(cur.left);
        }
    }
    return res;
}