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

// const node = new ListNode(0)
// node.print()

// node.add(1)
// node.print()

// node.addN(5)
// node.print()

// console.log(node.length())