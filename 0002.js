# 2
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
var addTwoNumbers = function(l1, l2) {
    let carryOn = 0
    let head = new ListNode()
    let prev = null
    while (l1 || l2 || carryOn) {
        let sum = 0
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        sum += carryOn
        const newNode = new ListNode()
        if (sum >= 10) {
            carryOn = 1
            newNode.val = sum - 10
        } else {
            carryOn = 0
            newNode.val = sum
        }
        if (prev) {
            prev.next = newNode
            prev = newNode
        } else {
            head = newNode
            prev = head
        }
    }
    return head
};
