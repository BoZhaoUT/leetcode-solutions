class NumArray(_nums: Array[Int]) {
    private var sum = 0
    private val newNums = _nums.map(num => {
        sum += num
        sum
    })

    def sumRange(left: Int, right: Int): Int = {
        println(newNums.mkString(" "))
        println("right", newNums(right))
        println("left", newNums(left))
        return newNums(right) - newNums(left)
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray(Array(-2, 0, 3, -5, 2, -1))
println(obj.sumRange(0, 2))
println(obj.sumRange(2, 5))
println(obj.sumRange(0, 5))

