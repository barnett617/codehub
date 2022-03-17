// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// 思路：使用左右指针，左指针指向上一个不重复的元素，右指针进行遍历

// TIME: O(n)
// SPACE: O(1)

function removeDuplicates(nums) {
    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[left]) {
            left++;
            if (nums[right] !== nums[left]) {
                nums[left] = nums[right];
            }
        }
    }
    return left + 1;
}