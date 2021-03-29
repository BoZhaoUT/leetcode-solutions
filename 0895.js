class FreqStack {
    constructor() {
        this.frequency = {}
        this.stack = []
    }

    push(val) {
        if (this.frequency[val] === undefined) {
            this.frequency[val] = 1
        } else {
            this.frequency[val] += 1
        }
        const frequency = this.frequency[val]
        // each element in this.stack is an array
        // the index of element is the element's frequency
        // the elements in the array are sorted in the order
        // they are inserted
        if (this.stack.length < frequency) {
            this.stack.push([val])
        } else {
            this.stack[frequency - 1].push(val)
        }
    }

    pop() {
        // get the most frequent item
        let result
        const length = this.stack.length
        const topLevel = this.stack[length - 1]
        // remove top level if there is only 1 item
        if (topLevel.length === 1) {
            result = topLevel[0]
            this.stack.pop()
        } else {
            result = topLevel.pop()
        }
        // reduce frequency
        if (this.frequency[result] === 1) {
            delete this.frequency[result]
        } else {
            this.frequency[result] -= 1
        }
        return result
    }
}




// exceeds time limit
// class Node {
//     constructor(val, next = null) {
//         this.val = val
//         this.next = next
//     }
// }

// class FreqStack {
//     constructor() {
//         this.frequency = {}
//         // initialize a linked-list with a dummy head
//         this.head = new Node(null)
//     }

//     push(val) {
//         // update frequency
//         if (this.frequency[val] === undefined) {
//             this.frequency[val] = 1
//         } else {
//             this.frequency[val] += 1
//         }
//         // insert val into linked list to keep truck of insertion order
//         const node = new Node(val, this.head.next)
//         this.head.next = node
//     }

//     pop() {
//         // get most frequent values 
//         let highestFrequencyValue = 0
//         let highestFrequencyKeys = new Set()
//         for (const key in this.frequency) {
//             if (this.frequency[key] > highestFrequencyValue) {
//                 highestFrequencyValue = this.frequency[key]
//                 highestFrequencyKeys = new Set([+key])
//             } else if (this.frequency[key] === highestFrequencyValue) {
//                 highestFrequencyKeys.add(+key)
//             }
//         }
//         // find val has high frequency
//         let prev = this.head
//         let curr = prev.next
//         let result
//         while (curr && result === undefined) {
//             if (highestFrequencyKeys.has(curr.val)) {
//                 result = curr.val
//                 prev.next = curr.next
//             } else {
//                 prev = curr
//                 curr = curr.next
//             }
//         }
//         // reduce the frequency of this value by 1
//         if (this.frequency[result] === 1) {
//             delete this.frequency[result]
//         } else {
//             this.frequency[result] -= 1
//         }
//         return result
//     }
// }

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

const runTest = (operations, params) => {
    const stack = new FreqStack()

    for (let i = 1; i < operations.length; i++) {
        const operation = operations[i]
        const param = params[i]
        // console.log(`\n== operation=${operation}, param=${param}`)
        switch (operation) {
            case "push":
                stack.push(param[0])
                break
            case "pop":
                console.log(stack.pop())
        }
    }
}

const operations = ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"]
const params = [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]

runTest(operations, params)
