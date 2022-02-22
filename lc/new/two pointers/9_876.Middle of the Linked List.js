// https://leetcode.com/problems/middle-of-the-linked-list/

// 思路：使用快慢指针同时移动，快指针每次移动两个节点，慢指针每次移动一个节点
// 当快指针指向空节点或快指针的下一个节点指向空节点，则此时的慢指针即是链表中点
// TIME: O(n)
// SPACE: O(1)

function middleNode(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}