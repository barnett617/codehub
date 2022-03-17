// https://leetcode.com/problems/reverse-nodes-in-k-group/

// 思路：递归将k长度的子链表进行反转，并将反转后的部分进行连接

function reverseKGroup(head, k) {
    function reverse(head, k) {
        let prev = null;
        let cur = head;
        while (k--) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
    function helper(head, k) {
        let cnt = 0;
        let cur = head;
        while (cnt < k && cur) {
            cur = cur.next;
            cnt++;
        }
        if (cnt < k) return head;
        const newHead = reverse(head, k);
        head.next = helper(cur, k);
        return newHead;
    }
    return helper(head, k);
}

// 思路：使用一个指向新链表头的指针用于最终返回
// 用一个当前k个元素的子链表尾指针，用于连接后续反转后的子链表

function reverseKGroup(head, k) {
    function reverse(head, k) {
        let prev = null;
        let cur = head;
        while (k--) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    let finalNewHead = null;
    let ktail = null;
    let cur = head;
    while (cur) {
        let cnt = 0;
        cur = head;
        while (cnt < k && cur) {
            cur = cur.next;
            cnt++;
        }
        if (cnt === k) {
            const newHead = reverse(head, k);
            if (!finalNewHead) finalNewHead = newHead;
            if (ktail) ktail.next = newHead;
            ktail = head;
            head = cur;
        }
    }
    if (ktail) ktail.next = head;
    if (finalNewHead) return finalNewHead;
    return head;
}