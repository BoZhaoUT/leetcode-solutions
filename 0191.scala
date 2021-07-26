object Solution {
    // you need treat n as an unsigned value
    def hammingWeight(n: Int): Int = {
        var result = 0
        var num = n
        while (num > 0) {
            println(num)
            if (num % 2 == 1) {
                result += 1
            }
            num = num / 2
        }
        return result
    }
}
