var maxSubArray = function(nums) {
    let curSub = nums[0];
    let maxSub = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        curSub = Math.max(num, num + curSub);
        maxSub = Math.max(curSub, maxSub);
    }
    return maxSub;
}