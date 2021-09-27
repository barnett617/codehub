function checkInclusion(s1, s2) {
  // 1.判断无效长度
  if (s2.length < s1.length) return;
  // 2.创建数组记录字母出现次数
  const counts = Array(26).fill(0);
  // 3.创建初始字母索引
  const startCharCode = 'a'.charCodeAt();
  // 4.遍历s1并记录字母出现次数，同时记录s2字母出现次数
  for (let i = 0; i < s1.length; i++) {
    counts[s1[i].charCodeAt() - startCharCode]++;
    counts[s2[i].charCodeAt() - startCharCode]--;
  }
  // 5.若遍历完s1，发现数组全为0，则s2包含s1变位词
  if (areAllZero(counts)) return true;
  // 6.继续遍历s2，每次遍历长度为s1的长度，同时恢复s2在s1长度意外的字母计数
  for (let i = s1.length; i < s2.length; i++) {
    counts[s2[i].charCodeAt() - startCharCode]--;
    counts[s2[i - s1.length].charCodeAt() - startCharCode]++;
    // 7.遍历过程中若发生数组全为0，则表示出现变位词
    if (areAllZero(counts)) return true;
  }

  function areAllZero(counts) {
    for (const count of counts) {
      if (count !== 0) return false;
    }
    return true;
  }

  return false;
}

(function () {
  const testcase = [
    {
      s1: 'ab',
      s2: 'eidbaooo',
      expect: true
    },
    {
      s1: 'ab',
      s2: 'eidboaoo',
      expect: false
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.s1, test.s2, test.expect]),
      expect: test.expect,
      output: checkInclusion(test.s1, test.s2)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()