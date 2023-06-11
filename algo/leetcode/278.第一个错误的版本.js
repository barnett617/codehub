/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var isBadVersion = function(version) {
    if (version >= 3) return true
    return false
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 1, end = n;
        while (start < end) {
            // https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html
            var mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start
    };

    // 89.4 %
    // 80 %

    // 解析
    // 核心：二分查找
    // 数组中是从某一个数开始，包括其自身以及后面的数都是坏版本
    // 二分查找过程中如果遇到某个数是坏版本，则改去查找该数左边是否还存在坏版本，但不排除该数就是第一个坏版本，所以 end = mid
    // 若发现某个数不是坏版本，则坏版本肯定在其右，并且排除该数，所以 start = mid + 1
    // 查找过程不存在大于小于比较，所以要保证用于判断是否坏版本的数应为整数，所以在求中值时向下取整

    // 写法精简
    // return function(n) {
    //     var start = 1, end = n;
    //     while (start < end) {
    //         var mid = Math.floor(start + (end - start) / 2);
    //         isBadVersion(mid) ? end = mid : start = mid + 1;
    //     }
    //     return start
    // };
};
var s = solution(isBadVersion);
s(7);
// @lc code=end

