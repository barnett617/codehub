// https://leetcode.com/problems/binary-tree-level-order-traversal/

// 思路：使用递归，带入层级变量，在每层创建容器，将每层元素放入容器
// 并在下一次递归中更新层级索引

function levelOrder(root) {
    const res = [];
    if (!root) return res;

    function helper(node, level) {
        if (!res[level]) {
            res[level] = [];
        }
        res[level].push(node.val);
        if (node.left) {
            helper(node.left, level + 1);
        }
        if (node.right) {
            helper(node.right, level + 1);
        }
    }
    helper(root, 0);

    return res;
}

// 思路：尾递归，将结果集带入递归进行更新
function levelOrder(root) {
    const res = [];
    if (!root) return res;

    function helper(node, level, res) {
        if (!res[level]) res[level] = [];
        res[level].push(node.val);
        if (node.left) helper(node.left, level + 1, res);
        if (node.right) helper(node.right, level + 1, res);
    }
    helper(root, 0, res);

    return res;
}

// 思路：使用队列遍历树节点，记录每层元素节点树，依次将每个元素记录在当前层容器，再继续遍历下一层
function levelOrder(root) {
    const res = [];
    if (!root) return res;

    const queue = [root];
    let level = 0;
    while (queue.length) {
        res[level] = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            res[level].push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level++;
    }

    return res;
}