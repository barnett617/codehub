function testConcat(arr) {
  let res = [];
  let index = 0;
  while (index < arr.length) {
    // let temp = res.concat(arr[index]);
    res = temp;
    index++;
  }
  return res;
}

let nums = [];
console.time('push');
for (let i = 0; i < 50000; i++) {
  nums.push(i);
}
console.timeEnd('push');

console.time('concat');
console.log(testConcat(nums));
console.timeEnd('concat');

// push: 6.612ms
// [
//    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
//   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//   36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//   48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//   72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//   84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//   96, 97, 98, 99,
//   ... 49900 more items
// ]
// concat: 12.993s

// https://news.ycombinator.com/item?id=19991339
// the first array is actually being reallocated n times, 
// where n is the number of input arrays