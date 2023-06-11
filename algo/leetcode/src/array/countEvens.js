/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var ans = 0;
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i].toString().length % 2 === 0) {
    //         ans++;
    //     }
    // }
    
    
    function count(num, len) {
        if (parseInt(num / 10) === 0) return len
        return count(parseInt(num / 10), len + 1)
    }
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]
        var len = count(num, 1)
        if (parseInt(len % 2) === 0) {
            ans++
        }
    }
    return ans
};

console.log(findNumbers([12,345,2,6,7896]))