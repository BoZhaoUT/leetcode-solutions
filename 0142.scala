/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */

object Solution {
    def detectCycle(head: ListNode): ListNode = {
        var slow = head
        var fast = head

        var prev: ListNode = null
        var result: ListNode = null

        while (result == null && fast != null && fast.next != null) {
            prev = fast
            fast = fast.next
            // check cycle
            if (fast == slow) {
                result = prev
            }
            slow = slow.next
            fast = fast.next
        }
        return result
    }
}