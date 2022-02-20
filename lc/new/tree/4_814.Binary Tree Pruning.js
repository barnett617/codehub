// https://leetcode.com/problems/binary-tree-pruning/
// 思路：递归遍历左右子树是否包含节点1，如果某个子树不符合条件，则需要进行剪枝
// TIME: O(n)
// SPACE: O(n)

function pruntTree(root) {
    return containsOne(root) ? root : null;
    function containsOne(node) {
        if (!node) return false;

        const leftContainsOne = containsOne(node.left);
        const rightContainsOne = containsOne(node.right);

        if (!leftContainsOne) node.left = null;
        if (!rightContainsOne) node.right = null;

        return node.val === 1 || leftContainsOne || rightContainsOne;
    }
}