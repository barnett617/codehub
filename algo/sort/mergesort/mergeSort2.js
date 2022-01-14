// def merge_sort(nums):
//     # bottom cases: empty or list of a single element.
//     if len(nums) <= 1:
//         return nums

//     pivot = int(len(nums) / 2)
//     left_list = merge_sort(nums[0:pivot])
//     right_list = merge_sort(nums[pivot:])
//     return merge(left_list, right_list)


// def merge(left_list, right_list):
//     left_cursor = right_cursor = 0
//     ret = []
//     while left_cursor < len(left_list) and right_cursor < len(right_list):
//         if left_list[left_cursor] < right_list[right_cursor]:
//             ret.append(left_list[left_cursor])
//             left_cursor += 1
//         else:
//             ret.append(right_list[right_cursor])
//             right_cursor += 1
    
//     # append what is remained in either of the lists
//     ret.extend(left_list[left_cursor:])
//     ret.extend(right_list[right_cursor:])
    
//     return ret

function merge_sort(nums) {
  if (nums.length <= 1) return nums;

  let pivot = Math.floor(nums.length >> 1);
  let left = merge_sort(nums.slice(0, pivot));
  let right = merge_sort(nums.slice(pivot));
  return merge(left, right);
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
  res = res.concat(arr1.slice(left), arr2.slice(right));
  return res;
}

console.log(merge_sort([5, 2, 3, 1]));