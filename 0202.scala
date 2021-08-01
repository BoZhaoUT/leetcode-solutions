import scala.collection.mutable.Set

object Solution {
    def isHappy(n: Int): Boolean = {
        var seen = Set.empty[Int]
        var num = n
        while (n != 1 && !seen.contains(n)) {
            seen += n
            num = sumOfSquares(num)
        }
        return n == 1
    }

    def sumOfSquares(num: Int): Int = {
        return num.toString.reduce((sum, digit) => {
            return sum + scala.math.pow(digit, 2).toInt
        })
    }
}

println(Solution.isHappy(19)) // true
println(Solution.isHappy(2))
