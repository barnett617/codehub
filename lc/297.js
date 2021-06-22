function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function(root) {
  if (!root) return 'null,';
  function helper(root, str) {
    let res = '';
    if (!root) {
      res += 'null,';
    } else {
      res += root.val + ',';
      res += helper(root.left, str);
      res += helper(root.right, str);
    }
    return res;
  }
  return helper(root, '');
}

var deserialize = function(data) {
  const list = data.split(',');
  function gen(l) {
    if (l[0] === 'null') {
      l.shift();
      return null;
    } else {
      const node = new TreeNode(l[0]);
      l.shift();
      node.left = gen(l);
      node.right = gen(l);
      return node;
    }
  }
  const root = gen(list);
  return root;
}