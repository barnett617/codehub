var dfs_iterate = function(root) {
    if (!root) return [];
    const seen = new Set();
    const stack = [root];
    var processNode = function(node) {
        // todo
    }
    var gen_related_nodes = function(node) {
        // todo
    }
    while (stack.length) {
        const node = stack.pop();
        seen.add(node);
        processNode(node);
        const nodes = gen_related_nodes(node);
        stack.push(nodes);
    }
    return [...seen];
}