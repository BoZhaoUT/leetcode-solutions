import scala.collection.mutable.Set

object Solution {
    def isHappy(n: Int): Boolean = {
        val seen = Set.empty[Int]
        var num = n
        while (num != 1 && !seen.contains(num)) {
            seen += num
            num = sumOfSquares(num)
        }
        return num == 1
    }

    def sumOfSquares(num: Int): Int = {
        var sum = 0
        num.toString.map(digit => {
            // toInt doesn't work because it converts '1' to 49 and '2' to 50 (based on ASCII table)
            sum += scala.math.pow(digit.asDigit, 2).toInt
        })
        return sum
    }
}

println(Solution.isHappy(19)) // true
println(Solution.isHappy(2))
