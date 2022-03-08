// https://leetcode.com/problems/decode-ways/

// 思路：尝试每个字符单字符是否能组成有效组合
// 然后尝试对每个字符进行双字符组合与剩余字符是否能组成有效组合

// TIME: O(n)
// SPACE: O(n)

function numDecodings(s) {
    const map = new Map();
    function helper(index) {
        if (map.has(index)) return map.get(index);
        if (index === s.length) return 1;
        if (s[index] === '0') return 0;
        if (index === s.length - 1) return 1;
        let ans = helper(index + 1);
        const substr = s.substring(index, index + 2);
        if (parseInt(substr) <= 26) {
            ans += helper(index + 2);
        }
        map.set(index, ans);
        return ans;
    }
    return helper(0);
}