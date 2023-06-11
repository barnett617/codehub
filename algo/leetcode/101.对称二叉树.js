/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 递归法
    // function isMirror(t1, t2) {
    //     if (!t1 && !t2) return true;
    //     if (!t1 || !t2) return false;
    //     return (t1.val === t2.val) && 
    //     isMirror(t1.left, t2.right) && 
    //     isMirror(t1.right, t2.left);
    // }
    // return isMirror(root, root);
    // 34.67 %
    // 100 %

    // 迭代法
    var queue = [root, root];
    while (queue.length) {
        var [l, r] = [queue.shift(), queue.shift()];
        // 如果二者都为 null, 则其父节点无子
        if (!l && !r) continue;
        // 如果其中一个为 null 则已破坏对称，如果都有值则比较值是否相等
        if (!!l !== !!r || l.val !== r.val) return false;
        queue.push(l.left, r.right, l.right, r.left);
    }
    return true;
    // 70.49 %
    // 10 %
};
// @lc code=end

