// https://leetcode.com/problems/binary-search/

// 思路：由于是有序序列，当左边界未大于有边界时，
// 不断计算中点，观察元素比中点大还是比中点小，每轮缩小一半搜索范围

// TIME: O(logn)
// SPACE: O(1)
function search(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}