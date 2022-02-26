// https://leetcode.com/problems/contains-duplicate/

// 思路：使用set记录见过的元素，如果遍历到某个元素已经存在于set，则说明存在重复元素

// TIME: O(n)
// SPACE: O(n)

function containsDuplicate(nums) {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
}