class Node {
    constructor(value, min, next = null) {
        this.value = value
        // this is the smallest value from this node and all nodes
        // are after it
        this.min = min
        this.next = next
    }
}

class MinStack {
    constructor() {
        this.head = null
    }

    push(x) {
        if (!this.head) {
            this.head = new Node(x, x)
        } else {
            const min = Math.min(x, this.head.min)
            const newNode = new Node(x, min, this.head)
            this.head = newNode
        }
    }

    pop() {
        this.head = this.head.next
    }

    top() {
        return this.head.value
    }

    getMin() {
        return this.head.min
    }
}

const runTest = (operations, params) => {
    const minStack = new MinStack()

    for (let i = 1; i < operations.length; i++) {
        const operation = operations[i]
        const param = params[i]
        console.log(`\n== operation=${operation}, param=${param}`)
        switch (operation) {
            case "push":
                minStack.push(param)
                break
            case "pop":
                minStack.pop()
                break
            case "top":
                minStack.top()
                break
            case "getMin":
                minStack.getMin()
        }
    }
}

runTest(["MinStack","push","push","push","getMin","pop","top","getMin"], [[],[-2],[0],[-3],[],[],[],[]])
