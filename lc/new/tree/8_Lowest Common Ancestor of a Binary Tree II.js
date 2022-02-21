// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/

// 思路：检查节点的同时记录节点是否存在
// 如果节点均存在，则返回最近公共祖先，否则返回空

function lowestCommonAncestor(root, p, q) {
    let pFound = false;
    let qFound = false;
    const lca = helper(root, p, q);
    if (pFound && qFound) return lca;
    return null;

    function helper(root, p, q) {
        if (!root) return null;
        const l = helper(root.left, p, q);
        const r = helper(root.right, p, q);
        if (root === p) {
            pFound = true;
            return p;
        }
        if (root === q) {
            qFound = true;
            return q;
        }
        if (l && r) return root;
        return l || r;
    }
}