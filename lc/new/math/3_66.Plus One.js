// https://leetcode.com/problems/plus-one/

// 思路：使用大于输入一位长度的数组用于存储结果
// 倒叙遍历每一位，对于第一位进行加1，依次将每一位计算出的余数更新为该位数值
// 将进位累加入下一位

// TIME: O(n)
// SPACE: O(n)

function plusOne(digits) {
    const res = Array(digits.length + 1).fill(0);
    for (let i = digits.length - 1; i >= 0; i--) {
        let cur = digits[i];
        if (i === digits.length - 1) cur++;
        let exist = res[i + 1];
        res[i + 1] = ((cur + exist) % 10);
        res[i] = Math.floor((cur + exist) / 10); 
    }
    const index = res.findIndex(x => x !== 0);
    return res.slice(index);
}