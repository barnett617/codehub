// https://leetcode.com/problems/permutations/

// 思路：创建帮助函数用于回溯，因为回溯是递归调用的
// 所以先定义递归终止条件，即当前字符串长度为0，即形成一个组合，则记录结果集，然后返回

function permute(nums) {
    const res = [];
    function backtrack(subNums, curList) {
        if (curList.length === nums.length) {
            res.push(curList.slice());
            return;
        }
        for (let i = 0; i < subNums.length; i++) {
            const newSumNums = subNums.filter((val, index) => index !== i);
            curList.push(subNums[i]);
            backtrack(newSumNums, curList);
            curList.pop();
        }
    }
    backtrack(nums, []);
    return res;
}