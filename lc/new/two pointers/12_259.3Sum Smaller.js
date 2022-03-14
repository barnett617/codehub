// https://leetcode.com/problems/3sum-smaller/

// 思路：排序，并用双指针，当某次加和小于目标值时，累加中间所有的数

// TIME: O(n^2)
// SPACE: O(1)

function threeSumSmaller(nums, target) {
    let res = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < target) {
                res += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
}