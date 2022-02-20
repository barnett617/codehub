// https://leetcode.com/problems/path-sum/

// 思路：递归计算每一层的累加和是否等于目标值
// 每一层如果当前节点非空，则将目标值减去当前节点值，如果当前节点已经是叶子节点，则可以进行判断当前目标值是否已经减到0
// 否则继续判断左右子树是否存在有效结果

function hasPathSum(root, targetSum) {
    if (!root) return false;

    targetSum = targetSum - root.val;
    if (!root.left && !root.right) return targetSum === 0;
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

// 思路：创建帮助函数，在每层进行判断，如果是空节点，则一定不满足
// 如果是叶子节点，则计算当前累加和加上当前节点的值是否满足目标值
// 否则继续查找左右子树，并且将下一次的累加和更新为加上当前节点后的值
function hasPathSum(root, targetSum) {
    if (!root) return false;
    function helper(root, targetSum, curSum) {
        if (!root) return false;
        if (!root.left && !root.right) return targetSum === curSum + root.val;
        return helper(root.left, targetSum, curSum + root.val)
        || helper(root.right, targetSum, curSum + root.val);
    }
    return helper(root, targetSum, 0);
}