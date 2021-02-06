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
    let prev
    let curr = head
    let i = 0
    while (i < m) {
        prev = prev ? head : curr
        curr = curr.next
        i++
    }




};

const reverse = head => {
    if (!head.next) {
        return head
    }
    let rest = reverse(head.next)
}
