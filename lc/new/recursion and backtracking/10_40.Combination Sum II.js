// https://leetcode.com/problems/combination-sum-ii/

// 思路：将排序后的数组，不断尝试将某个组合进行加和，判断是否等于目标值
// 对于大于目标值的组合进行剪枝，对于开始元素重复的进行跳过

function combinationSum2(nums, target) {
    const res = [];
    nums.sort((a, b) => a - b);
    function sum(list) {
        if (!list.length) return list;
        return list.reduce((acc, cur) => acc + cur);
    }
    function helper(index, curList) {
        if (sum(curList) > target) return;
        if (sum(curList) === target) {
            res.push(curList.slice());
            return;
        }
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue;
            curList.push(nums[i]);
            helper(i + 1, curList);
            curList.pop();
        }
    }
    helper(0, []);
    return res;
}