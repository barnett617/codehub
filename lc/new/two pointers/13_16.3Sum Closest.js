// https://leetcode.com/problems/3sum-closest/

// 思路：排序，并使用左右指针，不断记录差值更小的和，使用差值变量记录当前最小差值

// TIME: O(n^2)
// SPACE: O(1)

function threeSumClosest(nums, target) {
    let res = 0;
    nums.sort((a, b) => a - b);
    let diff = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) return sum;
            const curDiff = Math.abs(sum - target);
            if (curDiff < diff) {
                diff = curDiff;
                res = sum;
            }
            if (sum < target) left++;
            if (sum > target) right--;
        }
    }
    return res;
}