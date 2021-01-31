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
    // remove first N duplicates
    if (next && next.val === curr.val) {
        return deleteDuplicates(next.next)
    }

    let toDelete
    while (curr) {
        // found duplicate
        if (curr.val === toDelete) {
            prev.next = next
        } else if (next && curr.val === next.val) { // found new duplicate
            toDelete = curr.val
            prev.next = prev && next.next
            curr = next.next
            next = curr && curr.next
        } else { // distinct value
            if (prev) {
                prev.next = curr
            } else {
                prev = curr
                curr = curr.next
                next = curr && curr.next
            }
        }
    }
    return head
};