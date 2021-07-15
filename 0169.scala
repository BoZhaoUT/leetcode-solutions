import scala.collection.mutable.Map

object Solution {
    def majorityElement(nums: Array[Int]): Int = {
        // count the occurrences of each element in nums
        val counts: Map[Int, Int] = Map()
        var result = 0

        nums.map(num => {
            // update the count of current num
            if (counts.contains(num)) {
                counts(num) = counts(num) + 1
            } else {
                counts(num) = 1
            }
            
            // check if the occurrences exceeds half
            if (counts(num) > nums.length / 2) {
                result = num
            }
        })
        
        return result
    }
}