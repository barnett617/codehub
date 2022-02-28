// https://leetcode.com/problems/subsets-ii/

// 思路：将数组进行排序，然后对重复元素进行跳过

function subsetsWithDup(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    function backtrack(index, curList) {
        res.push(curList.slice());
        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i] === nums[i - 1]) continue;
            curList.push(nums[i]);
            backtrack(i + 1, curList);
            curList.pop();
        }
    }
    backtrack(0, []);
    return res;
}