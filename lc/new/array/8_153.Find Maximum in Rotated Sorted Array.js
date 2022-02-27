// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// 思路：即使数组发生旋转，其每个部分也是部分递增的
// 所以当元素小于其左侧元素，则一定是最小值
// 如果某个元素在某个区间同时大于两侧边缘的值，则目标发生于右侧

// TIME: O(logn)
// SPACE: O(1)

function findMin(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = l + ((r - l) >> 1);
        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            return nums[mid];
        } else if (nums[mid] >= nums[l] && nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return nums[l];
}