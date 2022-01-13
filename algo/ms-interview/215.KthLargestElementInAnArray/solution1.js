/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  function MaxHeap() {
      this.list = [0];
  }
  MaxHeap.prototype.add = function(element) {
      const heap = this.list;
      heap.push(element)
      let index = heap.length - 1;
      let parent = Math.floor(index / 2);
      while (heap[index] > heap[parent] && index > 1) {
        [heap[index], heap[parent]] = [heap[parent], heap[index]];
        index = parent;
        parent = Math.floor(index / 2);
      }
  }
  MaxHeap.prototype.pop = function() {
      const heap = this.list;
      const removeElement = heap[1];
      heap[1] = heap[heap.length - 1];
      heap.pop();
      const newSize = heap.length - 1;
      let index = 1;
      while (index < newSize && index <= Math.floor(newSize / 2)) {
        let left = index * 2;
        let right = left + 1;
        if (heap[index] < heap[left] || (heap[right] !== undefined && heap[index] < heap[right])) {
          if (heap[right] !== undefined && heap[right] > heap[left]) {
            [heap[right], heap[index]] = [heap[index], heap[right]];
            index = right;
          } else {
            [heap[left], heap[index]] = [heap[index], heap[left]];
            index = left;
          }
        } else {
          break;
        }
      }
      return removeElement;
  }
  const heap = new MaxHeap();
  nums.forEach(num => heap.add(num));
  let ans = 0;
  for (let i = 0; i < k; i++) {
      ans = heap.pop();
  }
  return ans;
};

module.exports = findKthLargest