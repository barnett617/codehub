// https://leetcode.com/problems/generate-parentheses/

// 思路：递归回溯，对于左括号小于总数的情况进行回溯，对于右括号小于左括号的情况进行回溯

function generateParenthese(n) {
    const res = [];
    function backtrack(curStr, open, close) {
        if (curStr.length === n * 2) {
            res.push(curStr);
            return;
        }
        if (open < n) backtrack(curStr + '(', open + 1, close);
        if (close < open) backtrack(curStr + ')', open, close + 1);
    }
    backtrack('', 0, 0);
    return res;
}