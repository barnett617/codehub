// https://leetcode.com/problems/invert-binary-tree/

// 思路：对于空节点直接进行返回原节点
// 否则交换左右子树，然后递归对左右子树进行反转

function invertTree(root) {
    if (!root) return root;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
}