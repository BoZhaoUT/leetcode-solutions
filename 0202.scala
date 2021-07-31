object Solution {
    def isHappy(n: Int): Boolean = {
        var str = n.toString
        var num = n
        while (num != 1 &&) {
            num = 0
            str.map(char => {
                val digit = char.toInt
                num += digit ^ 2
            })
        }
    }
}

println(Solution.isHappy(19)) // true
println(Solution(isHappy(2)))