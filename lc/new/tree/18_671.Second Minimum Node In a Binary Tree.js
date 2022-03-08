// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

// 思路：将每个节点值放入集合
// 然后初始化最小值为根节点，次小值为无穷大
// 比较集合中的每个数，当遇到次小值则更新次小值

// TIME: O(n)
// SPACE: O(n)

function findSecondMinimumValue(root) {
    const set = new Set();
    function dfs(root) {
        if (!root) return;
        set.add(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    let firstMin = root.val;
    let secondMin = Infinity;
    for (const val of set) {
        if (val > firstMin && val < secondMin) {
            secondMin = val;
        }
    }
    return secondMin === Infinity ? -1 : secondMin;
}

// TIME: O(n)
// SPACE: O(n)

function findSecondMinimumValue(root) {
    let firstMin = root.val;
    let secondMin = Infinity;
    function dfs(root) {
        if (!root) return;
        if (root.val > firstMin && root.val < secondMin) {
            secondMin = root.val;
            return;
        } else if (root.val === firstMin) {
            dfs(root.left);
            dfs(root.right);
        }
    }
    dfs(root);
    return secondMin === Infinity ? -1 : secondMin;
}