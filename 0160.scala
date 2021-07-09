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
            currA = if (currA == null) headB else currA.next
            currB = if (currB == null) headA else currB.next
        }
        return currA
    }
}

// if 2 linked lists have an intersection, then the intersection must be the
// tails of each linked list. The definition of intersection (in this question)
// is 2 nodes point to the same value in memory. 2 nodes have the same value but point
// to different values in memory is not called intersection.

// why the reason 2 pointer will travel to the same node? assume
// 1st linked list: A -> B -> C -> D -> E
// 2nd linked list: F -> G -> H 

// currA travels through A -> B -> C -> D -> E -> F -> G -> H
// currB travels through F -> G -> H -> A -> B -> C -> D -> E

// if G -> H and D -> E point to the same address in the memeory
// then it's the intersection


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