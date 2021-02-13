/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === "0") {
        return 0
    }
    const dp = new Array(s.length + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= s.length; i++) {
        const first = s.substring(i - 1, i)
        const second = +s.substring(i - 2, i)
        // any other digit can be a valid char by itself
        // i.e. all valid single digit letter
        if (first !== "0") {
            dp[i] += dp[i - 1]
        }
        // all valid 2 digit letters
        if (second > 10 && second <= 26) {
            dp[i] += dp[i - 2]
        }
    }
    return dp[s.length]
};

// public class Solution {
//     public int numDecodings(String s) {
//         if (s == null || s.length() == 0) {
//             return 0;
//         }
//         int n = s.length();
//         int[] dp = new int[n + 1];
//         dp[0] = 1;
//         dp[1] = s.charAt(0) != '0' ? 1 : 0;
//         for (int i = 2; i <= n; i++) {
//             int first = Integer.valueOf(s.substring(i - 1, i));
//             int second = Integer.valueOf(s.substring(i - 2, i));
//             if (first >= 1 && first <= 9) {
//                dp[i] += dp[i-1];  
//             }
//             if (second >= 10 && second <= 26) {
//                 dp[i] += dp[i-2];
//             }
//         }
//         return dp[n];
//     }
// }