function threeSum(nums) {
  const result = [];
  // 1.排序
  if (nums.length >= 3) {
    nums.sort((a, b) => a - b);
    let i = 0;
    while (i < nums.length - 2) {
      // 2.两数之和
      twoSum(nums, i, result);
      let temp = nums[i];
      // 3.处理相同的数
      while (i < nums.length && nums[i] === temp) {
        i++;
      }
    }
  }
  function twoSum(nums, i, result) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        let temp = nums[j];
        while (j < k) {
          j++;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
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