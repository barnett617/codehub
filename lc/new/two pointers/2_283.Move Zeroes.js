// https://leetcode.com/problems/move-zeroes/

// 思路：遍历每个元素，寻找非0元素，然后将其依次与前面的元素比较
// 前面如果有0就进行交换，直至没0为止
// TIME: O(n^2)
// SPACE: O(1)

function moveZeroes(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let curI = i;
            let j = i - 1;
            while (j >= 0 && nums[j] === 0) {
                [nums[curI], nums[j]] = [nums[j], nums[curI]];
                curI--;
                j--;
            }
        }
    }
}

// 思路：在前者方法的基础上，不每次重新追溯前面的每个元素
// 而将左指针实时更新到最新一个不为0的元素后面
// 右指针负责移动到最新元素

function moveZeroes(nums) {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[left] !== 0) {
            left++;
        } else if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
}