// https://leetcode.com/problems/meeting-rooms/

// 思路：将所有元素按照某个属性进行排序
// 然后保持记录一个结束时间最大的值，以第一个元素作为初始值
// 从第二个元素开始遍历每个值，如果有早于最晚结束时间开始的会议，则得出false结果
// 如果没有，则比较当前元素的结束时间和目前记录的最晚时间，更新为更晚者

// TIME: O(nlogn)
// SPACE: O(1)

function canAttendMeetings(intervals) {
    if (intervals.length < 2) return true;

    intervals.sort((a, b) => a[0] - b[0]);

    let endMost = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i];
        if (cur[0] < endMost[1]) {
            return false;
        }
        if (cur[1] > endMost[1]) {
            endMost = cur;
        }
    }
    return true;
}