/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  const n = nums.length
  const dp = Array.from({ length: nums.length }, () => Array(n))
  let result = 0

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const num = nums[j]
      if (i !== j) {
        dp[i][j] = [0, 0]
      } else { // diagnal
        if (num === 0) {
          dp[i][j] = [1, 0]
        } else {
          dp[i][j] = [0, 1]
        }
      }
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      const num = nums[j]

      dp[i][j] = [...dp[i][j - 1]]
      const currentOccurrences = dp[i][j]
      currentOccurrences[num] += 1
      if (currentOccurrences[0] === currentOccurrences[1]) {
        result = Math.max(result, currentOccurrences[0] * 2)
      }
    }
  }

  return result
} 

const findMaxLength2 = (nums) => {
  const diffIndex = {}              // Object to store first index of each diff value
  diffIndex[0] = -1                 // diff = 0 starts at index -1 (baseline)
  let maxLen = 0                    // Tracks the maximum length found
  let diff = 0                      // diff = count(1) - count(0)

  for (let i = 0; i < nums.length; i++) {
    diff += nums[i] === 1 ? 1 : -1  // Add +1 for a 1, -1 for a 0

    if (diff in diffIndex) {        // Have we seen this diff before?
      const prevIndex = diffIndex[diff]
      maxLen = Math.max(maxLen, i - prevIndex)  // Length between previous and current index
    } else {
      diffIndex[diff] = i           // First time seeing this diff, record the index
    }
  }

  return maxLen                     // Return the longest length found
}

console.log(findMaxLength([0, 1])) // 2
console.log(findMaxLength([0, 1, 0])) // 2
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0])) // 6

console.log(findMaxLength([1, 1, 1, 1])) // 0
console.log(findMaxLength([0, 1, 1, 0])) // 4
console.log(findMaxLength([0, 1, 0, 1])) // 4


