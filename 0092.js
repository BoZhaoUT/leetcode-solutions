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
    const test = reverse(head)
    console.log("test", test)
    let prev
    let curr = head
    let i = 1
    while (i < m) {
        prev = prev ? head : curr
        curr = curr.next
        i++
    }
    const newHead = reverse(curr, n - m + 1)

    console.log("prev", prev.val)
    console.log("curr", curr.val)
    console.log("head", head)
    console.log("new head", newHead)
};

// reverse n nodes
const reverse = (head) => {
    if (head.next === null) {
        return head
    }
    let prev = head
    let curr = head.next
    head.next.next = null
    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return curr
}