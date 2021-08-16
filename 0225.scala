// import scala.collection.mutable.Array

class MyStack() {

    /** Initialize your data structure here. */
    var queue = Array[Int]()

    /** Push element x onto stack. */
    def push(x: Int) {
        println("before", this.queue.mkString(" "))
        this.queue = this.queue :+ x
        println("middle", this.queue.mkString(" "))
        val queueLength = this.queue.length
        var i = 0
        for (i <- 0 until queueLength - 1) {
            this.queue = this.queue :+ this.pop()
        }
        println("after", this.queue.mkString(" "))
    }

    /** Removes the element on top of the stack and returns that element. */
    def pop(): Int = {
        val head = this.top()
        this.queue.drop(1)
        return head
    }

    /** Get the top element. */
    def top(): Int = {
        // println("top before", this.queue.mkString(" "))
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