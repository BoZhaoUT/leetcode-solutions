object Solution {
    def addDigits(num: Int): Int = {
        var intSum = num
        while (intSum > 9) {
            val strSum = intSum.toString
            intSum = 0
            strSum.map(char => {
                intSum += char.asDigit
            })
        }
        return intSum
    }
}

println(Solution.addDigits(21)) // 3
println(Solution.addDigits(1)) // 1