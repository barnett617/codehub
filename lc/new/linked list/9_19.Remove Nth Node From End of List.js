// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// 思路：先统计出链表长度，然后移动n-长度位置进行节点跳过
// 或使用快慢指针控制一个长度为n的距离，同时移动快慢指针，当快指针指向链表尾时，慢指针到达删除位置
// 注意对超出链表长度的n做提前返回处理

function removeNthFromEnd(head, n) {
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    if (n >= len) return head.next;
    const index = len - n - 1;
    cur = head;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return head;
}

function removeNthFromEnd(head, n) {
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) return head.next;
    let slow = head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}