function checkInclusion(s1, s2) {
  // 1.无效长度判断
  if (s2.length < s1.length) return;
  // 2.使用数组记录每个字母出现的次数
  const counts = Array(26).fill(0);
  // 3.创建字母a的索引
  const startCharCode = 'a'.charCodeAt();
  // 4.遍历s1每个字母，在数组中记录出现次数，并且同时记录s2字母出现次数
  for (let i = 0; i < s1.length; i++) {
    counts[s1[i].charCodeAt() - startCharCode]++;
    counts[s2[i].charCodeAt() - startCharCode]--;
  }
  // 5.若遍历s1后，数组元素都为0，则表示s2最前面长度为s1长度的子字符串恰好为s1的变位词
  if (areAllZero(counts)) return true;
  // 6.在前面的基础上继续遍历s2每个字母，并对每个字母出现情况做记录，记录新的字母，并恢复旧的字母
  for (let i = s1.length; i < s2.length; i++) {
    counts[s2[i].charCodeAt() - startCharCode]--;
    counts[s2[i - s1.length].charCodeAt() - startCharCode]++;
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