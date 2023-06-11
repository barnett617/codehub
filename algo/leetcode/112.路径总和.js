/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // 递归
    // if (!root) return false;
    // if (!root.left && !root.right) return root.val === sum;
    // return hasPathSum(root.left, sum - root.val) || 
    // hasPathSum(root.right, sum - root.val);
    // 70.95 %
    // 85.71 %

    // 迭代
    if (!root) return false;
    var queue = [root];
    while(queue.length) {
        var cur = queue.shift();
        if (!cur.left && !cur.right && cur.val === sum) return true;
        if (cur.left) {
            cur.left.val += cur.val;
            queue.push(cur.left);
        }
        if (cur.right) {
            cur.right.val += cur.val;
            queue.push(cur.right);
        }
    }
    return false;
    // 15.69 %
    // 100 %
};
// @lc code=end

