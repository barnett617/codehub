/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // 解法一
    // var sum = 0;
    // while (n !== 0) {
    //     sum++;
    //     n &= (n - 1);
    // }
    // return sum
    // (76 ms)
    // (34.3 MB)

    // 解法二(SWAR算法)
    // n = (n & 0x55555555) + ((n >> 1) & 0x55555555);
    // n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    // n = (n & 0x0F0F0F0F) + ((n >> 4) & 0x0F0F0F0F);
    // n = (n * (0x01010101) >> 24);
    // return n
    // (80 ms)
    // (34.1 MB)

    // 解法三（移动mask）
    // var bits = 0, mask = 1;
    // for (var i = 0; i < 32; i++) {
    //     if ((n & mask) != 0) {
    //         bits++;
    //     }
    //     mask <<= 1
    // }
    // return bits
    // (64 ms)
    // (34.7 MB)

    // 解法三变种（移动n）
    // var bits = 0;
    // while(n) {
    //     if (n & 1 == 1) {
    //         bits++;
    //     }
    //     n >>>= 1
    // }
    // return bits;
    // (80 ms)
    // (34.8 MB)

    // 解法四
    // return n === 0 ? 0 : (n % 2) + hammingWeight(~~(n / 2))
    // (80 ms)
    // (34.9 MB)

    // 解法五
    // return Number(n).toString(2).split('').filter(i => +i === 1).join('').length;
    // (100 ms)
    // (35.6 MB)

    // 解法五变种
    // return Number(n).toString(2).replace(/0/g, '').length;
    // (72 ms)
    // (34.4 MB)

    // 解法六
    // return Number(n).toString(2).split('').reduce((sum, bit) => Number(sum) + Number(bit));
    // (80 ms)
    // (34.4 MB)

    // 解法七
    var ans = 0;
    for (var i = 31; i >= 0; i--) {
        if (n >= Math.pow(2, i)) {
            ans++;
            n -= Math.pow(2, i)
        }
    }
    return ans
    // (72 ms)
    // (34.7 MB)
}; 
hammingWeight(0b00000000000000000000000000001011);

// 解法一


// 算法一解释
// 减1操作将最右边的符号从0变到1，从1变到0，（因为二进制数每个位上只可能是0或1）
// 与操作将会移除最右端的1。（因为两个都为1的情况才会为1，所以利用与操作寻找1）
// 如果最初X有N个1，那么经过N次这样的迭代运算，X将减到0（因为每次上述操作都是在找1的操作，所以操作的次数即是1的个数）
// 适用于数中0多的情况

// @lc code=end

