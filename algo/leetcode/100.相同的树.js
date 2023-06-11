/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 原理待解析
    // 参考解法
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    }
    function stringIt(t) {
        let queue = [t];
        let s = '';
        while(queue.length) {
            let n = queue.shift();
            if (n === null) {
                s += n;
            } else {
                s += n.val;
                queue.push(n.left);
                queue.push(n.right);
            }
        }
        return s;
    }
    return stringIt(p) === stringIt(q);
};
// @lc code=end

