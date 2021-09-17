var maxDepth = function(root) {
    if (!root) return 0;
    var helper = function(root, level) {
        if (!root) return level;
        const l = helper(root.left, level + 1);
        const r = helper(root.right, level + 1);
        return Math.max(l, r);
    }
    return helper(root, 0);
}

var maxDepth1 = function(root) {
    if (!root) return 0;
    let res = 0;
    const queue = [[root]];
    while (queue.length) {
        const curLevel = queue.shift();
        res++;
        const children = [];
        curLevel.forEach(node => {
            if (node.left) {
                children.push(node.left);
            }
            if (node.right) {
                children.push(node.right);
            }
        })
        if (children.length) queue.push(children);
    }
    return res;
}