// https://leetcode.com/problems/sort-list/

// 思路：归并排序，递归拆分，对拆分后的元素进行排序，然后合并链表

// TIME: O(nlogn)
// SPACE: O(logn)

function sortList(head) {
    function sort(head) {
        if (!head || !head.next) return head;
        const mid = getMid(head);
        const temp = mid.next;
        mid.next = null
        mid = temp;
        let cur = head;
        cur = sort(cur);
        mid = sort(mid);
        return merge(cur, mid);
    }
    function getMid(head) {
        let fast = head.next;
        let slow = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    function merge(list1, list2) {
        let dummy = new ListNode();
        let cur = dummy;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }
        cur.next = list1 || list2;
        return dummy.next;
    }
    return sort(head);
}