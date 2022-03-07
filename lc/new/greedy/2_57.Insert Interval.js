// https://leetcode.com/problems/insert-interval/

// 思路：创建一个新数组用于存储结果，先将原开始时间小于新时间开始时间的项插入
// 然后将新时间插入，如果新时间开始时间晚于当前最后一个时间的结束时间，则直接插入
// 否则需要取出最后一个时间进行结束时间的更新
// 然后继续插入剩余元素，并不断比较新元素的开始时间是否晚于最后一个元素的结束时间

// TIME: O(n)
// SPACE: O(n)

function insert(intervals, newInterval) {
    const res = [];
    let i = 0;
    let n = intervals.length;
    while (i < n && intervals[i][0] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }
    if (!res.length || res[res.length - 1][1] < newInterval[0]) {
        res.push(newInterval);
    } else {
        const last = res.pop();
        last[1] = Math.max(last[1], newInterval[1]);
        res.push(last);
    }
    while (i < n) {
        if (res[res.length - 1][1] < intervals[i][0]) {
            res.push(intervals[i]);
        } else {
            const last = res.pop();
            last[1] = Math.max(last[1], intervals[i][1]);
            res.push(last);
        }
        i++;
    }
    return res;
}
