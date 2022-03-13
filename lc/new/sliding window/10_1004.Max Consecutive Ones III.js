// https://leetcode.com/problems/max-consecutive-ones-iii/

// 思路：将元素和不断累加，当元素和与元素数量相差小于k时，
// 可以不断计算最长子串长度，否则需要从左侧删除元素直至差值小于k

function longestOnes(nums, k) {
    let res = 0;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        if (sum + k >= right - left + 1) {
            res = Math.max(res, right - left + 1);
        }
        if (sum + k < right - left + 1) {
            sum -= nums[left];
            left++;
        }
    }
    return res;
}