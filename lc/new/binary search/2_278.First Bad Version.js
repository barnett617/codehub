// https://leetcode.com/problems/first-bad-version/submissions/

// 思路：从第一个版本开始判断，到第N个版本结束，寻找范围在此区间
// 当左右边界相遇，则一定是第一个坏版本
// 判断左右边界中间的版本是否为坏版本，如果是坏版本，则它后面的都一定是坏的，所以后面无序考虑
// 但需要判断这是不是第一个坏版本，所以将有边界设为当前位置
// 如果不是坏版本，说明还坏版本出现在后面，并且当前版本不可能是第一个坏版本，所以将左边界加1

// TIME: O(logn)
// SPACE: O(1)
function solution(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;
        while (left < right) {
            let mid = left + ((right - left) >> 1);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}