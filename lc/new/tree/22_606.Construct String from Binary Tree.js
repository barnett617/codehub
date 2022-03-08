// https://leetcode.com/problems/construct-string-from-binary-tree/

// 思路：对于空节点，返回空串
// 对于无子节点的情况，返回值为节点值的字符串
// 对于有左子树，无右子树的情况，只需要递归左子树，并进行当前节点的字符拼接，右子树可以忽略
// 只要右子树存在，左子树为空也需要包裹括号，所以和左右子树均存在的处理一致，即都需要进行将当前值和子树进行连接，并对子树包裹括号

// TIME: O(n)
// SPACE: O(n)

function tree2str(root) {
    if (!root) return '';
    if (!root.left && !root.right) return '' + root.val;
    if (!root.right) return '' + root.val + '(' + tree2str(root.left) + ')';
    return '' + root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')';
}