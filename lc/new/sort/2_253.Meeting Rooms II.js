// https://leetcode.com/problems/meeting-rooms-ii/

// 思路：对开始时间进行排序，然后使用小顶堆维护最早结束的会议在堆顶
// 当最新会议的开始时间比堆顶的结束时间早，则意味一定需要新增会议室
// 此时将元素入堆即可，堆内会将最早结束的元素置于堆顶
// 当最新会议的开始时间晚于等于堆顶元素结束时间，则意味堆顶元素可以出堆，该会议室可被释放利用
// 此时需要将新的会议入堆，并将下一个最早结束的会议置于堆顶

// TIME: O(nlogn)
// SPACE: O(n)
function minMeetingRooms(intervals) {
    const n = intervals.length;
    if (n < 2) return n;

    intervals.sort((a, b) => a[0] - b[0]);

    const minHeap = new MinHeap();
    minHeap.add(intervals[0]);
    for (let i = 1; i < n; i++) {
        const cur = intervals[i];
        if (cur[0] >= minHeap.peak()[1]) {
            minHeap.pop()
        }
        minHeap.add(cur);
    }
    return minHeap.size();
}

// 思路：将所有会议的开始时间和结束时间分开各自进行排序
// 每个会议开始时，只关心是否存在可以释放的会议室，即是否存在有会议结束时间小于等于当前时间
// 因为结束时间有序，所以可以将最小满足的时间更新为次小的
// 当所有会议开始时间遍历结束，则意味统计完最多需要的会议室数
// TIME: O(nlogn)
// SPACE: O(n)

function minMeetingRooms(intervals) {
    const n = intervals.length;
    if (n < 2) return n;

    const starts = [];
    const ends = [];
    for (const [start, end] of intervals) {
        starts.push(start);
        ends.push(end);
    }
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    let startFlag = 0;
    let endFlag = 0;
    let count = 0;
    while (startFlag < n) {
        if (starts[startFlag] < ends[endFlag]) {
            count++;
        } else {
            endFlag++;
        }
        startFlag++;
    }
    return count;
}

function swap(list, a, b) {
    if (a === b) return;
    const temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}
function MinHeap() {
    this.heap = ['minHeap'];
    this.realSize = 0;
}
MinHeap.prototype.add = function(element) {
    this.heap.push(element);
    this.realSize++;

    let curIndex = this.realSize;
    let parentIndex = Math.floor(curIndex / 2);
    while (this.heap[curIndex][1] < this.heap[parentIndex][1] && curIndex > 1) {
        swap(this.heap, curIndex, parentIndex);
        curIndex = parentIndex;
        parentIndex = Math.floor(curIndex / 2);
    }
}
MinHeap.prototype.pop = function() {
    if (this.realSize < 1) return;
    const removedElement = this.heap[1];
    this.heap[1] = this.heap[this.realSize];
    this.heap.pop();
    this.realSize--;

    let curIndex = 1;
    while (curIndex <= Math.floor(this.realSize / 2)) {
        let leftChildIndex = curIndex * 2;
        let rightChildIndex = curIndex * 2 + 1;
        if (this.heap[rightChildIndex] === undefined) {
            if (this.heap[leftChildIndex][1] < this.heap[curIndex][1]) {
                swap(this.heap, leftChildIndex, curIndex);
                curIndex = leftChildIndex;
            } else {
                break;
            }
        } else if (this.heap[leftChildIndex][1] < this.heap[curIndex][1] || this.heap[rightChildIndex][1] < this.heap[curIndex][1]) {
            if (this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1]) {
                swap(this.heap, leftChildIndex, curIndex);
                curIndex = leftChildIndex;
            } else {
                swap(this.heap, rightChildIndex, curIndex);
                curIndex = rightChildIndex;
            }
        } else {
            break;
        }
    }

    return removedElement;
}
MinHeap.prototype.peak = function() {
    return this.heap[1];
}
MinHeap.prototype.size = function() {
    return this.realSize;
}