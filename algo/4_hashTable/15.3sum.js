var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    let res = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        const v = nums[i];
        if (i >= 1 && nums[i] === nums[i - 1]) continue;
        const d = {};
        for (let j = i + 1; j < nums.length; j++) {
            const x = nums[j];
            if (x in d) {
                res.add([v, -(v + x), x]);
            } else {
                d[-(v + x)] = 1
            }
        }
    }
    let newSet = new Set();
    res.forEach(item => {
        newSet.add(item.toString())
    })
    let newArr = []
    newSet.forEach(item => {
        newArr.push(item.split(',').map(num => +num))
    })
    return newArr;
}

function main() {
    // let nums = [-1, 0, 1, 2, -1, -4];
    let nums = [0, 0, 0, 0];
    console.log(threeSum(nums));
}
main()