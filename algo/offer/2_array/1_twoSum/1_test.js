function twoSum(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j && numbers[i] + numbers[j] !== target) {
    if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return [i, j]
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