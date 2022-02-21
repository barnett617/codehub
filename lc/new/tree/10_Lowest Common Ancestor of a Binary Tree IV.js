// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/

// 思路：将目标节点的数值存入一个数组
// 创建一个帮助函数用于遍历节点，每次遍历，将左右子树的结果记入一个累计变量
// 如果目标数组包含当前节点的值，则累计变量+1，如果累计变量已经等于目标数组长度，则意味着找到了所有节点的最近公共祖先
function lowestCommonAncestor(root, nodes) {
    let res = null;
    const nodeVals = [];
    for (const node of nodes) {
        nodeVals.push(node.val);
    }
    function helper(root, nodes) {
        if (!root) return 0;
        let count = 0;
        const leftCount = helper(root.left, nodes);
        const rightCount = helper(root.right, nodes);
        count += leftCount;
        count += rightCount;
        if (nodes.includes(root.val)) {
            count += 1;
        }
        if (count === nodes.length && !res) {
            res = root;
            return;
        }
        return count;
    }
    helper(root, nodeVals);
    return res;
}