// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// 思路：使用一个结果集记录所以节点的值
// 创建一个帮助函数用于DFS递归调用每个节点
// 对于每个节点的子树进行DFS

// TIME: O(n)
// SPACE: O(n)

function preorder(root) {
    if (!root) return [];
    const res = [];
    function helper(root) {
        if (!root) return;
        res.push(root.val);
        if (root.children) {
            for (const child of root.children) {
                const childVal = helper(child);
                if (childVal) res.push(childVal);
            }
        }
    }
    helper(root);
    return res;
}