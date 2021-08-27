object Solution {
    def isPowerOfTwo(n: Int): Boolean = {
        var num = 2
        while (num < n && num < 1073741824) {
            num = num * 2
        }
        return num == n || n == 1
    }
}


// println(Solution.isPowerOfTwo(1073741825))
// largest Int: 2147483647