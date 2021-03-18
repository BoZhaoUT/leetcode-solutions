// doubly-linked list node
class DLListNode {
    constructor(key, value, prev = null, next = null) {
        this.key = key
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity // max number of items
        this.size = 0 // current number of items
        this.head = null
        this.tail = null
        this.hashMap = {}
    }

    removeHead() {
        const result = this.head
        // list is not empty after removal
        if (this.head.next) {
            this.head.next.prev = null
        } else { // list is empty after removal
            this.tail = null
        }
        this.head = this.head.next
        this.size--
        return result
    }

    // return and remove the tail node
    removeTail() {
        const result = this.tail
        // list is not empty after removal
        if (this.tail.prev) {
            this.tail.prev.next = null
        } else { // lsit is empty after removal
            this.head = null
        }
        this.tail = this.tail.prev
        this.size--
        return result
    }

    addHead(key, value) {
        const newHead = new DLListNode(key, value, null, this.head)
        if (this.head) { // list is not empty
            this.head.prev = newHead
        } else { // list is empty
            this.tail = newHead
        }
        this.head = newHead
        this.size++
        this.hashMap[key] = newHead
        return newHead
    }

    remove(node) {
        if (node.key === this.head.key) {
            return this.removeHead()
        }
        if (node.key === this.tail.key) {
            return this.removeTail()
        }
        node.prev.next = node.next
        node.next.prev = node.prev
        this.size--
        return node
    }

    get(key) {
        // key doesn't exist
        if (this.hashMap[key] === undefined) {
            return -1
        }
        // key exists
        const node = this.hashMap[key]
        // if node is not at the front then move it to the front
        if (key !== this.head.key) {
            this.remove(node)
            this.addHead(node.key, node.value)
        }

        return node.value
    }

    put(key, value) {
        // update a value
        if (this.hashMap[key] !== undefined) {
            // node is at head
            if (this.head.key === key) {
                this.head.value = value
            } else {
                // put node at head
                this.remove(this.hashMap[key])
                const newHead = this.addHead(key, value)
                this.hashMap[key] = newHead
            }
        } else { // insert a new value
            // capacity is reached
            if (this.size === this.capacity) {
                const evicted = this.removeTail()
                delete this.hashMap[evicted.key]
            }
            const newNode = this.addHead(key, value)
            this.hashMap[key] = newNode
        }
    }

    print(limit = 10) {
        let result = ""
        let curr = this.head
        let i = 0
        while (curr && i < limit) {
            result += `[${curr.key}, ${curr.value}]`
            curr = curr.next
            i++
        }
        // console.log(`list = ${result}`, `tailKey = ${this.tail.key}`, `hashMapKeys={${Object.keys(this.hashMap)}}`)
        console.log(`list = ${result}`)
    }
}

const runTest = (operations, params) => {
    const capacity = params[0][0]
    console.log(`capacity = ${capacity}`)
    const lru = new LRUCache(capacity)

    for (let i = 1; i < operations.length; i++) {
        const operation = operations[i]
        const param = params[i]
        const [key, value] = param
        if (operation === "put") {
            console.log(`\n== putting ${param}`)
            lru.put(key, value)
        } else if (operation === "get") {
            console.log(`\n== getting ${param}`)
            lru.get(key)
        }
        lru.print()
    }
}


// runTest(["LRUCache","put","put","put","put","get","get"], [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]])
// runTest(["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"], [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]])
// runTest(["LRUCache","put","put","put","get","put","put","get","put","put","get","put","get","get","get","put","put","get","put","get"], [[10],[7,28],[7,1],[8,15],[6],[10,27],[8,10],[8],[6,29],[1,9],[6],[10,7],[1],[2],[13],[8,30],[1,5],[1],[13,2],[12]])
// runTest(["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"], [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]])


