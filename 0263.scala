object Solution {
    def isUgly(n: Int): Boolean = {
        var num = n
        Array(2, 3, 5).map(divisor => {
            // 2nd condition checks whether quotient is an integer
            while (num.toFloat / divisor >= 1 && num.toFloat / divisor == num / divisor) {
                num = num / divisor
            }
        })
        return num == 1
    }
}

// println(Solution.isUgly(6)) // true
// println(Solution.isUgly(8)) // true
// println(Solution.isUgly(14)) // false
// println(Solution.isUgly(1)) // true
