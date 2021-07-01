/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */

object Solution {
    def hasCycle(head: ListNode): Boolean = {
        if (!head || !head.next) {
            return false
        }

        var slow = head
        var fast = head.next

        var result = false

        while (slow != null && fast != null) {
            
        }

        return result
        
    }
}