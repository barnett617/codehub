/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // Brute force
    // var temp, previous;
    // // 一共旋转 k 次
    // for (var i = 0; i < k; i++) {
    //     // 每次旋转都要拿出当前数组最后一个数放到数组头部
    //     previous = nums[nums.length - 1];
    //     // 每次旋转都要遍历数组的每一个元素
    //     for (var j = 0; j < nums.length; j++) {
    //         // 把当前遍历到的数组元素暂存起来
    //         temp = nums[j];
    //         // 把前一个元素放到当前位置
    //         nums[j] = previous;
    //         // 把当前元素作为下一次遍历的前一个元素
    //         previous = temp;
    //     }
    // }

    // Extra array
    // var arr = [];
    // for (var i = 0; i < nums.length; i++) {
    //     arr[(i + k) % nums.length] = nums[i]
    // }
    // for (var i = 0; i < nums.length; i++) {
    //     nums[i] = arr[i]
    // }

    // Revert array
    k %= nums.length;
    var revert = function(i, j) {
        while(i < j) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    revert(0, nums.length - 1);
    revert(0, k - 1);
    revert(k, nums.length - 1);
};
rotate([1,2,3,4,5,6,7], 3);

// 解法一
//  (332 ms)    O(n * k)
//  (35.2 MB)   O(1)

// 解法二
//  (80 ms)     O(n)
//  (36.4 MB)   O(n)

// 解法三
//  (64 ms)     O(n)
//  (35.4 MB)   O(1)
// @lc code=end

