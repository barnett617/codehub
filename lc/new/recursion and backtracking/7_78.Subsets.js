// https://leetcode.com/problems/subsets/

// 思路：使用帮助函数用于递归回溯，每次递归开始将本次子集加入结果集
// 然后在当前位置进行遍历，不断将一个新元素添加入子集进行递归，并在该次递归后撤出本次添加的元素

// TIME: O(n)
// SPACE: O(n)

function subsets(nums) {
    const res = [];
    function backtrack(index, curList) {
        res.push(curList.slice());
        for (let i = index; i < nums.length; i++) {
            curList.push(nums[i]);
            backtrack(i + 1, curList);
            curList.pop();
        }
    }
    backtrack(0, []);
    return res;
}