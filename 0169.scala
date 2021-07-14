import scala.collection.mutable.Map

object Solution {
    def majorityElement(nums: Array[Int]): Int = {
        // count the occurrences of each element in nums
        val counts: Map[Int, Int] = Map()

        nums.map(num => {
            if (counts.contains(num)) {
                counts(num) = counts(num) + 1
            } else {
                counts(num) = 1
            }
        })
        // find the highest element
        
        
    }
}