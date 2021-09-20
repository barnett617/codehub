function twoSum(numbers, target) {
  // 1.创建两个指针
  let i = 0;
  let j = numbers.length - 1;
  // 2.当左指针小于右指针并且两数和不等于目标值则持续移动指针
  while (i < j && numbers[i] + numbers[j] !== target) {
    if (numbers[i] + numbers[j] < target) {
      // 3.如果两数和小于目标值，则右移左指针
      i++;
    } else {
      // 4.如果两数和大于目标值，则左移右指针
      j--;
    }
  }
  // 5.返回指针行程的索引数组
  return [i, j];
}

(function () {
  const testcase = [
    {
      numbers: [1,2,4,6,10], 
      target: 8
    },
    {
      numbers: [2,3,4], 
      target: 6
    },
    {
      numbers: [-1,0],
      target: -1
    }
  ];
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify(test),
      output: twoSum(test.numbers, test.target)
    })
  });
  console.timeEnd('calc');
  console.log(result);
})()