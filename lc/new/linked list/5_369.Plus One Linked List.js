// https://leetcode.com/problems/plus-one-linked-list/

// 思路：反转链表，然后对首位进行加1，如果发生进位则对进位进行处理
// 由于只加1，所以结果会很快结束

// TIME: O(n)
// SPACE: O(1)

function plusOne(head) {
    function reverse(head) {
        let prev = null;
        let cur = head;
        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
    const newHead = reverse(head);
    let cur = newHead;
    while (cur) {
        if (cur === newHead && cur) {
            cur.val += 1;
        }
        if (cur.val === 10) {
            cur.val = 0;
            if (cur.next) {
                cur.next.val += 1;
                cur = cur.next;
            } else {
                cur.next = new ListNode(1);
                break;
            }
        } else {
            break;
        }
    }
    return reverse(newHead);
}