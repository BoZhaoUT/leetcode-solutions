class MyQueue() {

    /** Initialize your data structure here. */
    var s1 = Array[Int]()
    var s2 = Array[Int]()

    /** Push element x to the back of queue. */
    def push(x: Int) {
        s1 = s1 :+ x
    }

    /** Removes the element from in front of queue and returns that element. */
    def pop(): Int = {
        if (s2.length == 0) {
            while (s1.length > 0) {
                val element = s1(s1.length - 1)
                s1 = s1.dropRight(1)
                s2 = s2 :+ element
            }
        }
        val result = s2(s2.length - 1)
        s2 = s2.dropRight(1)
    }

    /** Get the front element. */
    def peek(): Int = {
        if (s2.length == 0) {
            while (s1.length > 0) {
                val element = s1(s1.length - 1)
                s1 = s1.dropRight(1)
                s2 = s2 :+ element
            }
        }
        return s2(s2.length - 1)
    }

    /** Returns whether the queue is empty. */
    def empty(): Boolean = {
        return s1.length == 0 && s2.length == 0
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
myQueue.push(3)
println(myQueue.peek())

// var param_2 = obj.pop()
// var param_3 = obj.peek()
// var param_4 = obj.empty()