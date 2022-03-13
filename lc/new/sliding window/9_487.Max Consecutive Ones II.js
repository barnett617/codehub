// https://leetcode.com/problems/max-consecutive-ones-ii/

// 思路：不断计算数的总和，如果总和小于元素个数-1，
// 则说明出现多于1个0，则需要右移左边界，直至0的个数少于2个为止

function findMaxConsecutiveOnes(nums) {
    let res = 0;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        if (sum + 1 >= right - left + 1) {
            res = Math.max(res, right - left + 1);
        }
        while (sum + 1 < right - left + 1) {
            sum -= nums[left];
            left++;
        }
    }
    return res;
}