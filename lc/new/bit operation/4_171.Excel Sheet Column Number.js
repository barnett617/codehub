// https://leetcode.com/problems/excel-sheet-column-number/

// 思路：考虑26进制

function titleToNumber(columnTitle) {
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const newVal = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
        if (i === 0) {
            res += newVal;
        } else {
            res += res * 25;
            res += newVal;
        }
    }
    return res;
}