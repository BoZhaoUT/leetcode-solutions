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
        // reverse the 2nd half
        val reversed = reverse(slow)._1
        // first and second half of the linked list
        var first = head
        var second = reversed
        // compare
        while (second != null && first.x == second.x) {
            first = first.next
            second = second.next
        }
        return second == null
    }

    // return head and tail of a reversed linked list
    def reverse(head: ListNode): (ListNode, ListNode) = {
        // reach tail
        if (head.next == null) {
            return (head, head)
        }
        val reversed = reverse(head.next)
        val newHead = reversed._1
        val newTail = reversed._2
        newTail.next = head
        head.next = null
        return (newHead, head)
    }
}



// class ListNode(_x: Int = 0, _next: ListNode = null) {
//     var next: ListNode = _next
//     var x: Int = _x
// }

// val four = new ListNode(1)
// val three = new ListNode(2, four)
// val two = new ListNode(2, three)
// val one = new ListNode(1, two)

// println(one.x)
// println(one.next.x)
// println(one.next.next.x)
// println(one.next.next.next.x)
// println(one.next.next.next.next)


// var result = Solution.isPalindrome(one)
// println(result)
