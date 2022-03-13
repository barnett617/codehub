// https://leetcode.com/problems/maximum-average-subarray-i/

// 思路：左右指针都从0开始，不断计算多个数之和，
// 当窗口大小到达限制长度后开始计算平均数，并不断缩小左边界，扩大有边界

// TIME: O(n)
// SPACE: O(1)

function findMaxAverage(nums, k) {
    let res = -Infinity;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        if (right - left + 1 === k) {
            res = Math.max(res, sum / k);
            sum -= nums[left];
            left++;
        }
    }
    return res;
}