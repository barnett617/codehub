// https://leetcode.com/problems/permutations-ii/

// 思路：使用回溯的方式，并用集合记录可以唯一标识一个组合的记录，然后进行去重

function permuteUnique(nums) {
    const res = [];
    const set = new Set();

    function backtrack(subNums, curList) {
        if (set.has(curList.join(''))) return;
        set.add(curList.join(''));
        if (curList.length === nums.length) {
            res.push(curList.slice());
            return;
        }
        for (let i = 0; i < subNums.length; i++) {
            const newSubNums = subNums.filter((val, index) => index !== i);
            curList.push(subNums[i]);
            backtrack(newSubNums, curList);
            curList.pop();
        }
    }
    backtrack(nums, []);

    return res;
}

// 思路：使用map记录每个数出现的次数，然后每当处理某个数时，就将该数的计数-1，回溯完恢复该计数
// 只对计数大于0的元素进行处理

function permuteUnique(nums) {
    const res = [];
    const curList = [];
    const count = {};
    for (const n of nums) {
        const exist = count[n] || 0;
        count[n] = exist + 1;
    }
    function backtrack() {
        if (curList.length === nums.length) {
            res.push(curList.slice());
            return;
        }
        for (const n in count) {
            if (count[n] > 0) {
                curList.push(n);
                count[n]--;
                backtrack();
                count[n]++;
                curList.pop();
            }
        }
    }
    backtrack()

    return res;
}