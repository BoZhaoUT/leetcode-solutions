/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  const n = s.length
  const dp = Array.from({ length: n}, () => Array(n))

  let result = 0

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (i === j) {
        dp[i][j] = true
        result++
      } else if (i + 1 === j && s[i] === s[j]) {
        dp[i][j] = true
        result++
      } else if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true
        result++
      }
    }
  }

  return result
}

console.log(countSubstrings("abc")) // 3
console.log(countSubstrings("aaa")) // 6

console.log(countSubstrings("a")) // 1
console.log(countSubstrings("ab")) // 2
console.log(countSubstrings("aa")) // 3
console.log(countSubstrings("aba")) // 4
console.log(countSubstrings("aab")) // 4
console.log(countSubstrings("aabb")) // 6
console.log(countSubstrings("aabbaa")) // 11
