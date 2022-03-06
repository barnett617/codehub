// https://leetcode.com/problems/multiply-strings/

// 思路：使用两数长度之和的数组用于存储每位相乘的结果
// 每位相乘结果放置的位置为两位索引相加的位置

// TIME: O(mn)
// SPACE: O(m+n)

function multiply(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    const arr = Array(num1.length + num2.length).fill(0);
    const reverse = str => str.split('').reverse().join('');
    num1 = reverse(num1);
    num2 = reverse(num2);
    const n = arr.length;
    for (let n2 = 0; n2 < num2.length; n2++) {
        for (let n1 = 0; n1 < num1.length; n1++) {
            const curVal = arr[n - (n1 + n2) - 1];
            const newVal = num1[n1] * num2[n2];
            arr[n - (n1 + n2 + 1) - 1] += Math.floor((curVal + newVal) / 10);
            arr[n - (n1 + n2) - 1] = ((curVal + newVal) % 10);
        }
    }
    const firstNonZeroIndex = arr.findIndex(x => x !== 0);
    return arr.slice(firstNonZeroIndex).join('');
}