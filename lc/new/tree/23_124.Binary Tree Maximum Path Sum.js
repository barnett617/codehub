// https://leetcode.com/problems/binary-tree-maximum-path-sum/

// 思路：递归每个节点，将左右子树路径和更大的与当前节点相加返回，因为路径只能选择一条去走
// 途中如果以某个节点为开始的路径，加上其两个子树的路径和比全局记录的路径和更大，则可以更新全局最大值

// TIME: O(n)
// SPACE: O(h)

function maxPathSum(root) {
    let max = root.val;
    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left);
        left = Math.max(left, 0);
        let right = dfs(root.right);
        right = Math.max(right, 0);
        if (root.val + left + right > max) {
            max = root.val + left + right;
        }
        return root.val + Math.max(left, right);
    }
    dfs(root);
    return max;
}