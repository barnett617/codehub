var dfs = function(node) {
    var helper = function (node, seen) {
        seen.add(node);
        for (const child of node.children) {
            if (!seen.has(child)) {
                helper(child, seen);
            }
        }
    }
    const seen = new Set();
    helper(node, seen);
    return [...seen];
}