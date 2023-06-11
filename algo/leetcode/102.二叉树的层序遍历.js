/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 参考解法一
    // var ans = [], level = 0;
    // traverse();
    // return ans;

    // function traverse (root, level) {
    //     if (!root) return null;
    //     // 每一个新的层级初始化数组容器
    //     if (level >= ans.length) {
    //         ans[level] = [];
    //     }
    //     // 如果该层级的数组容器已经建立,则无需初始化,直接继续添加
    //     ans[level].push(root.val);
    //     traverse(root.left, level + 1);
    //     traverse(root.right, level + 1);
    // }

    // 我对解法一的改进
    var ans = [], level = 0;
    if (root) traverse(root, level);
    return ans;
    function traverse(root, level) {
        if (!ans[level]) ans[level] = [];
        ans[level].push(root.val);
        if (root.left) traverse(root.left, level + 1);
        if (root.right) traverse(root.right, level + 1);
    }
    // 84.65 %
    // 83.33 %
};
// @lc code=end

