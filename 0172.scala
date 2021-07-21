object Solution {
    def trailingZeroes(n: Int): Int = {
        return if (n == 0) 0 else n / 5 + Solution.trailingZeroes(n)
    }

    // overflow
    // def trailingZeroes(n: Int): Int = {
    //     var i = 0
    //     var factorial = 1
    //     while (i < n) {
    //         println(factorial)
    //         factorial = factorial * (n - i)
    //         i += 1
    //     }

    //     val str = factorial.toString

    //     var result = 0
    //     i = str.length - 1
    //     while (i >= 0) {
    //         if (str(i) == '0') {
    //             result += 1
    //         }
    //         i -= 1
    //     }

    //     return result
    // }
}

// println(Solution.trailingZeroes(1)) // 0
// println(Solution.trailingZeroes(2)) // 0
// println(Solution.trailingZeroes(3)) // 0
// println(Solution.trailingZeroes(4)) // 0
println(Solution.trailingZeroes(5)) // 1
// println(Solution.trailingZeroes(13)) // 2

