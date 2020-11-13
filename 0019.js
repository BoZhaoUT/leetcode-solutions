/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head
    let tail = head
    let gap = 0
    while (gap < n) {
        tail = tail.next
        gap++
    }
    
    // special case: the n-th last node is head
    if (!tail) {
        return head.next
    }
    
    while (tail.next) {
        curr = curr.next
        tail = tail.next
    }
    
    curr.next = curr.next.next
    return head
};
