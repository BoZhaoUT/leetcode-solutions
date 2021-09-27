class NumArray(_nums: Array[Int]) {
    private var sum = 0
    // let nums(i) be the sum of all elements from _nums(0) to _nums(i)
    private val nums = _nums.map(num => {
        sum += num
        return sum
    })

    def sumRange(left: Int, right: Int): Int = {
        if (left == 0) {
            return nums(right)
        }
        return nums(right) - nums(left - 1)
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// var obj = new NumArray(Array(-2, 0, 3, -5, 2, -1))
// println(obj.sumRange(0, 2))
// println(obj.sumRange(2, 5))
// println(obj.sumRange(0, 5))

