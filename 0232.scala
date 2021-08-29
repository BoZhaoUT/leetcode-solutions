class MyQueue() {

    /** Initialize your data structure here. */
    var stack = Array[Int]()
    var temp = Array[Int]()

    /** Push element x to the back of queue. */
    def push(x: Int) {
        while (this.stack.length > 0) {
            val element = this.stack(this.stack.length - 1)
            this.temp = this.temp.dropRight(1)
        }
        while (this.temp.length > 0) {
            val element = this.temp.(this.stack.length - 1)
            this.stack = this.stack.dropRight(1)
        }
        println(this.stack)
    }

    /** Removes the element from in front of queue and returns that element. */
    def pop(): Int = {
        val result = this.stack(this.stack.length - 1)
        this.stack.dropRight(1)
        return result
    }

    /** Get the front element. */
    def peek(): Int = {
        this.stack(this.stack.length - 1)
    }

    /** Returns whether the queue is empty. */
    def empty(): Boolean = {
        this.stack.length == 0
    }

}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var obj = new MyQueue()
obj.push(x)

// var param_2 = obj.pop()
// var param_3 = obj.peek()
// var param_4 = obj.empty()