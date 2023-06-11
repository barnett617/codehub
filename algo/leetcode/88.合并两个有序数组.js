/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let currIndex = m + n;
    const nums1HasBiggerNum = (a, b) => {
        if (a < 0) return false;
        if (b < 0) return true;
        return nums1[a] > nums2[b];
    }
    m--;
    n--;
    while(currIndex--) {
        let flag = nums1HasBiggerNum(m, n);
        if (flag) {
            nums1[currIndex] = nums1[m--];
        } else {
            nums1[currIndex] = nums2[n--];
        }
    }
};
merge([1,2,3,0,0,0], 3, [2,5,6], 3);
// @lc code=end

