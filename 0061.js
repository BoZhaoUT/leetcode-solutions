/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // special case
    if (!head || k === 0) {
        return head
    }
    let prev = head
    let curr = head
    let i = 0
    let length = 1
    // set prev and curr to be k nodes apart
    while (i < k && curr.next) {
        curr = curr.next
        length++
        i++
    }
    
    // reach the end of the list
    while (curr.next) {
        prev = prev.next
        curr = curr.next
        length++
    }

    // no rotation
    if (k % length === 0 || length === 1) {
        return head
    }

    let newHead
    if (k < length) {
        curr.next = head
        newHead = prev.next
        prev.next = null
    } else {
        newHead = rotateRight(head, k % length)
    }
    return newHead
};
