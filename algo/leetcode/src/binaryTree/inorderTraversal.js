function inorderTraversal(root) {
    var ans = []
    function helper(root) {
        if (root) {
            // 当还有左子树时，则不到该入结果栈的时候
            // 递归遍历左子树
            if (root.left) {
                helper(root.left)
            }
            // 直到没有左子树，则根入结果栈
            ans.push(root.val)
            // 然后对右子树重复上面操作
            if (root.right) {
                helper(root.right)
            }
        }
    }
    helper(root)
    return ans

    var ans = []
    var stack = []
    var cur = root
    // 循环条件是当前节点不为空或栈不空
    while(cur || stack.length) {
        // 当节点不为空，则需要遍历其左子树
        // 直至节点为空，则意味着上一个节点没有左子树
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        // 则节点出栈，进行结果栈入栈（没有左子树的根节点值）
        cur = stack.pop()
        ans.push(cur.val)
        // 然后对右子树重复上述操作
        cur = cur.right
    }
    return ans
}