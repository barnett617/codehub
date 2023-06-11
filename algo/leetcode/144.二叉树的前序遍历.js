/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // 递归法
    // var ans = [];
    // if (root && root.val) {
    //     // 先根
    //     ans.push(root.val);
    //     // 再左再右
    //     // 但左和右不是互斥（if-else）的关系，而是都要遍历，只是先左后右而已
    //     if (root.left) {
    //         // 需要把子树返回的结果和当前的根拼接起来返回给上一级
    //         ans = ans.concat(preorderTraversal(root.left));
    //     } 
    //     if (root.right) {
    //         ans = ans.concat(preorderTraversal(root.right));
    //     } 
    // }
    // return ans;

    // 69.68 %
    // 83.33 %

    // 迭代法
    var stack = [];
    var ans = [];
    if (root && root.val) {
        stack.push(root);
        // 利用栈临时存取元素
        while (stack.length > 0) {
            // 从栈顶取出当前元素
            var cur = stack.pop();
            if (cur !== null) {
                ans.push(cur.val);
                // 栈先进后出，所以先放右子树
                if (cur.right) stack.push(cur.right);
                if (cur.left) stack.push(cur.left);
            }
        }
    }
    return ans;

    // 69.81 %
    // 100 %
};
// @lc code=end

