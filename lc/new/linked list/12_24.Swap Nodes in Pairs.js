// https://leetcode.com/problems/swap-nodes-in-pairs/

// 思路：递归将相邻的两个节点进行交换

function swapPairs(head) {
    if (!head || !head.next) return head;
    const first = head;
    const second = head.next;
    first.next = swapPairs(second.next);
    second.next = first;
    return second;
}

// 思路：使用哨兵节点作为前置节点，将其后面连个节点进行交换
// 并每次跳过两个节点

function swapPairs(head) {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let cur = head;
    while (cur && cur.next) {
        const first = cur;
        const second = cur.next;
        prev.next = second;
        first.next = second.next;
        second.next = first;
        prev = first;
        cur = prev.next;
    }
    return dummy.next;
}