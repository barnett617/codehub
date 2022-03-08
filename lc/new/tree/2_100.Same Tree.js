// https://leetcode.com/problems/same-tree/

// 思路：比较当前节点的结构和值，然后递归比较其左右子树
// TIME: O(n)
// SPACE: O(n)

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}