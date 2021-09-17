function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var inorderTraversal = function(root) {
    if (!root) return [];
    return inorderTraversal(root.left).concat(root.val, inorderTraversal(root.right));
}
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
}