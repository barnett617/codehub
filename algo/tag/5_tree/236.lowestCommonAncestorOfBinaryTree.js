function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// 1.递归
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (root.val === p.val || root.val === q.val) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) {
        if (right) {
            return right
        }
    } else {
        if (!right) {
            return left;
        } else {
            return root;
        }
    }
}