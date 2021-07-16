object Solution {
    def titleToNumber(columnTitle: String): Int = {
        var result = 0
        var i = 0
        while (i < columnTitle.length) {
            val multiplier = 10 ^ (columnTitle - i)
            val value = columnTitle(i).toInt - 65
            result += value
        }

        return result
    }
}

println(Solution.titleToNumber("ABC"))
