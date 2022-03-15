// https://leetcode.com/problems/merge-k-sorted-lists/

// 思路：依次将两两链表进行合并，注意每次递增要+2，对每一对链表进行合并
// 注意处理数组越界时使用空节点而不是未定义节点

// TIME: O(nlogk)
// SPACE: O(k)

function mergeKLists(lists) {
    if (!lists || !lists.length) return null;
    while (lists.length > 1) {
        const temp = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = lists[i + 1] || null;
            temp.push(mergeTwo(l1, l2));
        }
        lists = temp;
    }
    function mergeTwo(l1, l2) {
        const dummy = new ListNode();
        let cur = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        cur.next = l1 || l2;
        return dummy.next;
    }
    return lists[0];
}