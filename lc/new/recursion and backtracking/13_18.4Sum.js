// https://leetcode.com/problems/4sum/

// 思路：排序并用双指针寻找三数之和等于总和减去第一个数的差的组合
// 注意对第一个元素、第二个元素进行重复元素跳过
// 当寻找到匹配组合后，左右指针同时向中间移，并且要对重复元素进行跳过，左右任选其一

// TIME: O(n^3)
// SPACE: O(1)

function fourSum(nums, target) {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const subTarget = target - sum;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1, right = nums.length - 1;
            while (left < right) {
                const sum = nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return res;
}