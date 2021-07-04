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

        while (fast != null && fast.next != null && fast.next.next != null) {
            slow = slow.next
            fast = fast.next.next
            // a cycle occured
            if (slow == fast) {
                // put slow back to head
                slow = head
                while (slow != fast) {
                    slow = slow.next
                    fast = fast.next
                }
                return slow
            }
        }
        return null
    }
}


// var detectCycle = function(head){
//     let slow = head;
//     let fast = head;
//     while(fast && fast.next && fast.next.next){
//         slow = slow.next;
//         fast = fast.next.next;
//         if(slow === fast){
//             slow = head;
//             while(slow !== fast){
//                 slow = slow.next;
//                 fast = fast.next;
//             }
//             return slow;
//         }
//     }
//     return null;
// }