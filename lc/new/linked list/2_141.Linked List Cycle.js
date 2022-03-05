// https://leetcode.com/problems/linked-list-cycle/

// 思路：使用快慢指针，如果相遇则存在环
// 一定能相遇的原因是没移动一步，二者距离-1，当二者都在环内时，距离多远，则N步后二者必相遇

function hasCycle(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) return true;
    }
    return false;
}