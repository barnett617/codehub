// https://leetcode.com/problems/edit-distance/

// 思路：使用二维数组记录每个字符的比较状态，并初始化为最大值
// 对于初始行和初始列进行状态初始化，初始值为该处字符串形成空串所需进行的动作数
// 然后依次比较每个字符是否相等，如果相等则直接更新状态为前一对字符比较的状态
// 如果不相等，则从三种动作中选操作数最小的+1

// TIME: O(mn)
// SPACE: O(mn)

function minDistance(word1, word2) {
    const dp = Array(word1.length + 1).fill(null).map(x => Array(word2.length + 1).fill(Infinity));

    for (let i = 0; i <= word1.length; i++) {
        dp[i][word2.length] = word1.length - i;
    }
    for (let j = 0; j <= word2.length; j++) {
        dp[word1.length][j] = word2.length - j;
    }
    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i + 1][j + 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
            }
        }
    }
    return dp[0][0];
}