// https://leetcode.com/problems/product-of-array-except-self/

// 思路：使用和输入等长的数组用于存储结果
// 从前往后遍历，将第一个前缀初始为1，然后依次将不包含当前元素的乘积存入当前结果，并更新前缀乘积
// 从后往前遍历，将最后一个后缀初始为1，然后依次将不包含当前元素的乘积累加进当前结果，并更新后缀乘积

// TIME: O(n)
// SPACE: O(1)

function productExceptSelf(nums) {
    const res = Array(nums.length).fill(0);
    let preProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = preProduct;
        preProduct *= nums[i];
    }
    let postProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postProduct;
        postProduct *= nums[i];
    }
    return res;
}