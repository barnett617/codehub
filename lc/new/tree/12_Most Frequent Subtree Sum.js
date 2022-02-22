// https://leetcode.com/problems/most-frequent-subtree-sum/

// 思路：使用一个map记录所有和出现的次数
// 然后找到map的值中最大的值所对应的所有键

// TIME: O(n)
// SPACE: O(n)

function findFrequentTreeSum(root) {
    let res = [];

    const map = new Map();
    function helper(root) {
        if (!root) return 0;
        const l = helper(root.left);
        const r = helper(root.right);
        const sum = root.val + l + r;
        const existCount = map.get(sum) || 0;
        map.set(sum, existCount + 1);
        return sum;
    }
    helper(root);

    const maxCount = Math.max(...map.values());
    for (const item of map) {
        if (item[1] === maxCount) {
            res.push(item[0]);
        }
    }

    return res;
}