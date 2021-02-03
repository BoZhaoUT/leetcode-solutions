/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let beforeHead = null
    let beforeTail = null
    let afterHead = null
    let afterTail = null
    let curr = head
    while (curr) {
        if (curr.val < x) {
            if (!beforeHead) {
                beforeHead = beforeTail = curr
            } else {
                beforeTail.next = curr
                beforeTail = curr
            }
        } else {
            if (!afterHead) {
                afterHead = afterTail = curr
            } else {
                afterTail.next = curr
                afterTail = curr
            }
        }
        curr = curr.next
    }
    if (afterTail) {
        afterTail.next = null
    }
    if (beforeHead) {
        beforeTail.next = afterHead
        return beforeHead
    }
    return afterHead
};
