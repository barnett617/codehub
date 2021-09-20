function threeSum(nums) {
  const result = [];
  if (nums.length >= 3) {
    nums.sort((a, b) => a - b);
    let i = 0;
    while (i < nums.length - 2) {
      twoSum(nums, i, result);

      let temp = nums[i];
      while (i < nums.length - 2 && temp === nums[i]) {
        i++;
      }
    }
  }
  return result;

  function twoSum(nums, i, result) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        let temp = nums[j];
        while (j < k && temp === nums[j]) {
          j++;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
}

(function () {
  const testcase = [
    [-1,0,1,2,-1,-4],
    [],
    [0]
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: test,
      output: JSON.stringify(threeSum(test))
    })
  })
  console.timeEnd('calc');
  console.log(result);
})()