import scala.collection.mutable.HashSet

object Solution {
    def containsDuplicate(nums: Array[Int]): Boolean = {
        val seen = HashSet[Int]()

        // var result = true
        return nums.exists(num => {
            if (seen.contains(num)) {
                return false
            } else {
                seen.add(num)
                return true
            }
        })
        // return result
    }
}

println(Solution.containsDuplicate([1, 2, 3, 1])) // true