function findAnagrams(s, p) {
  // 1.有效长度判断
  const indices = [];
  if (s.length < p.length) return indices;

  // 3.创建辅助数组字母表，用26个元素表示各个字母
  const counts = Array(26).fill(0);
  // 4.创建开始字符索引
  const startCharCode = 'a'.charCodeAt();
  // 5.遍历短字符串，对每个字母+1，同时对长字符串每个字母-1
  let i = 0;
  for (; i < p.length; i++) {
    counts[p[i].charCodeAt() - startCharCode]++;
    counts[s[i].charCodeAt() - startCharCode]--;
  }
  // 6.短字符串遍历结束后如果字母数为0，则表示长字符串首部存在短字符串变位词
  if (areAllZero(counts)) {
    indices.push(0);
  }
  // 7.继续遍历长字符串，同时恢复短字符串长度以外的字母计数
  for (; i < s.length; i++) {
    counts[s[i].charCodeAt() - startCharCode]--;
    counts[s[i - p.length].charCodeAt() - startCharCode]++;
    // 8.每个字母遍历的同时，观察是否出现字母表为0，如果出现，则当前遍历位置的第一个字母所在索引即是变位词头部
    if (areAllZero(counts)) {
      indices.push(i - p.length + 1);
    }
  }

  function areAllZero(counts) {
    for (const count of counts) {
      if (count !== 0) return false;
    }
    return true;
  }

  return indices;
}

(function () {
  const testcase = [
    {
      s: 'cbaebabacd',
      p: 'abc',
      expect: [0, 6]
    },
    {
      s: 'abab',
      p: 'ab',
      expect: [0, 1, 2]
    }
  ];
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: JSON.stringify([test.s, test.p, test.expect]),
      expect: test.expect,
      output: findAnagrams(test.s, test.p)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()