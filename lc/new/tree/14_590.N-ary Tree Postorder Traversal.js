// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

// 思路：创建一个数组用于记录所有节点的值
// 使用DFS遍历每个节点的子树，将子树的值先放入结果集，再放入当前节点的值

// TIME: O(n)
// SPACE: O(n)

function postorder(root) {
    if (!root) return [];
    const res = [];
    function helper(root) {
        if (!root) return;
        if (!root.children) res.push(root.val);
        else {
            for (const child of root.children) {
                const childVal = helper(child);
                if (childVal) res.push(childVal);
            }
            res.push(root.val);
        }
    }
    helper(root);
    return res;
}