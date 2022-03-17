// https://leetcode.com/problems/remove-element/

// 思路：使用左右指针，左指针记录上一个不等于目标数的位置，右指针进行遍历

// TIME: O(n)
// SPACE: O(1)

function removeElement(nums, val) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
}