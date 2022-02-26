// https://leetcode.com/problems/longest-common-subsequence/

// 思路：使用二维数组记录两个字符串每对字符的匹配状态
// 将状态数组初始化为+1的长度，并且值初始化为0
// 依次比较两个字符，如果相等则在前一个对角线状态的基础上+1
// 否则取两个维度上比较的更大值

// TIME: O(mn)
// SPACE: O(mn)

function longestCommonSubsequence(text1, text2) {
    const dp = Array(text1.length + 1).fill(null).map(x => Array(text2.length + 1).fill(0));

    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }
    return dp[0][0];
}