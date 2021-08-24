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
            println("beginning", result)
            val num = nums(i)
            println(i, num, rangeStart, rangeEnd)
            if (num <= rangeEnd + 1) {
                rangeEnd = num
            }

            println("after first step:", num, rangeStart, rangeEnd)

            // found beginning of a new range
            if (num > rangeEnd + 1 && num != 2147483647) {
                println("in found begnning, ", i, num, rangeStart, rangeEnd)
                println("num: ", num)
                println("rangeEnd: ", rangeEnd)
                println("weird: ", num > rangeEnd + 1)
                // single number range
                if (rangeStart == rangeEnd) {
                    result = result :+ rangeStart.toString
                } else {
                    result = result :+ (rangeStart.toString + "->" + rangeEnd.toString)
                }
                rangeStart = num
                rangeEnd = num
            }

            println("middle", result)
            println("after second step:", num, rangeStart, rangeEnd)

            // reached the end
            if (i == nums.length - 1) {
                println("final", i, num, rangeStart, rangeEnd)
                if (rangeStart == num) {
                    println("l1", result, rangeStart, num)
                    result = result :+ rangeStart.toString
                } else {
                    println("l2", result)
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
println(Solution.summaryRanges(Array(-2147483648,-2147483647,2147483647))) // List("-2->-1","1->2","2147483646->2147483647")

