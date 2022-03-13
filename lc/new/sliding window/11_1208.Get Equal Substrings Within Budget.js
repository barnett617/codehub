// https://leetcode.com/problems/get-equal-substrings-within-budget/

// 思路：不断累计计算当前消耗，如果小于给定消耗，则可以不断计算最大子串
// 如果超出，则从左侧退出左边界的元素，并恢复消耗

function equalSubstring(s, t, maxCost) {
    let res = 0;
    let curCost = 0;
    const calcCost = index => Math.abs(s[index].charCodeAt() - t[index].charCodeAt());
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        curCost += calcCost(right);
        if (curCost <= maxCost) {
            res = Math.max(res, right - left + 1);
        }
        while (curCost > maxCost) {
            curCost -= calcCost(left);
            left++;
        }
    }
    return res;
}
