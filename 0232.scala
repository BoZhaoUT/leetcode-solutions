class MyQueue() {

    /** Initialize your data structure here. */
    var stack = Array[Int]()
    var temp = Array[Int]()

    /** Push element x to the back of queue. */
    def push(x: Int) {
        this.stack = this.stack :+ x
        while (this.stack.length > 0) {
            val element = this.stack(this.stack.length - 1)
            this.stack = this.stack.dropRight(1)
            this.temp = this.temp :+ element
        }
        // println("after first loop", this.stack.mkString(" "))
        while (this.temp.length > 0) {
            val element = this.temp(this.temp.length - 1)
            this.temp = this.temp.dropRight(1)
            this.stack = this.stack :+ element
        }
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
var myQueue = new MyQueue()
myQueue.push(1)
myQueue.push(2)
println(myQueue.peek())
// myQueue.push(3)

// var param_2 = obj.pop()
// var param_3 = obj.peek()
// var param_4 = obj.empty()