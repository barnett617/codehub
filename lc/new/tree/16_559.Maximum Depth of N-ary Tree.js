// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// 思路：对于根节点为空或子节点为空的情况进行返回，然后遍历所有子节点，计算最大者，与当前根节点相加返回

// TIME: O(n)
// SPACE: O(n)

function maxDepth(root) {
    if (!root) return 0;
    if (!root.children) return 1;

    let cur = 1;
    let maxChild = 0;
    for (const child of root.children) {
        maxChild = Math.max(maxChild, maxDepth(child));
    }
    return cur + maxChild;
}
