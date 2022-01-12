var merge = function(nums1, m, nums2, n) {
  const nums1Copy = new Array(m);
  for (let i = 0; i < m; i++) {
    nums1Copy[i] = nums1[i];
  }

  let p1 = 0, p2 = 0;
  for (let p = 0; p < m + n; p++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[p] = nums1Copy[p1++];
    } else {
      nums1[p] = nums2[p2++];
    }
  }

  return nums1;
}

module.exports = merge;