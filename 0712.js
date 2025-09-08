/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum = (s1, s2) => {
  const m = s1.length
  const n = s2.length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  // base cases: delete all remaining chars of the other string
  for (let i = m - 1; i >= 0; i--) {
    dp[i][n] = dp[i + 1][n] + s1.charCodeAt(i)
  }
  for (let j = n - 1; j >= 0; j--) {
    dp[m][j] = dp[m][j + 1] + s2.charCodeAt(j)
  }
  console.log(dp)
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i + 1][j + 1]
      } else {
        const del1 = s1.charCodeAt(i) + dp[i + 1][j]
        const del2 = s2.charCodeAt(j) + dp[i][j + 1]
        dp[i][j] = Math.min(del1, del2)
      }
    }
  }
  return dp[0][0]
}

console.log(minimumDeleteSum("sea", "eat")) // 231
console.log(minimumDeleteSum("delete", "leet")) // 403
