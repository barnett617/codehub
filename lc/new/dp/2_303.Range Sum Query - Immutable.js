// https://leetcode.com/problems/range-sum-query-immutable/
// 思路：由于后者的累加和是基于前面的累加和加上当前数计算所得
// 所以利用这个状态转移特性记录下每个索引位置的累加和
// 对于某个区间内的计算，使用右边界的累加和减去左边界的累加和再加上左边界所在值即可

function NumArray(nums) {
    this.list = nums;
    const dp = Array(num.length);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] + nums[i];
    }
    this.dp = dp;
}

NumArray.prototype.sumRange = function(left, right) {
    return this.dp[right] - this.dp[left] + this.list[left];
}