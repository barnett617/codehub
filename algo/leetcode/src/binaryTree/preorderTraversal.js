function preorderTraverval(root) {
    if (!root) return []
    return [root.val].concat(preorderTraversal(root.left), preorderTraversal(root.right))

    var ans = []
    var stack = [root]
    while (stack.length) {
        var cur = stack.pop()
        if (cur) {
            ans.push(cur.val)
            if (cur.right) {
                stack.push(cur.right)
            }
            if (cur.left) {
                stack.push(cur.left)
            }
        }
    }
}