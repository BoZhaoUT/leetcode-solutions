object Solution {
    def generate(numRows: Int): List[List[Int]] = {
        var result = List() : List[List[Int]]
        var i = 1
        while (i <= numRows) {
            if (i == 1) {
                result = result :+ List(1)
            } else if (i == 2) {
                result = result :+ List(1, 1)
            } else {
                var currRow = List(1) : List[Int]
                val prevRow = result.last
                var j = 1
                while (j < i - 1) {
                    val newNum = prevRow(j - 1) + prevRow(j)
                    currRow = currRow :+ newNum
                    j = j + 1
                }
                currRow = currRow :+ 1
                result = result :+ currRow
            }
            i = i + 1
        }
        return result
    }
}
