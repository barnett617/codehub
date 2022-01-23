/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  let ans = 0;
  function dfs(root) {
    if (!root) return 0;
    const l = dfs(root.left);
    const r = dfs(root.right);
    ans += Math.abs(l) + Math.abs(r);
    return root.val + l + r - 1;
  }
  dfs(root);
  return ans;
};

export default distributeCoins