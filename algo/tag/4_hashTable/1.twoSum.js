var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (map[target - cur] > -1) {
            return [map[target -cur], i];
        } 
        map[cur] = i;
    }
    return [];
}