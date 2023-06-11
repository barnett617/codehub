/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 我的解法：这样比较慢，因为遍历中嵌套着遍历(indexOf也是遍历)
    // for (var i = 0; i < numbers.length; i++) {
    //     if (numbers.indexOf(target - numbers[i], i + 1) > -1) {
    //         return [i + 1, numbers.indexOf(target - numbers[i], i + 1) + 1]
    //     }
    // }

    // 解法二：首尾相加，只用遍历数组的一半
    // var l = 0, r = numbers.length - 1;
    // while (l < r) {
    //     var sum = numbers[l] + numbers[r];
    //     if (target === sum) return [l + 1, r + 1]
    //     else if (target > sum) l++
    //     else if (target < sum) r--
    // }

    // 解法二的写法精简版
    for (var l = 0, r = numbers.length; l < r;) {
        if (numbers[l] + numbers[r] === target) return [++l, ++r]
        else target > numbers[l] + numbers[r] ? l++ : r--
    }
};
twoSum([0,0,3,4], 0);
// 容易忽略的点——虽然是升序数组，但是可能有【重复】元素
// indexOf第二个参数指明从哪里开始找，这里可以用于排除掉当前遍历元素及其前面的元素

// 解法一
//  (420 ms)
//  (35.2 MB)

// 解法二
// (72 ms)
// (35.1 MB)

// 解法儿精简版
// (56 ms)
// (35 MB)

// @lc code=end

