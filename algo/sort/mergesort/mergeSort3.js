function sort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = Math.floor(arr.length >> 1);
  return merge(sort(arr.slice(0, pivot)), sort(arr.slice(pivot)));
}

function merge(arr1, arr2) {
  let left = 0, right = 0, res = [];
  while (left < arr1.length && right < arr2.length) {
      if (arr1[left] < arr2[right]) {
          res.push(arr1[left]);
          left++;
      } else {
          res.push(arr2[right]);
          right++;
      }
  }
  // while (left < arr1.length) {
  //     res = res.concat(arr1[left]);
  //     left++;
  // }
  // while (right < arr2.length) {
  //     res = res.concat(arr2[right]);
  //     right++;
  // }
  res = res.concat(arr1.slice(left), arr2.slice(right));
  return res;
}

let arr = [];
for (let i = 1; i < 50000; i++) {
  arr.push(i);
}
console.time('merge');
console.log(sort(arr));
console.timeEnd('merge');

// [
//   1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
//  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
//  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
//  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
//  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
//  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
//  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
//  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
//  97, 98, 99, 100,
//  ... 49899 more items
// ]
// merge: 41.822ms