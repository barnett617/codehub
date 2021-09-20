function threeSum(nums) {
  // 1.创建结果
  const result = [];
  // 2.排序
  if (nums.length >= 3) {
    nums.sort((a, b) => a - b);

    // 3.两数之和
    let i = 0;
    while (i < nums.length - 2) {
      twoSum(nums, i, result);
      let temp = nums[i];
      // 4.去重
      while (i < nums.length && nums[i] === temp) {
        i++;
      }
    }
    return result;
  }
  function twoSum(nums, i, result) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        let temp = nums[j];
        while (j < k && temp === nums[j]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
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