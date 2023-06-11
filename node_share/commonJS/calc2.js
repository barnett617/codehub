/**
 * 升级版计算器
 * 对外暴露一个对象，内含多个计算方法
 */
const { PI } = Math;

const circleArea = function(round) {
  return PI * (round ** 2);
}

const add = function(a, b) {
  return a + b;
};
module.exports = {
  circleArea: circleArea,
  add: add
};
// console.log(module.exports);