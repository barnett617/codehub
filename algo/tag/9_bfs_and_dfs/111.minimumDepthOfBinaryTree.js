var minDepth = function(root) {
    if (!root) return 0;
    let res = 0;
    const queue = [[root]];
    while (queue.length) {
        const curLevel = queue.shift();
        res++;
        const children = [];
        for (let node of curLevel) {
            if (!node.left && !node.right) {
                return res;
            }
            if (node.left) {
                children.push(node.left);
            }
            if (node.right) {
                children.push(node.right);
            }
        }
        if (children.length) queue.push(children);
    }
    return res;
}

var minDepth2 = function(root) {
    if (!root) return 0;
    let res = 0;
    var helper = function(root, level) {
        if (!root.left && !root.right) {
            if (!res) {
                res = level;
            } else {
                res = Math.min(res, level);
            }
        } else {
            if (root.left) {
                helper(root.left, level + 1);
            }
            if (root.right) {
                helper(root.right, level + 1);
            }
        }
    }
    helper(root, 1);
    return res;
}