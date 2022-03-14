// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// 回溯，遍历每个输入的数字的每种可能

// TIME: O(4^n*n)
// SPACE: O(n)

function letterCombinations(digits) {
    const res = [];
    if (!digits) return res;
    const map = {
        2: 'abc', 3: 'def',
        4: 'ghi', 5: 'jkl', 6: 'mno',
        7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    }
    function backtrack(index, cur) {
        if (cur.length === digits.length) {
            res.push(cur);
            return;
        }
        const chars = map[digits[index]];
        for (const ch of chars) {
            cur += ch;
            backtrack(index + 1, cur);
            cur = cur.substring(0, cur.length - 1);
        }
    }
    backtrack(0, '');
    return res;
}