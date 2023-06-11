/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // for (var i = 0, flag = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         // 优化点：不相等才交换
    //         if (nums[flag] !== nums[i]) {
    //             var temp = nums[flag];
    //             nums[flag] = nums[i];
    //             nums[i] = temp;
    //         }
    //         flag++;
    //     }
    // }
    
    // 64.6 %
    // 78.87 %

    // 交换拆分成两个步骤
    for (var i = 0, flag = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // 把 0 的位置先用后面的元素填充
            // flag 用于记录出现 0 的位置
            nums[flag++] = nums[i]; 
        }
    }
    for (var i = flag; i < nums.length; i++) {
        nums[i] = 0;
    }
    // 可以把 0 的位置想象为气泡，当遇到气泡时需要挤出
    // 即气泡的位置可以填充后面的数组元素
    // i 为当前数组所有元素的游标
    // 而 flag 是遇到非 0 元素才向前移动的游标，所以控制的是非零数位
    // 也就是 i 和 flag 的差值就是出现 0 的数目
    // 当遍历完整个数组后, flag 停留的位置就是最后一个非零数字的位置
    // 每当遇到遇到 0, flag 游标就会停留
    // 当再次遇到非 0 元素时, 就可以将其放到 flag 停留的位置(挤出气泡)
    // 随后游标前移
};
moveZeroes([0,1,0,3,12]);
// @lc code=end

