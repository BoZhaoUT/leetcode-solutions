/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  // track the longest word length
  let maxLen = 0
  const dict = Object.create(null)
  wordDict.forEach(word => {
    dict[word] = true
    maxLen = Math.max(maxLen, word.length)
  })

  const n = s.length
  const dp = Array(n + 1).fill(false)
  dp[0] = true

  for (let end = 1; end <= n; end++) {
    const startMin = Math.max(0, end - maxLen)
    for (let start = end - 1; start >= startMin; start--) {
      if (!dp[start]) {
        continue
      }
      const segment = s.substring(start, end)
      if (dict[segment]) {
        dp[end] = true
        break
      }
    }
  }

  return dp[n]
}

console.log(wordBreak("leetcode", ["leet", "code"])) // true
console.log(wordBreak("applepenapple", ["apple", "pen"])) // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])) // false
