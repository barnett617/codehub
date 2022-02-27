// https://leetcode.com/problems/maximum-product-subarray/

// 思路：由于存在负数元素，所以要不断记录截止目前位置的最大值和最小值
// 注意计算最小值时需要使用最大值，所以在计算最大值后不要立刻覆盖最大值
// 由于要计算子串的累乘和，所以每次计算至少要包含当前元素

// TIME: O(n)
// SPACE: O(1)

function maxProduct(nums) {
    let res = nums[0];
    let max = nums[0];
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let tempMax = Math.max(nums[i] * max, nums[i] * min, nums[i]);
        min = Math.min(nums[i] * max, nums[i] * min, nums[i]);
        max = tempMax;
        res = Math.max(res, max);
    }
    return res;
}