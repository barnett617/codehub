function threeSum(nums) {
  const result = [];
  if (nums.length >= 3) {
    nums.sort((a, b) => a - b);

    let i = 0;
    while (i < nums.length - 2) {
      twoSum(nums, i, result);
      // 记录当前i索引的值
      let temp = nums[i];
      // 如果后面的值与该值相同则跳过
      while (i < nums.length && nums[i] === temp) {
        i++;
      }
    }
  }
  return result;
  function twoSum(nums, i, result) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        let temp = nums[j];
        while (nums[j] === temp && j < k) {
          ++j;
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        ++j;
      } else {
        --k;
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