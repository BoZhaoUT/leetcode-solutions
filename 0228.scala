object Solution {
    def summaryRanges(nums: Array[Int]): List[String] = {
        if (nums.length == 0) {
            return List()
        }
        var result = List[String]()
        var rangeStart = nums(0)
        var rangeEnd = nums(0)
        var i = 0
        while (i < nums.length) {
            val num = nums(i)
            // continue existingrange
            if (num <= rangeEnd + 1) {
                rangeEnd = num
            }

            // found beginning of a new range
            // adding rangeEnd != 2147483647 because 
            // 2147483647 > 2147483647 + 1 is true in Scala
            if (num > rangeEnd + 1 && rangeEnd != 2147483647) {
                // rangeEnd = num
                if (rangeStart == rangeEnd) {
                    result = result :+ rangeStart.toString
                } else {
                    result = result :+ (rangeStart.toString + "->" + rangeEnd.toString)
                }
                rangeStart = num
                rangeEnd = num
            }

            // reached the end
            if (i == nums.length - 1) {
                if (rangeStart == num) {
                    result = result :+ rangeStart.toString
                } else {
                    result = result :+ (rangeStart.toString + "->" + rangeEnd.toString)
                }
            }
            i += 1
        }
        return result
    }
}

// println(Solution.summaryRanges(Array(0,1,2,4,5,7))) // List(0->2, 4->5, 7)
// println(Solution.summaryRanges(Array(0,1,2,4,5,6))) // List(0->2, 4->6)
println(Solution.summaryRanges(Array(1,2,2147483646,2147483647))) // List("-2->-1","1->2","2147483646->2147483647")
// println(Solution.summaryRanges(Array(-2,-1,1,2,2147483645,2147483646))) // List("-2->-1","1->2","2147483646->2147483647")
// println(Solution.summaryRanges(Array(-2147483648,-2147483647,2147483647))) // List("-2->-1","1->2","2147483646->2147483647")

