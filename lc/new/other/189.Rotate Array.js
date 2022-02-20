// https://leetcode.com/problems/rotate-array/

// 思路：旋转k次，每次右移所有元素
// TIME: O(nk)
// SPACE: O(1)
function rotate(nums, k) {
    k = k % nums.length;
    let temp, pre
    for (let i = 0; i < k; i++) {
        pre = nums[nums.length - 1];
        for (let i = 0; i < nums.length; i++) {
            temp = nums[i];
            nums[i] = pre;
            pre = temp;
        }
    }
}

// 思路：使用额外数组存储移动k位后的元素
// TIME: O(n)
// SPACE: O(n)
function rotate(nums, k) {
    const temp = Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        temp[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
}

// 思路：反转数组整体，然后反转前k位，然后反转第k位以后的所有位
// TIME: O(n)
// SPACE: O(1)
function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    function reverse(nums, left, right) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
}