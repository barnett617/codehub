const calc2 = require('./calc2');
const assert = require('assert').strict;

const round = 2;
const result = calc2.circleArea(round);

console.log(result);
// 12.566370614359172

const expected = Math.PI * (round ** 2);

// deepStrictEqual校验通过无结果
assert.deepStrictEqual(result, expected, 'not equal');

// ok验证通过无返回值
assert.ok(result === expected, 'not equal');

console.log(Math);