// 思路：先计算每个数的平方，然后排序
// TIME: O(nlogn)
// SPACE: O(n)

function sortedSquares(nums) {
    const res = [];
    for (const num of nums) {
        res.push(num * num);
    }
    return res.sort((a, b) => a - b);
}

// 思路：使用左右两个指针，找到绝对值最大的数计算平方，放入结果数组尾部
// TIME: O(n)
// SPACE: O(n)
function sortedSquares(nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = [];
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res.unshift(nums[left] * nums[left]);
            left++;
        } else {
            res.unshift(nums[right] * nums[right]);
            right--;
        }
    }
    return res;
}