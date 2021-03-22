class Heap {
    constructor() {
        this.nodes = []
    }

    push(key) {
        let index = this.nodes.length
        this.nodes.push(key)
        this.bubbleUp(index)
    }

    pop() {
        this.swap(0, this.nodes.length - 1)
        const result = this.nodes.pop()
        this.bubbleDown(0)
        return result
    }

    peek() {
        if (!this.isEmpty()) {
            return this.nodes[0]
        }
    }

    size() {
        return this.nodes.length
    }

    isEmpty() {
        return this.nodes.length === 0
    }

    swap(i, j) {
        [this.nodes[i], this.nodes[j]] = [this.nodes[j], this.nodes[i]]
    }
}

class MinHeap extends Heap {
    bubbleUp(index) {
        // check if index is valid
        if (index < 0) {
            return
        }
        const parent = parseInt((index - 1) / 2)
        if (this.nodes[parent] > this.nodes[index]) {
            this.swap(index, parent)
            this.bubbleUp(parent)
        }
    }

    bubbleDown(index) {
        if (index >= this.nodes.length) {
            return
        }
        const left = 2 * index + 1
        const right = 2 * index + 2
        // sort parent, left and right in increasing order
        const orders = [index, left, right].sort((a, b) => {
            return this.nodes[a] - this.nodes[b]
        })
        // no need to bubble down, parent is smaller than both children
        if (index === orders[0]) {
            return
        }
        // swap parent with smaller child
        this.swap(index, orders[0])
        this.bubbleDown(orders[0])
    }
}

class MaxHeap extends Heap {
    bubbleUp(index) {
        // check if index is valid
        if (index < 0) {
            return
        }
        const parent = parseInt((index - 1) / 2)
        if (this.nodes[parent] < this.nodes[index]) {
            this.swap(index, parent)
            this.bubbleUp(parent)
        }
    }

    bubbleDown(index) {
        if (index >= this.nodes.length) {
            return
        }
        const left = 2 * index + 1
        const right = 2 * index + 2
        const orders = [index, left, right].sort((a, b) => {
            return this.nodes[b] - this.nodes[a]
        })
        // no need to bubble down
        if (index === orders[0]) {
            return
        }
        this.swap(index, orders[0])
        this.bubbleDown(orders[0])
    }
}
