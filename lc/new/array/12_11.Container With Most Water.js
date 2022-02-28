// https://leetcode.com/problems/container-with-most-water/

// 思路：双指针，每次移动高度更小的一侧

// TIME: O(n)
// SPACE: O(1)

function maxArea(height) {
    let res = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r]);
        if (area > res) res = area;
        if (height[l] < height[r]) l++;
        else r--;
    }
    return res;
}