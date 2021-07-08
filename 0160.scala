/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */

object Solution {
    def getIntersectionNode(headA: ListNode, headB: ListNode): ListNode = {
        // special case
        if (headA == null || headB == null) {
            return null
        }

        var currA = headA
        var currB = headB
        while (currA != currB) {
            currA = currA == null ? headB : currA.next
            currB = currB == null ? headA : currB.next
        }
        return currA
    }
}

// if 2 linked list have an intersection, then the intersection must be the
// tails of each linked list. because the definition of intersection (in this question)
// is 2 nodes point to the same value in memory. 2 nodes have the same value but point
// to different values in memory is not called intersection.




// var getIntersectionNode = function(headA, headB) {
//     if (!headA || !headB) return null;
//     var curA = headA;
//     var curB = headB;
//     while (curA != curB) {
//         curA = curA == null ? headB : curA.next;
//         curB = curB == null ? headA : curB.next;
//     }
//     return curA;
// };