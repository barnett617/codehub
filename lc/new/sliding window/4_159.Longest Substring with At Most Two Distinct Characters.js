// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

// 思路：使用map记录字符出现次数，每当次数更新后，如果map长度未超过2，则更新最大子串长度
// 如果超过2，则从左侧缩小窗口，直至map长度恢复为2

function lengthOfLongestSubstringTwoDistinct(s) {
    let res = 0;
    let left = 0;
    const map = new Map();
    for (let right = 0; right < s.length; right++) {
        const count = map.get(s[right]) || 0;
        map.set(s[right], count + 1);
        if (map.size <= 2) {
            res = Math.max(res, right - left + 1);
        }
        while (map.size > 2) {
            const leftCh = s[left];
            map.set(leftCh, map.get(leftCh) - 1);
            if (map.get(leftCh) === 0) {
                map.delete(leftCh);
            }
            left++;
        }
    }
    return res;
}