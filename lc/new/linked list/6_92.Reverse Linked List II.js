// https://leetcode.com/problems/reverse-linked-list-ii/

// 思路：找到反转的开始点，然后进行局部反转，最后将反转后的链表与原始链表进行衔接

// TIME: O(n)
// SPACE: O(1)

function reverseBetween(head, left, right) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let cur = head;
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
        cur = cur.next;
    }
    let prevCopy = prev;
    for (let i = 0; i < right - left + 1; i++) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    prevCopy.next.next = cur;
    prevCopy.next = prev;
    return dummy.next;
}