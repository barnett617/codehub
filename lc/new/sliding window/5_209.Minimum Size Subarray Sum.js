// https://leetcode.com/problems/minimum-size-subarray-sum/

// 思路：累加元素和，当元素和大于等于目标数时，试图删减左边界元素
// 如果删减后仍满足则持续删减，直至不满足为止

function minSubArrayLen(target, nums) {
    let res = Infinity;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            res = Math.min(res, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return res === Infinity ? 0 : res;
}