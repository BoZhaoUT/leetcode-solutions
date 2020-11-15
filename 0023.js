/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head = null, prev
    let empties = 0
    for (let i = 0; i < lists.length; i++) {
        empties += lists[i] ? 0 : 1
    } 
    while (empties < lists.length) {
        lists.sort((a, b) => {
            if (a && b) {
                return a.val - b.val
            }
            return a ? -1 : 1
        })
        curr = lists[0]
        if (!head) {
            head = curr
        } else {
            prev.next = curr
        }
        prev = curr
        lists[0] = lists[0].next
        if (!lists[0]) {
            empties++
        }
    }
    return head
};
