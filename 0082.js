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
var deleteDuplicates = function(head) {
    let prev
    let curr = head
    let next = head.next
    while (curr) {
        if (curr.val !== next.val) {
            next = next.next
            curr = curr.next
            prev = prev ? prev.next : head
        } else {
            prev.next = next
            curr = next
            next.next
        }
    }
    return head
};
