// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// 思路：对于有序数组，只需使用双指针相近，不断靠近目标

// TIME: O(n)
// SPACE: O(1)

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }
    return []
}