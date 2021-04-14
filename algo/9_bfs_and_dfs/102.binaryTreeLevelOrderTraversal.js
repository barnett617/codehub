var levelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [[root]];
    while (queue.length) {
        const curLevel = queue.shift();
        res.push(curLevel.map(node => node.val));
        const children = [];
        curLevel.forEach(node => {
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
        })
        if (children.length) queue.push(children);
    }
    return res;
}

var levelOrder2 = function(root) {
    const res = [];
    if (!root) return res;
    var helper = function(root, level) {
        if (res[level]) {
            res[level].push(root.val);
        } else {
            res[level] = [root.val];
        }
        if (root.left) {
            helper(root.left, level + 1);
        }
        if (root.right) {
            helper(root.right, level + 1);
        }
    }
    helper(root, 0);
    return res;
}