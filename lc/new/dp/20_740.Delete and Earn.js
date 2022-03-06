// https://leetcode.com/problems/delete-and-earn/

// 思路：使用一个map记录每个数出现的次数，将原数组去重并排序
// 对于临值元素，进行比较取当前元素，和不取当前元素哪个更大
// 对于非临值元素，直接进行累加前面的值

// TIME: O(nlogn)
// SPACE: O(n)

function deleteAndEarn(nums) {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
    let earn1 = 0, earn2 = 0;
    for (let i = 0; i < sorted.length; i++) {
        curEarn = sorted[i] * count[sorted[i]];
        if (i > 0 && sorted[i] === sorted[i - 1] + 1) {
            let temp = earn2;
            earn2 = Math.max(curEarn + earn1, earn2);
            earn1 = temp;
        } else {
            let temp = earn2;
            earn2 = curEarn + earn2;
            earn1 = temp;
        }
    }
    return earn2;
}