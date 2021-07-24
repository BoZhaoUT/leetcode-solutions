object Solution {
    // you need treat n as an unsigned value
    def reverseBits(x: Int): Int = {
        val bits = Array[Int](32)
        var num = Math.floor(num / 2)

        var i = 0
        for (i <- 0 to 15) {
            bits(32 - i) = x % 2
            num = Math.floor(num / 2)
        }

        for (i <- 0 to 15) {
            val temp = bits(i)
            bits(i) = bits(31 - i)
            bits(31 - i) = temp
        }

        return 0
    }
}

// var reverseBits = function(n) {
//     const bits = new Array(32).fill(0);
//     let idx = 1;
//     while (n) {
//         bits[32 - idx++] = n % 2;
//         n = Math.floor(n / 2);
//     }
//     return parseInt(bits.reverse().join(''), 2);
// };

println(Solution.reverseBits(00000010100101000001111010011100))
// println(Solution.reverseBits(11111111111111111111111111111101))
