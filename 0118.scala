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
                // generate a new row based on the previous row
            }
            i = i + 1
        }


        return result
    }
}



println(Solution.generate(2))
