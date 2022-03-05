// https://leetcode.com/problems/sort-colors/

// 原理：分区排序，将0都往左放，并将分区点右移，将2都往右放，并将分区点左移

// TIME: O(n)
// SPACE: O(1)

function sortColors(nums) {
    let l = 0, r = nums.length - 1;
    let i = 0;
    while (i <= r) {
        if (nums[i] === 0) {
            swap(nums, i, l);
            l++;
        } else if (nums[i] === 2) {
            swap(nums, i, r);
            r--;
            i--;
        }
        i++;
    }
    function swap(nums, a, b) {
        if (a === b) return;
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }
}