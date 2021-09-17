var majorityElement = function(nums) {
    let count = 0;
    let flag = null;
    for (let num of nums) {
        if (!count) {
            flag = num;
        }
        count += (num === flag) ? 1 : -1;
    }
    return flag;
}