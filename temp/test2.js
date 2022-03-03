// 链表
// 0->1->2->3->4->5->null

// 0  1  2  3  4  5 

// 0->2->1->4->3->5->null


// 0->1->2->3->4->null
// 0->2->1->4->3->null

// 0->1->2->null
// 0->2->1->null

function func(head) {
    // if (!head || !head.next) return head;

    // let cur = head;
    // let index = -1;
    // while (cur && cur.next) {
    //     index++;
    //     const temp = cur.next;
    //     cur.next = temp.next;
    //     if (index % 2 === 1) {

    //     }
    //     cur = cur.next;
    // }

    // return head;

    if (!head || !head.next || !head.next.next) return head;

    let index = 0;
    let cur = head;
    // 0->1->2->3->4->null
    // 0->2->1->4->3->null

    // 0->1->2->3->4->5->null
    // 0->2->1-4->3

    // 0->1->2->null
    // 0->2->1->null

    // 0->1->null
    // 0->1->null
    let temp;
    let newHead;
    while (cur) {
        if (index % 2 === 0 && cur.next && cur.next.next) {
            if (cur.next.next.next) {
                temp = cur.next.next.next;
                cur.next.next.next = null;
            }
            newHead = reverse(cur.next);
            cur.next = newHead;
            if (cur.next.next.next) {
                newHead.next.next = temp;
            }
            cur = cur.next.next;
        } else if (cur.next) {
            cur.next = temp;
        }
    }

    return head;
}