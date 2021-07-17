object Solution {
    def titleToNumber(columnTitle: String): Int = {
        var result = 0
        var i = 0
        while (i < columnTitle.length) {
            val multiplier = scala.math.pow(10, (columnTitle.length - i))
            val value = columnTitle(i).toInt - 65
            println(multiplier, value)
            result = value * multiplier + result
            i += 1
        }

        return result + 1
    }
}
