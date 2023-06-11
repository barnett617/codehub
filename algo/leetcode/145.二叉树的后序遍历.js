/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    // 递归
    // var ans = [];
    // if (root) {
    //     if (root.left) ans = ans.concat(postorderTraversal(root.left));
    //     if (root.right) ans = ans.concat(postorderTraversal(root.right));
    //     if (root.val) ans = ans.concat(root.val);
    // }
    // return ans;

    // 45.58 %
    // 80 %

    // 迭代
    var stack = [], ans = [], cur = root;
    while (cur || stack.length) {
        // 整体顺序是依次将所有左子树入栈、所有右子树入栈
        // 右子树入栈取决于栈顶元素是否有右子树
        // 因为只有当cur有值时才会发生入栈操作
        // 而当栈顶元素存在右子树时会将右子树赋予cur促使右子树的入栈
        while (cur) {
            stack.push(cur);
            // 无论是否当前节点有左子树,都要将当前节点左子树赋值给游标
            // 这样才能造成cur为null,以跳出左子树遍历循环
            cur = cur.left;
        }
        if (stack[stack.length - 1].right) {
            // 因为外层循环条件是当前游标有值或栈不空
            // 所以可以将栈顶元素右子树赋予当前游标,然后将栈顶元素右子树致为null
            // 这里取了栈顶元素右子树,但没发生出栈行为
            cur = stack[stack.length - 1].right;
            // 因为一旦给 cur 手动赋值栈顶右子树后，下一次再走到这里的if判断时需要绕开(否则会进入这里)
            // 所以这里给if的判断条件致为null
            stack[stack.length - 1].right = null;
            // 这里相当于把树拆分开了,把右子树拆了出来
        } else {
            // 走到这里说明当前节点既没左子树
            // (上面的内层循环把所有左子树入栈,当没有左子树可入栈时才继续往下走)
            // 也没右子树
            // 这里是以"左右根"的根身份进入结果集的
            ans.push(stack.pop().val);
        }
    }
    return ans;

    // 99.52 %
    // 86.67 %
};
// @lc code=end

