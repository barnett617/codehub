/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // var ans = 0;
    // var isPrime = function(n) {
    //     var count = 0;
    //     for (var i = 2; i <= n; i++) {
    //         if (n % i === 0) {
    //             count++
    //         } 
    //         if (count > 1) {
    //             return 0
    //         }
    //     }
    //     return 1;
    // }
    // for (var i = 2; i < n; i++) {
    //     ans += isPrime(i)
    // }
    // return ans
    // 该解法因为要从2遍历到数自身去计算除法，导致超时

    // 维基百科提供的埃氏筛（素数筛）答案错误待证
    // 从2开始，将每个素数的各个倍数，标记成合数
    // 一个素数的各个倍数，是一个差为此素数本身的等差数列
    // let count = 0;
    // let signs = new Uint8Array(n);

    // for (let i = 2; i <= Math.sqrt(n); i++) {
    //     if (!signs[i - 1]) {
    //         count++;

    //         for (let j = i * i; j <= n; j += i) {
    //             signs[j - 1] = true;
    //         }
    //     }
    // }
    // return count;

    // 解法一（待理解）
    // typeof Array(n) === "object"

    // var nums = [...Array(n).keys()].slice(2);
    // for (var i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
    //     if (nums[i]) {
    //         for (var j = i + nums[i]; j <= n; j += nums[i]) {
    //             nums[j] = undefined
    //         }
    //     }
    // }
    // return nums.filter(n => n).length

    // filter 为数组中的每个元素调用一次 callback 函数
    // 并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组
    // callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
    // 那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。

    // 解法二
    // var count = 0;
    // var arr = [];
    // for (var i = 2; i < n; i++) {
    //     if (arr[i]) continue;
    //     count++;
    //     for (j = i + i; j < n; j += i) {
    //         arr[j] = true;
    //     }
    // }
    // return count;

    // (156 ms)
    // (136.2 MB)

    // 解法三
    var hash = new Array(n).fill(true);
    hash[0] = false;
    hash[1] = false;
    for (var i = 2; i * i < n; i++) {
        if (hash[i]) {
            for (var j = i * i; j < n; j += i) {
                hash[j] = false;
            }
        }
    }
    return hash.filter((val) => val).length;
};
countPrimes(10);
// 本题存疑
// @lc code=end

