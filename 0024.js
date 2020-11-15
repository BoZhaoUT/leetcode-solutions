/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // special cases
    if (!head) {
        return null
    } else if (!head.next) {
        return head
    }
    let prev
    let curr = head
    let next = head.next
    head = next
    while (curr && next) {
        curr.next = next.next
        next.next = curr
        if (prev) {
            prev.next = next
        }
        prev = curr
        curr = curr.next
        next = curr ? curr.next : null
    }
    return head
};
