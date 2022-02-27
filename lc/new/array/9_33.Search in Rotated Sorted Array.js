// https://leetcode.com/problems/search-in-rotated-sorted-array/

// 思路：先找到数组分区点
// 然后查看目标元素在分区点哪侧
// 最后在该侧进行二分查找

// TIME: O(logn)
// SPACE: O(1)

function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = l + ((r - l) >> 1);
        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    let pivot = l;
    l = 0, r = nums.length - 1;
    if (target >= nums[pivot] && target <= nums[r]) {
        l = pivot;
    } else {
        r = pivot;
    }

    while (l <= r) {
        let mid = l + ((r - l) >> 1);
        if (target === nums[mid]) return mid;
        else if (target > nums[mid]) l = mid + 1;
        else r = mid - 1;
    }

    return -1;
}