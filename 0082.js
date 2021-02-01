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
    let toDelete 
    while (head && head.next && head.val === head.next.val) {
        toDelete = head.val
        while (head && head.val === toDelete) {
            head = head.next
        }
    }
    if (head) {
        head.next = deleteDuplicates(head.next)
    }
    return head
};