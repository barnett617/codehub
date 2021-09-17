function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var postorderTraversal = function(root) {
    if (!root) return [];
    return postorderTraversal(root.left).concat(postorderTraversal(root.right), root.val);
}

var postorderTraversal2 = function(root) {
    const res = [];
    const stack = [root];
    while (stack.length) {
        let cur = stack.pop();
        if (cur) {
            res.unshift(cur.val);
            if (cur.left) stack.push(cur.left);
            if (cur.right) stack.push(cur.right);
        }
    }
    return res;
}