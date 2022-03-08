// https://leetcode.com/problems/sum-of-left-leaves/

// 思路：使用栈遍历每个节点，判断当前节点的左子树是否为叶子，如果是则累加结果

// TIME: O(n)
// SPACE: O(n)

function sumOfLeftLeaves(root) {
    if (!root) return 0;
    const stack = [root];
    let res = 0;
    while (stack.length) {
        const cur = stack.pop();
        if (isLeaf(cur.left)) {
            res += cur.left.val;
        }
        if (cur.right) stack.push(cur.right);
        if (cur.left) stack.push(cur.left);
    }
    function isLeaf(root) {
        return root && !root.left && !root.right;
    }
    return res;
}