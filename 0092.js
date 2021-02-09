/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head.next || m === n) {
        return head
    }
    let prev = null
    let curr = head
    let i = 1
    while (i < m) {
        prev = curr
        curr = curr.next
        i++
    }
    const before = prev
    const middleTail = curr
    prev = curr
    curr = curr.next
    while (i < n) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        i++
    }
    before.next = prev
    const after = curr.next
    middleTail.next = curr
    return head
};
