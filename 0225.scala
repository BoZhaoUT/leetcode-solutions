class MyStack() {

    /** Initialize your data structure here. */
    var firstQueue = Array()
    var secondQueue = Array()
    

    /** Push element x onto stack. */
    def push(x: Int) {
        this.firstQueue += x
    }

    /** Removes the element on top of the stack and returns that element. */
    def pop(): Int = {
        
    }

    /** Get the top element. */
    def top(): Int = {
        
    }

    /** Returns whether the stack is empty. */
    def empty(): Boolean = {
        this.firstQueue.length == 0 && this.secondQueue.length == 0
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