object Solution {
    def countPrimes(n: Int): Int = {
        if (n <= 1) {
            return 0
        }
        var result = 0
        val seen = Array.fill(n)(false)
        println(seen.mkString(""))
        var i = 2
        for (i <- 2 to n) {
            println(i)
        }

        return result
    }
}

println(Solution.countPrimes(4))

// var countPrimes = function(n) {
//     let seen = new Uint8Array(n), ans = 0
//     for (let num = 2; num < n; num++) {
//         if (seen[num]) continue
//         ans++
//         for (let mult = num * num; mult < n; mult += num)
//             seen[mult] = 1
//     }
//     return ans
// };