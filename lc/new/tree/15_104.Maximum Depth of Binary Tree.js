// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// 思路：使用递归计算左右子树的高度并取最大者，再加上当前根节点高度进行返回

// TIME: O(n)
// SPACE: O(n)

function maxDepth(root) {
    if (!root) return 0;
    let res = 1;
    let child = Math.max(maxDepth(root.left), maxDepth(root.right));
    return res + child;
}