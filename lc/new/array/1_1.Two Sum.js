// https://leetcode.com/problems/two-sum/

// 思路：遍历每个元素，计算目标值和当前值的差值，如果差值存在于map，则说明出现过能与当前值相加等于目标值的组合
// 在没有遇到目标组合前，可以在每次遍历后，将当前数存入map

// TIME: O(n)
// SPACE: O(n)

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return [];
}