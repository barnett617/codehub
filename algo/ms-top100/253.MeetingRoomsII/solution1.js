/**
 * @param {number[][]} intervals
 * @return {number}
 */
const MinHeap = require('../../utils/MinHeap')
var minMeetingRooms = function(intervals) {
  let count = 0;
  
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = new MinHeap();
  heap.add(intervals[0][1]);
  
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] >= heap.peek()) {
          heap.poll();
      }
      
      heap.add(intervals[i][1]);
  }
  
  return heap.size();
};

module.exports = minMeetingRooms