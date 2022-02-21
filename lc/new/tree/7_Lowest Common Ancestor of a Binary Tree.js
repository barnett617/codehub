// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

// 思路：如果当前节点为空，则递归结束，返回null即可
// 如果当前节点为p或q，同样返回p或q即可
// 如果递归继续，则递归寻找左右子树的最近公共祖先
// 如果左右子树均找到了最近公共祖先，即节点本身，则当前节点即是其最近公共祖先
// 递归结束返回有效节点即可，如果左右子树均为空，则本次递归返回空

function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    const l = lowestCommonAncestor(root.left, p, q);
    const r = lowestCommonAncestor(root.right, p, q);
    if (root === p) return p;
    if (root === q) return q;
    if (l && r) return root;
    return l || r;
}

function lowestCommonAncestor(root, p, q) {
    function helper(root, p, q) {
        if (!root) return null;
        const l = helper(root.left, p, q);
        const r = helper(root.right, p, q);
        if (root === p) return p;
        if (root === q) return q;
        if (l && r) return root;
        return l || r;
    }
    return helper(root, p, q);
}

// 思路：创建帮助函数，并使用标识记录当前遇到的节点的个数
function lowestCommonAncestor(root, p, q) {
    let ans = null;
    helper(root, p, q);
    function helper(root, p, q) {
        if (!root) return false;
        const l = helper(root.left, p, q) ? 1 : 0;
        const r = helper(root.right, p, q) ? 1 : 0;
        const mid = root === p || root === q ? 1 : 0;
        if (l + r + mid >= 2) {
            ans = root;
            return;
        }
        return l + r + mid > 0;
    }
    return ans;
}

// 思路：遍历树并在此过程记录每个节点的父节点，直到找到p的父节点和q的父节点
// 然后依次将p的祖先节点都放到一个集合内，并寻找集合内是否包含q，第一个找到的祖先节点即是二者的最近公共祖先
// 因为祖先记录是深度优先的

function lowestCommonAncestor(root, p, q) {
    const stack = [root];
    const parentMap = new Map();
    parentMap.set(root, null);
    while (!parentMap.has(p) || !parentMap.has(q)) {
        const node = stack.pop();
        if (node.left) {
            stack.push(node.left);
            parentMap.set(node.left, node);
        }
        if (node.right) {
            stack.push(node.right);
            parentMap.set(node.right, node);
        }
    }
    const ancestors = new Set();
    while (p) {
        ancestors.add(p.val);
        p = parentMap.get(p);
    }
    while (!ancestors.has(q.val)) {
        q = parentMap.get(q);
    }
    return q;
}