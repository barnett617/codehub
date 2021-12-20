const MinHeap = require('../MinHeap')

const heap = new MinHeap();
heap.add(0)
console.log(heap.peek())
heap.add(1)
console.log(heap.peek())
heap.add(-1)
console.log(heap.peek())
heap.add(2)
console.log(heap.peek())
heap.add(-2)
console.log(heap.peek())

console.log(heap.poll())
console.log(heap.peek())

//    -1
//       0
//         1
//           2
//    