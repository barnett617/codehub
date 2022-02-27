// https://leetcode.com/problems/merge-two-sorted-lists/

// 思路：创建哨兵节点，并初始化一个当前之前指针从哨兵节点开始，用于跟踪新链表的节点遍历
// 当两个链表都有值时，比较更小的放入新链表，当某一个遍历结束后，将另一个剩下的部分直接接入新链表

// TIME: O(n)
// SPACE: O(1)

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
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

// 思路：递归处理该方法，如果某个链表为空，则返回另外一个
// 如果二者都不为空，则比较二者谁当前节点更小，将更小的作为新链表头，并递归合并该节点后面的部分与另一链表

function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}