var bfs = function(graph, start, end) {
    const queue = [];
    queue.add([start]);
    const seen = new Set();

    var processNode = function (curLevel) {
        curLevel.forEach(node => {
            if (!seen.has(node)) {
                seen.add(node);
            }
        })
    }

    var gen_related_nodes = function (curLevel) {
        return curLevel.map(node => node.children})
    }

    while (queue.length) {
        const curLevel = queue.shift();
        processNode(curLevel);
        const childrenList = gen_related_nodes(curLevel);
        queue.push(childrenList);
    }

    return [...seen];
}