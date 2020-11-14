/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null
    }
    let head, prev, curr
    while (l1 || l2) {
        if (!l2 || l1 && (l1.val <= l2.val)) {
            curr = l1
            l1 = l1.next
        } else {
            curr = l2
            l2 = l2.next
        }
        if (!head) {
            head = curr
            prev = curr
        } else {
            prev.next = curr
            prev = curr
        }
    }
    return head
};
