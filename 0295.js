class MedianFinder {
    constructor() {
        this.minHeap = new MinHeap()
        this.maxHeap = new MaxHeap()
    }

    addNum(num) {
        // Goal:
        // the min heap will keep all numbers greater or equal to the median
        // the max heap will keep all numbers smaller than the median
        // it will ensure the roots of two heaps are close or equal to the median
        // make sure the sizes of 2 heaps only differ by at most 1

        // put the number into the min heap if the number is greater than the root
        // put the number into the max heap if the number is smaller than the root
        // it will add the number into a heap as a new leaf node

        // 3 cases after putting number into a heap
        // the sizes of 2 heaps differ by 0, 1 and 2

        // differ by 0 or 1
        //     nothing to do here. 
        // differ by 2
        //     remove the root of heap which has more nodes
        //     add the root into the other heap, the removed 
        //     root will be new root of the other heap

        // this algorithm will keep the medians(s) at the root(s) of 2 heaps
        if (this.minHeap.size() === 0 || num > this.minHeap.peek()) {
            this.minHeap.push(num)
        } else {
            this.maxHeap.push(num)
        }

        // the min heap has too many nodes
        if (this.minHeap.size() - this.maxHeap.size() === 2) {
            const minHeapRoot = this.minHeap.pop()
            this.maxHeap.push(minHeapRoot)
        } else if (this.maxHeap.size() - this.minHeap.size() === 2) {
            // the max heap has too many nodes
            const maxHeapRoot = this.maxHeap.pop()
            this.minHeap.push(maxHeapRoot)
        }
    }

    findMedian() {
        if (this.maxHeap.isEmpty()) {
            return this.minHeap.peek()
        } else if (this.minHeap.size() === this.maxHeap.size()) {
            return (this.minHeap.peek() + this.maxHeap.peek()) / 2
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.peek()
        } else {
            return this.maxHeap.peek()
        }
    }
}



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

const runTest = (opeartions, values) => {
    const finder = new MedianFinder()
    opeartions.forEach((operation, i) => {
        const value = values[i]

        switch (operation) {
            case "addNum":
                finder.addNum(value[0])
                break
            case "findMedian":
                console.log(`median=${finder.findMedian()}`)
        }

    })
}


// runTest(["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"], [[],[-1],[],[-2],[],[-3],[],[-4],[],[-5],[]])


// # 9
// runTest(["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"], [[],[78],[],[14],[],[50],[],[20],[],[13],[],[9],[],[25],[],[8],[],[13],[],[37],[],[29],[],[33],[],[55],[],[52],[],[6],[],[17],[],[65],[],[23],[],[74],[],[43],[],[5],[],[29],[],[29],[],[72],[],[7],[],[13],[],[56],[],[21],[],[31],[],[66],[],[69],[],[69],[],[74],[],[12],[],[77],[],[23],[],[10],[],[6],[],[27],[],[63],[],[77],[],[21],[],[40],[],[10],[],[19],[],[59],[],[35],[],[40],[],[44],[],[4],[],[15],[],[29],[],[63],[],[27],[],[46],[],[56],[],[0],[],[60],[],[72],[],[35],[],[54],[],[50],[],[14],[],[29],[],[62],[],[24],[],[18],[],[79],[],[16],[],[19],[],[8],[],[77],[],[10],[],[21],[],[66],[],[42],[],[76],[],[14],[],[58],[],[20],[],[0],[]])


// # 11
// runTest(["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"], [[],[155],[],[66],[],[114],[],[0],[],[60],[],[73],[],[109],[],[26],[],[154],[],[0],[],[107],[],[75],[],[9],[],[57],[],[53],[],[6],[],[85],[],[151],[],[12],[],[110],[],[64],[],[103],[],[42],[],[103],[],[126],[],[3],[],[88],[],[142],[],[79],[],[88],[],[147],[],[47],[],[134],[],[27],[],[82],[],[95],[],[26],[],[124],[],[71],[],[79],[],[130],[],[91],[],[131],[],[67],[],[64],[],[16],[],[60],[],[156],[],[9],[],[65],[],[21],[],[66],[],[49],[],[108],[],[80],[],[17],[],[159],[],[24],[],[90],[],[79],[],[31],[],[79],[],[113],[],[39],[],[54],[],[156],[],[139],[],[8],[],[90],[],[19],[],[10],[],[50],[],[89],[],[77],[],[83],[],[13],[],[3],[],[71],[],[52],[],[21],[],[50],[],[120],[],[159],[],[45],[],[22],[],[69],[],[144],[],[158],[],[19],[],[109],[],[52],[],[50],[],[51],[],[62],[],[20],[],[22],[],[71],[],[95],[],[47],[],[12],[],[21],[],[32],[],[17],[],[130],[],[109],[],[8],[],[61],[],[13],[],[48],[],[107],[],[14],[],[122],[],[62],[],[54],[],[70],[],[96],[],[11],[],[141],[],[129],[],[157],[],[136],[],[41],[],[40],[],[78],[],[141],[],[16],[],[137],[],[127],[],[19],[],[70],[],[15],[],[16],[],[65],[],[96],[],[157],[],[111],[],[87],[],[95],[],[52],[],[42],[],[12],[],[60],[],[17],[],[20],[],[63],[],[56],[],[37],[],[129],[],[67],[],[129],[],[106],[],[107],[],[133],[],[80],[],[8],[],[56],[],[72],[],[81],[],[143],[],[90],[],[0],[]])



