// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 思路：由于是有序数列，且要计算两个元素的加和与一个目标元素的比较
// 所以设立左右指针，将两指针所指向元素加和不断接近目标值
// TIME: O(n)
// SPACE: O(1)

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left+1, right+1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}