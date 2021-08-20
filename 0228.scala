object Solution {
    def summaryRanges(nums: Array[Int]): List[String] = {
        if (nums.length == 0) {
            return List()
        }
        var result = List()
        var rangeStart = nums(0)
        var rangeEnd = nums(0)
        nums.zipWithIndex.map{
            case (num, i) => {
                if (num == rangeEnd + 1) {
                    rangeEnd += 1
                } else if (num > rangeEnd + 1) {
                    // single num
                    if (rangeStart == rangeEnd) {
                        result = result :+ rangeStart.toString
                    } else {
                        // range
                        result = result :+ rangeStart.toString + "->" + rangeEnd.toString
                    }
                }
            }
        }
        return result
    }
}