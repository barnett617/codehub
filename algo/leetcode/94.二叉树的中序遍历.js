/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    // 递归
    // var ans = [];
    // if (root) {
    //     if (root.left) {
    //         ans = ans.concat(inorderTraversal(root.left));
    //     }
    //     if (root.val) {
    //         ans = ans.concat(root.val);
    //     }
    //     if (root.right) {
    //         ans = ans.concat(inorderTraversal(root.right));
    //     }
    // }
    // return ans;
    // 85.85 %
    // 93.33 %

    // 迭代
    var ans = [];
    var stack = [];
    var cur = root;
    // cur条件是为了启动循环，因为初始时栈为空
    while (cur || stack.length) {
        // 所有左子树依次入栈（根->左->根->左……直到没有左子树了，根就可以出栈了）
        while (cur) {
            // 只有这里有入栈操作，就是判断当前子树是否有左子树
            stack.push(cur);
            cur = cur.left;
        }
        // 出栈的是无左子树的节点,因为没有左子树入栈才会走到这里
        cur = stack.pop();
        ans.push(cur.val);
        // 没有左子树，并且根被记录后右子树入栈（整棵树的右子树——整体左根右）
        cur = cur.right;
    }
    return ans;

    // 7.97 %
    // 93.33 %

    // 内层循环在判断左子树的存在
    // 外层循环在判断右子树的存在
    // 根是否出栈取决于节点是否还有左子树，因为顺序为左根右
    // 当节点没有左子树时可以出栈根
    // 当无右子树,但栈未空时,是当前节点处理完毕,向父节点前进
};
// @lc code=end

