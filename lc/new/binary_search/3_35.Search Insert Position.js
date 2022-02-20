// https://leetcode.com/problems/search-insert-position/submissions/

// 思路：左边界从0开始，右边界从数组末尾开始
// 当左边界与右边界相遇，则说明找到了该插入的位置，前提是插入在左边界右侧
// 计算中点，如果中点等于目标，则直接返回中点位置
// 如果中点大于目标值，则以中点作为有边界继续寻找
// 如果中点小于目标值，则将左边界缩小一位，用于作为可能插入新元素的位置

// TIME: O(logn)
// SPACE: O(1)

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}