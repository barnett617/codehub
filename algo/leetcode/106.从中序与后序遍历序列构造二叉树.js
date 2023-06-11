/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length) {
        var last = postorder.pop();
        var index = inorder.indexOf(last);
        var root = new TreeNode(last);
        root.right = buildTree(inorder.slice(index + 1), postorder);
        root.left = buildTree(inorder.slice(0, index), postorder);
        return root;
    }
    return null;
    // 78.69 %
    // 100 %
};
buildTree([9,3,15,20,7], [9,15,7,20,3])
// @lc code=end

