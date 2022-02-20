// https://leetcode.com/problems/binary-tree-inorder-traversal/
// 思路：递归-创建帮助函数，并将左子树结果合并上当前节点值，再合并右子树值
// TIME: O(n)
// SPACE: O(n)
function inorderTraversal(root) {
    function helper(root) {
        if (!root) return [];
        return helper(root.left).concat(root.val, helper(root.right));
    }
    return helper(root);
}

// 思路：尾递归-将结果集不断传入每层递归，每层存储当前节点值
// TIME: O(n)
// SPACE: O(n)
function inorderTraversal(root) {
    const res = []
    function helper(root, res) {
        if (!root) return;
        helper(root.left, res);
        res.push(root.val);
        helper(root.right, res);
    }
    helper(root, res);
    return res;
}

// 思路：使用栈模拟尾递归过程
// 将当前树的根节点作为第一个执行节点，如果节点不为空则放入执行栈，并继续判断其左子树是否存在
// 当无更多左子树入栈后，取出栈顶元素进行结果集更新，该节点即为第一个左叶子节点
// 然后将当前节点更新为右子树，查看右子树是否存在左子树，如果不存在，则会将栈顶元素出栈进行结果集更新，此时出栈的必然是上一个父节点
function inorderTraversal(root) {
    const res = []
    const stack = [];
    let curNode;
    curNode = root;
    while (curNode || stack.length) {
        while (curNode) {
            stack.push(curNode);
            curNode = curNode.left;
        }
        curNode = stack.pop();
        res.push(curNode.val);
        curNode = curNode.right;
    }
    return res;
}