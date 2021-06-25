object Solution {
    def getRow(rowIndex: Int): List[Int] = {
        var result = List(1)
        if (rowIndex == 0) {
            return List(1)
        }
        if (rowIndex == 1) {
            return List(1, 1)
        }
        var prevRow = List(1, 1)
        var i = 1
        while (i < rowIndex) {
            result = List(1) : List[Int]
            var j = 0
            while (j < i - 1) {
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


println(Solution.getRow(4))
