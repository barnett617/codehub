var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let pre = null;
    let cur = head;
    let tempNext = null;
    while (cur !== null) {
        tempNext = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tempNext;
    }
    return pre;
}