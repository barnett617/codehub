function minWindow(s, t) {
  // 1.创建字典
  const map = new Map();
  // 2.遍历t并记录
  for (const char of t.split('')) {
    // const charcode = ch.charCodeAt();
    // const exist = map.get(charcode);
    // map.set(charcode, exist ? exist + 1 : 1);
    let exist = map.get(char.charCodeAt());
    const val = exist ? exist + 1 : 1;
    map.set(char.charCodeAt(), val);
  }
  // 3.记录字典大小
  let count = map.size;
  // 4.创建左右指针和最小左右边界变量
  let start = 0, end = 0, minStart = 0, minEnd = 0;
  // 5.创建最小长度变量
  let minLength = Infinity;
  // 6.当右指针小于s长度 或 右指针已经到s末尾但字典为空时进行判断
  // 注意边界判断，右指针的遍历虽然只能指向s末尾字符，
  // 但如果在指针指向末尾字符后一位时，恰好字典清空
  // 则表示经过最后一位的判断，正好包含了所有的t字符
  // while (end < s.length || (end === s.length && count === 0)) {
  while (end < s.length || (count === 0 && s.length === end)) {
    // 这种情况右指针还未到s末尾
    if (count > 0) {
      const char = s[end].charCodeAt();
      // 如果当前右指针指向的字符存在于字典中，则字典对于该字符的计数减1
      if (map.has(char)) {
        map.set(char, map.get(char) - 1);
        // 接着判断该字符是否已为0，如果某个字符计数为0，则字典长度变量理应减1
        // 有必要判断计数是否正好等于0
        // 因为随着右指针右移的过程中，可能继续出现字典中的字符】
        // 某个字符的计数为0，表示s子串包含和t每个字符相同个数的字符
        // 字符计数大于0，则表示s尚未找够满足t字符数量的子串
        // 字符计数小于0，则表示s子串存在多余满足t字符数量的字符
        if (map.get(char) === 0) {
          count--;
        }
      }
      // 对于当前右指针所在字符判断完，继续右移右指针
      end++;
    } else {
      // 这种情况有可能是当前左右指针范围内的子串已经包含所有t的字符，因为count<=0
      // 则开始比较当前子串是否为最小子串
      // 并在判断后继续右移左指针，看是否有包含全部t字符的更小子串
      if (end - start < minLength) {
        minLength = end - start;
        minStart = start;
        minEnd = end;
      }
      // 当前已经有包含t所有字符的子串，则尝试右移左指针，查看是否有更小的子串
      // 右移左指针前，判断左指针指向的字符
      // 如果该字符是t的组成字符，则字段对于该字符的计数需要加1
      // 因为对于该字符的匹配由于右移左指针而少了一个
      const char = s[start].charCodeAt();
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
        if (map.get(char) === 1) {
          // 这一步判断是最迷惑的——有不等于的情况吗？
          count++;
        }
      }
      start++;
    }
  }
  return minLength < Infinity ? s.substring(minStart, minEnd) : '';
};

(function () {
  const testcase = [
    {
      s: 'ADOBECODEBANC',
      t: 'ABC',
      expect: 'BANC'
    },
    {
      s: 'a',
      t: 'a',
      expect: 'a'
    },
    {
      s: 'a',
      t: 'aa',
      expect: ''
    }
  ]
  const result = [];
  console.time('calc');
  testcase.forEach(test => {
    result.push({
      input: [test.s, test.t],
      expect: test.expect,
      output: minWindow(test.s, test.t)
    })
  })
  console.timeEnd('calc');
  console.table(result);
})()