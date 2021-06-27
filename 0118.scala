object Solution {
    def getRow(rowIndex: Int): List[Int] = {
        // base cases
        if (rowIndex == 0) {
            return List(1)
        }
        if (rowIndex == 1) {
            return List(1, 1)
        }
        var result = List(1, 1)
        var i = 0
        while (i < rowIndex) {
            var prevRow = result
            // build a new row
            result = List(1) : List[Int]
            var j = 1
            while (j <= i) {
                val newNum = prevRow(j - 1) + prevRow(j)
                result = result :+ newNum
                j = j + 1
            }
            result = result :+ 1
            i = i + 1
        }
        return result
    }
}
