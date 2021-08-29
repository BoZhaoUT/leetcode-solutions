object Solution {
    def isPowerOfTwo(n: Int): Boolean = {
        var num = 2
        while (num < n && num < 1073741824) {
            num = num * 2
        }
        return num == n || n == 1
    }

    // cheat
    def isPowerOfTwo(n: Int): Boolean = {
        val powers = Set(1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824)
        return powers.contains(n)
    }
}


// println(Solution.isPowerOfTwo(73))
// largest Int: 2147483647