/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = (s) => {
  const n = s.length
  
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }


  // start from the 2nd last row's last item
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  // the first row is the entire string's longest palindrome
  return dp[0][n - 1]
};

console.log(longestPalindromeSubseq("bbbab")) // 4
console.log(longestPalindromeSubseq("cbbd")) // 2

console.log(longestPalindromeSubseq("bbbabb")) // 5
console.log(longestPalindromeSubseq("a")) // 1
console.log(longestPalindromeSubseq("aa")) // 2
console.log(longestPalindromeSubseq("aba")) // 3
console.log(longestPalindromeSubseq("abc")) // 1
console.log(longestPalindromeSubseq("abab")) // 3
