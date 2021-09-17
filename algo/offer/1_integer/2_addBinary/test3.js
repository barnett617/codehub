function addBinary(a, b) {
  // 1.创建结果集合
  const result = [];
  // 2.创建索引
  let i = a.length - 1;
  let j = b.length - 1;
  // 3.创建进位
  let carry = 0;
  // 4.开始循环
  while (i >= 0 || j >= 0) {
    // 5.取出一位
    let digit_a = i >= 0 ? a.charAt(i--) - '0' : 0;
    let digit_b = j >= 0 ? b.charAt(j--) - '0' : 0; 
    // 6.求和
    let sum = digit_a + digit_b + carry;
    // 7.求进位
    carry = sum >= 2 ? 1 : 0;
    // 8.进位后求和
    sum = sum >= 2 ? 0 : sum;
    // 9.插入集合
    result.unshift(sum);
  }
  // 10.最后一位进位判断
  if (carry === 1) {
    result.unshift(1);
  }
  // 11.结果输出
  return result.join('');
}

(function () {
  console.time('calc');
  const testcase = [
    { a: '11', b: '10' },
    { a: '1010', b: '1011' },
    { a: '101010101010', b: '101110111011' },
  ]
  const result = [];
  testcase.forEach(test => {
    const { a, b } = test;
    result.push({
      input: test,
      output: addBinary(a, b)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()