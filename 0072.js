/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    // base case, convert word1 to empty string
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i
    }
    // base case, conver empty string to word2
    for (let j = 1; j <= n; j++) {
        dp[0][j] = j
    }
    // general case
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                let replaceChar = dp[i - 1][j - 1] + 1
                let left = dp[i][j - 1] + 1
                let top = dp[i - 1][j] + 1
                dp[i][j] = Math.min(replaceChar, left, top);
            }
        }
    }
    return dp[m][n]
};

