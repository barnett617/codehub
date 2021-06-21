var connect = function(root) {
  if (!root) return root;
  let leftmost = null, curr = null, prev = null;
  leftmost = root;
  while (leftmost) {
    // if here you do not reset prev
    // if will mess the next level's process function
    curr = leftmost;
    leftmost = null;
    while (curr) {
      processChild(curr.left);
      processChild(curr.right);
      curr = curr.next;
    }
  }
  function processChild(child) {
    if (!child) return;
    if (!prev) {
      leftmost = child;
    } else {
      prev.next = child;
    }
    prev = child;
  }
  return root;
}

var connect2 = function(root) {
  if (!root) return root;
  let leftmost, curr, prev;
  leftmost = root;
  while (leftmost) {
    // remember to reset the prev the current level
    prev = null;
    curr = leftmost;
    leftmost = null;
    while (curr) {
      process(curr.left);
      process(curr.right);
      curr = curr.next;
    }
  }
  function process(node) {
    if (!node) return;
    if (!prev) {
      leftmost = node;
    } else {
      prev.next = node;
    }
    prev = node;
  }
  return root;
}