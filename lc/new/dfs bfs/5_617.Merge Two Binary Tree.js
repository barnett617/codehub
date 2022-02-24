// https://leetcode.com/problems/merge-two-binary-trees/
// 思路：使用递归重复操作树节点
// 递归的开始声明终止条件，即根节点为空的情况
// 然后执行主逻辑，即更新树节点数值
// 最后返回树节点

// TIME: O(n)
// SPACE: O(n)

function mergeTrees(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
}