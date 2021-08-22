object Solution {
    def summaryRanges(nums: Array[Int]): List[String] = {
        if (nums.length == 0) {
            return List()
        }
        var result = List[String]()
        var rangeStart = 0
        var rangeEnd = 0
        var i = 0
        while (i < nums.length) {
            while (nums(i) == nums(i + 1)) {
                rangeEnd += 1
            }
        }
        return result
    }
}

println(Solution.summaryRanges(Array(0,1,2,4,5,7)))