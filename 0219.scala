import scala.collection.mutable.HashMap

object Solution {
    def containsNearbyDuplicate(nums: Array[Int], k: Int): Boolean = {
        val numToIndex = HashMap[Int, Int]()

        var result = false

        var i = 0
        while (i < nums.length && !result) {
            val num = nums(i)
            if (numToIndex.contains(num) && i - numToIndex(num) <= k) {
                result = true
            } else {
                numToIndex(num) = i
            }
            i += 1
        }

        return result
    }
}

println(Solution.containsNearbyDuplicate(Array(1, 2, 3, 1), 3))
println(Solution.containsNearbyDuplicate(Array(1, 0, 1, 1), 1))
println(Solution.containsNearbyDuplicate(Array(1, 2, 3, 1, 2, 3), 2))
