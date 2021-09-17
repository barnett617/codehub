function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
// 1.中序遍历去重后是有序数组
var isValidBST = function(root) {
    var inorder = function(root) {
        if (!root) return []
        return inorder(root.left).concat(root.val, inorder(root.right));
    }
    const inorderList = inorder(root);
    const sortedList = [...new Set(inorderList)].sort((a, b) => a - b);
    var compareList = function(a, b) {
        return a.length === b.length && a.every((v, i) => v === b[i]);
    }
    return compareList(inorderList, sortedList);
}