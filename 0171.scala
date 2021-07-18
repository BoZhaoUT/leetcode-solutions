object Solution {
    def titleToNumber(columnTitle: String): Int = {
        var result = 0
        var i = 0
        while (i < columnTitle.length) {
            val multiplier = scala.math.pow(26, (columnTitle.length - i - 1))
            val value = columnTitle(i).toInt - 64 // A -> 1, B -> 2, etc
            result = (value * multiplier).toInt + result
            i += 1
        }

        return result
    }
}


println(Solution.titleToNumber("B")) // 2
println(Solution.titleToNumber("AB")) // 28
println(Solution.titleToNumber("ZY")) // 701