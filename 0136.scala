object Solution {
    def singleNumber(nums: Array[Int]): Int = {
        var seen: Set[Int] = Set.empty[Int]

        nums.map(num => {
            println("num", num)
            // seeing a num for the 1st time
            if (!seen.contains(num)) {
                seen += num
            } else {
                // seeing an num for the 2nd time
                // remove it from the set
                seen -= num
            }
        })

        return seen.toList(0)
    }

    // O(n) time, O(1) space

    // all number with even number of occurrences cancel their toggle of the result
    // only the single occurence number stays
    def singleNumber2(nums: Array[Int]): Int = {
        var result = 0
        nums.map(num => {
            result = result ^ num
        })
        return result
    }
}