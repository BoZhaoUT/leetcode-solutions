/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
  const n = nums.length

  const dp = Array.from({ length: n}, () => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i]
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      const subArraySum = dp[i][j - 1] + nums[j]
      if (subArraySum % k === 0) {
        return true
      }
      dp[i][j] = subArraySum
    }
  }
  return false
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)) // true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)) // true

console.log(checkSubarraySum([23, 3], 5)) // false
console.log(checkSubarraySum([23], 5)) // false
console.log(checkSubarraySum([3, 2], 5)) // true
console.log(checkSubarraySum([3, 3], 5)) // false
console.log(checkSubarraySum([99, 2], 1)) // true
console.log(checkSubarraySum([1], 1)) // false

console.log(checkSubarraySum([23, 2, 4, 6, 6], 7)) // true
