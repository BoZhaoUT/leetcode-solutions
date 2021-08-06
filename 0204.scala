object Solution {
    def countPrimes(n: Int): Int = {
        var result = 0
        val seen = Array.fill(n)(false)
        var num = 2
        for (num <- 2 until n) {
            if (!seen(num)) {
                result += 1
                
                // mark the multiples of this number as seen
                var multiplier = 1
                var product = num
                while (product < n) {
                    seen(product) = true
                    product = num * multiplier
                    multiplier += 1
                }
            }
        }
        return result
    }
}



println(Solution.countPrimes(10))

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