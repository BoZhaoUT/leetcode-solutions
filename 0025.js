/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // special cases
    if (k === 1 || !head || !head.next) {
        return head
    }
    let prev
    let curr = head
    let next = curr.next
    let numReversed = 1
    let prevTail = head
    let currTail
    let result
    while (next) {
        if (numReversed < k) {
            numReversed++
        } else { // numReversed === k
            if (!currTail) { // reached the end of the first group
                currTail = curr.next
                result = curr
            } else { // there is a previous group
                prevTail.next = curr
                prevTail = currTail
            }
            currTail = next
            numReversed = 1
        }
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    // prev.next = null
    return result
};

