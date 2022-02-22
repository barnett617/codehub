// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

// 思路：使用快慢指针并结合各种情况，指定出慢指针停止的时机
// 注意处理只有一个节点的情况

function deleteMiddle(head) {
    if (!head.next) return null;

    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        if (!fast.next.next || !fast.next.next.next) {
            slow.next = slow.next.next;
            break;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return head;
}