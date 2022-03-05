// https://leetcode.com/problems/wiggle-sort/

// 思路：使用一个标识交替变更排序的规则（增序或降序）

// TIME: O(n)
// SPACE: O(1)

function wiggleSort(nums) {
    let flag = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (flag && nums[i] > nums[i + 1]) {
            swap(nums, i, i + 1);
        } else if (!flag && nums[i] < nums[i + 1]) {
            swap(nums, i, i + 1);
        }
        flag = !flag;
    }
    function swap(nums, a, b) {
        if (a === b) return;
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }
}