/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    // 参考解法——递归
    // 自底向上
    // if (!root) return 0;
    // 这里优化了一次比较
    // if (!root.left && !root.right) return 1;
    // 这个 +1 就意味着自底向上，因为最底部为 1，向上的过程依次 +1
    // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    // 87.57 %
    // 91.67 %

    // 自底向上
    // if (!root) return 0;
    // var left = maxDepth(root.left);
    // var right = maxDepth(root.right);
    // return Math.max(left, right) + 1;

    
    // 自顶向下
    var ans = 0;
    top_down(root, 1);
    function top_down(root, level) {
        if (!root) return;
        // 每当到达无子节点时更新最大深度
        if (!root.left && !root.right) ans = Math.max(ans, level);
        // 这里意味着自顶向下，以 level为1作为起点，依次向下过程中 +1
        top_down(root.left, level + 1);
        top_down(root.right, level + 1);
    }
    return ans;
    // 59.05 %
    // 91.67 %
};
// @lc code=end

