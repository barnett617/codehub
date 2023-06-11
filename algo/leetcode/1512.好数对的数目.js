/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var map = {}, ans = 0;
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = i;
        } else if (i > map[nums[i]]) {
            map[nums[i]] = i;
            ans++;
        } 
    }
    return ans
};