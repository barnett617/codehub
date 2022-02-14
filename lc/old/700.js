var searchBST = function(root, val) {
  function helper(root, val) {
    if (!root || root.val === val) return root;
    const next = val < root.val ? root.left : root.right;
    return helper(next, val);
  }
  return helper(root, val);
}

var searchBST2 = function(root, val) {
  const stack = [root];
  while (stack.length) {
    const curr = stack.pop();
    if (!curr) return curr;
    if (curr.val === val) return curr;
    const next = val < curr.val ? curr.left : curr.right;
    stack.push(next);
  }
  return null;
}