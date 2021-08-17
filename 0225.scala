class MyStack() {

    /** Initialize your data structure here. */
    var queue = Array[Int]()

    /** Push element x onto stack. */
    def push(x: Int) {
        this.queue = this.queue :+ x
        val queueLength = this.queue.length
        var i = 0
        // re-add all current elements into the queue
        // so that x becomes the first element in the queue
        for (i <- 0 until queueLength - 1) {
            val first = this.top()
            this.queue = this.queue.drop(1)
            this.queue = this.queue :+ first
        }   
    }

    /** Removes the element on top of the stack and returns that element. */
    def pop(): Int = {
        val head = this.top()
        this.queue = this.queue.drop(1)
        return head
    }

    /** Get the top element. */
    def top(): Int = {
        this.queue.head
    }

    /** Returns whether the stack is empty. */
    def empty(): Boolean = {
        this.queue.isEmpty
    }

    def size(): Int = {
        this.queue.length
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */