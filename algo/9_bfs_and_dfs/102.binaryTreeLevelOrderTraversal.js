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