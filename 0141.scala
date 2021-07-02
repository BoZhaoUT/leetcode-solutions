/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */

object Solution {
    def hasCycle(head: ListNode): Boolean = {
        var slow = head
        var fast = head

        var result = false

        while (!result && fast != null && fast.next != null) {
            fast = fast.next
            // check cycle
            if (fast == slow) {
                result = true
            }
            slow = slow.next
            fast = fast.next
        }
        return result
    }
}