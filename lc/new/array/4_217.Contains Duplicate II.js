// https://leetcode.com/problems/contains-duplicate-ii/

// 思路：使用map记录每个元素及其索引，当遇到存在于map的元素时，判断其索引差是否满足

// TIME: O(n)
// SPACE: O(n)

function containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const exist = map.get(nums[i]);
            if (Math.abs(exist - i) <= k) return true;
        }
        map.set(nums[i], i);
    }
    return false;
}