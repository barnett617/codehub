// https://leetcode.com/problems/maximum-erasure-value/

// 思路：使用加和变量计算元素累加和，并用map记录每个元素出现的次数
// 当子数组长度与map长度匹配时，说明不包含重复元素，可计算最大子数组长度
// 当出现重复元素时，则不断缩小左边界，以去除重复元素

function maximumUniqueSubarray(nums) {
    let res = -Infinity;
    let sum = 0;
    const map = new Map();
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        const count = map.get(nums[right]) || 0;
        map.set(nums[right], count + 1);
        if (map.size === right - left + 1) {
            res = Math.max(res, sum);
        }
        while (right - left + 1 > map.size) {
            sum -= nums[left];
            const leftEle = nums[left];
            map.set(leftEle, map.get(leftEle) - 1);
            if (map.get(leftEle) === 0) {
                map.delete(leftEle);
            }
            left++;
        }
    }
    return res;
}