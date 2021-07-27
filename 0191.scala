object Solution {
    // you need treat n as an unsigned value
    def hammingWeight(n: Int): Int = {
        var result = 0
        var num = n
        while (num != 0) {
            if (num % 2 == 1) {
                result += 1
            }
            num = num >>> 1
        }
        return result
    }
}


println(Solution.hammingWeight(00000000000000000000000000001011)) // 3
println(Solution.hammingWeight(11111111111111111111111111111101)) // 13