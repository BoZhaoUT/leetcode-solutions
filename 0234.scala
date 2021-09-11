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
        println(slow.x)
        // even or odd
        var isEven = fast == null
        // reverse the 2nd half


        // compare

        // un-reverse the 2nd half if needed
        return true
    }

    def reverse(head: ListNode, prev: ListNode = null): ListNode = {
        if (head == null) {
            return prev
        }
        head.next = prev
        reverse(head.next, prev)
    }
}



class ListNode(_x: Int = 0, _next: ListNode = null) {
    var next: ListNode = _next
    var x: Int = _x
}

val four = new ListNode(_x = 4)
val three = new ListNode(3, four)
val two = new ListNode(2, three)
val one = new ListNode(1, two)


val reversed = Solution.reverse(one)

println(reversed.x)
println(reversed.next.x)
println(reversed.next.next.x)
println(reversed.next.next.next.x)