object Solution {
    def singleNumber(nums: Array[Int]): Int = {
        val seen: Set[Int] = Set.empty[Int]

        nums.map(num => {
            println("num", num)
            // seeing a num for the 1st time
            if (seen.contains(num)) {
                seen + num
            } else {
                // seeing an num for the 2nd time
                // remove it from the set
                seen - num
            }
        })
        println(seen.last)
        return 0
    }
}