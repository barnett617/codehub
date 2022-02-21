// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/

// 思路：既然已知每个节点的父节点信息，只需将p节点包含自己在内的所有父节点记录在集合中
// 然后从q本身开始依次寻找第一个在集合内的节点，即是二者的最近公共祖先节点

function lowestCommonAncestor(p, q) {
    const ancestors = new Set();
    while (p) {
        ancestors.add(p.val);
        p = p.parent;
    }
    while (q && !ancestors.has(q.val)) {
        q = q.parent;
    }
    return q;
}