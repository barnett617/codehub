// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// 思路：先遍历一遍链表，并通过累加变量计算出链表长度
// 然后根据链表长度计算出需要发生删除的位置
// TIME: O(n)
// SPACE: O(1)
function removeNthFromEnd(head, n) {
    let curNode = head;
    let len = 0;
    while (curNode) {
        curNode = curNode.next;
        len++;
    }
    if (n === len) return head.next;

    let indexBeforeRemove = len - n - 1;
    curNode = head;
    for (let i = 0; i < indexBeforeRemove; i++) {
        curNode = curNode.next;
    }
    curNode.next = curNode.next.next;

    return head;
}

// 思路：先用一个指针将链表移动n位，然后启动另一个指针与其一同移动，则当前一个指针指向链表尾时，后一个指针所在位置即是需要删除的位置

function removeNthFromEnd(head, n) {
    let curNode = head;

    for (let i = 0; i < n; i++) {
        curNode = curNode.next;
    }
    if (!curNode) return head.next;

    let indexBeforeRemove = head;
    while (curNode.next) {
        curNode = curNode.next;
        indexBeforeRemove = indexBeforeRemove.next;
    }
    indexBeforeRemove.next = indexBeforeRemove.next.next;

    return head;
}