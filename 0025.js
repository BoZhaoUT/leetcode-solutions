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
    while (curr) {
        if (numReversed < k) {
            numReversed++
        } else { // numReversed === k
            if (!currTail) { // reached the end of the first group
                currTail = curr.next
                result = curr
            } else { // there is a previous group
                prevTail.next = curr
                prevTail = currTail
                currTail = curr.next
            }
            numReversed = 1
        }
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    // no left-out nodes
    if (numReversed === 1) {
        prevTail.next = null
    } else { // revert the reversing on left-out nodes
        prevTail.next = currTail
        // prev is the the head of list needs to be reverted
        curr = prev
        prev = null
        let i = 1
        while (i < numReversed) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            i++
        }
    }
    return result
};

// test linked-list questions in terminal
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }

    add(val, next) {
        const tail = this.findTail()
        const newNode = new ListNode(val, next)
        tail.next = newNode
    }

    addN(num) {
        const tail = this.findTail()
        let val = tail.val
        let prev = tail
        while (num > 0) {
            const newNode = new ListNode(++val)
            prev.next = newNode
            prev = newNode
            num--
        }
    }

    findTail() {
        let curr = this
        while (curr.next) {
            curr = curr.next
        }
        return curr
    }

    print(limit = 10) {
        let result = ""
        let curr = this
        let i = 0
        while (curr && i < limit) {
            result += `${curr.val} `
            curr = curr.next
            i++
        }
        console.log(result)
    }

    length() {
        let curr = this
        let result = 0
        const limit = 100
        while (curr && result < limit) {
            curr = curr.next
            result ++
        }
        if (result === limit) {
            console.log("circular reference detected")
            return limit
        }
        return result
    }
}


const head = new ListNode(1)
head.addN(7)
// console.log(head.val, head.next.val)
head.print()
const result = reverseKGroup(head, 3)
result.print()

