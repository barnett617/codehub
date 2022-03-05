// https://leetcode.com/problems/insertion-sort-list/

// 思路：创建哨兵节点、前置节点、当前节点、后置临时节点
// 哨兵节点指向新的有序链表，初始为空
// 将链表内的每个节点与有序链表进行比较，找到插入点进行插入，最后记得还原有序链表头指针

// TIME: O(n^2)
// SPACE: O(1)

function insertionSortList(head) {
    let dummy = new ListNode();
    let prev = dummy;
    let cur = head;
    while (cur) {
        while (prev.next && prev.next.val < cur.val) prev = prev.next;
        const next = cur.next;
        cur.next = prev.next;
        prev.next = cur;

        prev = dummy;
        cur = next;
    }
    return dummy.next;
}