/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
    def isPalindrome(head: ListNode): Boolean = {
        var slow = head
        var fast = head
        // find middle
        while (fast != null && fast.next != null) {
            slow = slow.next
            fast = fast.next.next
        }
        println(count)
        println(slow.x)
        // even or odd
        var isEven = fast == null
        // reverse the 2nd half


        // compare

        // un-reverse the 2nd half if needed
        return true
    }

    def reverse(head): ListNode = {
        val temp = reverse(head.next)
        temp.next = head
        return temp
    }
}