/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
class LinkedList {
    constructor(length) {
        this.head = length > 0 && new ListNode(0)
        let prev = this.head
        let i = 1
        while (i < length) {
            const newNode = new ListNode(i)
            prev.next = newNode
            prev = newNode
            i++
        }
    }

    print(limit = 10) {
        let result = ""
        let curr = this.head
        let i = 0
        while (curr && i < limit) {
            result += `${curr.val} `
            curr = curr.next
            i++
        }
        console.log(result)
    }
}
// const newLL = new LinkedList(12)
// newLL.print()

