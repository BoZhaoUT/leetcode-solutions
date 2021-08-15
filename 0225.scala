import scala.collection.mutable.Array

class MyStack() {

    /** Initialize your data structure here. */
    val queue = Array[Int]()

    /** Push element x onto stack. */
    def push(x: Int) {
        this.queue :+ x
        val queueLength = this.queue.length
        for (i = 0; )
    }

    /** Removes the element on top of the stack and returns that element. */
    def pop(): Int = {
        this.queue.drop(1)
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