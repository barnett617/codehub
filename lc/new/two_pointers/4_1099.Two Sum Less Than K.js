// https://leetcode.com/problems/two-sum-less-than-k/
// 思路：暴力比较每两个数是否大于目标值，否则更新最接近目标值的加和
// TIME: O(n^2)
// SPACE: O(1)

function twoSumLessThanK(nums, k) {
    let curMax = -1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum < k && (k - sum) < (k - curMax)) {
                curMax = sum;
            }
        }
    }
    return curMax;
}

// 思路：先排序，然后设置左右指针，不断接近小于目标值的最大和
// TIME: O(nlogn)
// SPACE: O(1)
function twoSumLessThanK(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let curMax = -1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < k) {
            if (k - sum < k - curMax) {
                curMax = sum;
            }
            left++;
        } else {
            right--;
        }
    }
    return curMax;
}