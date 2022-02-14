var lowestCommonAncestor = function(root, p, q) {
  const stack = [root];
  let parent = {};
  parent[root.val] = null;
  while (!parent[p.val] || !parent[q.val]) {
    const node = stack.pop();
    if (node.left) {
      parent[node.left.val] = node;
      stack.push(node.left);
    }
    if (node.right) {
      parent[node.right.val] = node;
      stack.push(node.right);
    }
  }
  const ancestors = new Set();
  while (p) {
    ancestors.add(p);
    p = parent[p.val];
  }
  while (!ancestors.has(q)) {
    q = parent[q.val];
  }
  return q;
}

var lowestCommonAncestor2 = function(root, p, q) {
  if (!root) return root;
  const stack = [root];
  const map = {};
  map[root.val] = null;
  while ( !map.hasOwnProperty(p.val) || !map.hasOwnProperty(q.val) ) {
    const node = stack.pop();
    if (node.left) {
      map[node.left.val] = node;
      stack.push(node.left);
    }
    if (node.right) {
      map[node.right.val] = node;
      stack.push(node.right);
    }
  }
  const ancestors = new Set();
  while (p) {
    ancestors.add(p);
    p = map[p.val];
  }
  while (!ancestors.has(q)) {
    q = map[q.val];
  }
  return q;
}