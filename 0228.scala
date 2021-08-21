object Solution {
    def summaryRanges(nums: Array[Int]): List[String] = {
        if (nums.length == 0) {
            return List()
        }
        var result = List[String]()
        var rangeStart = nums(0)
        var rangeEnd = nums(0)
        var i = 0
        while (i < nums.length + 1) {
            val num = nums(i)
            if (num == rangeEnd + 1) {
                rangeEnd += 1
            } else if (num > rangeEnd + 1) {
                
            }
        }
        // nums.zipWithIndex.map{
        //     case (num, i) => {
        //         println("num", num, "i", i)
        //         if (num == rangeEnd + 1) {
        //             rangeEnd += 1
        //         } else if (num > rangeEnd + 1) {
        //             // single num
        //             if (rangeStart == rangeEnd) {
        //                 result = result :+ rangeStart.toString

        //             } else {
        //                 // range
        //                 result = result :+ rangeStart.toString + "->" + rangeEnd.toString
        //             }
        //         }
        //     }
        // }
        return result
    }
}

println(Solution.summaryRanges(Array(0,1,2,4,5,7)))