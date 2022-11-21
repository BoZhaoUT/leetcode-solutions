/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
  nums.sort((a, b) => a - b)
  // all numbers are divisible by themselves
  const dp = nums.map((num) => [num])

  let result = []

  for (let i = 0; i < nums.length; i++) {
    let largestPrevSubset = []
    for (let j = 0; j < i; j++) {
      // find the largest subset between from dp[0] ... dp[j]
      if (nums[i] % nums[j] == 0) {
        if (dp[j].length > largestPrevSubset.length) {
          largestPrevSubset = dp[j]
        }
      }
    }
    // record the largest divisible subset including i so far
    dp[i] = [nums[i], ...largestPrevSubset]
    // found a larger divisible subset
    if (dp[i].length > result.length) {
      result = dp[i]
    }
  }
  return result
}

console.log(largestDivisibleSubset([3, 1])) // [1, 3] or [3, 1]
console.log(largestDivisibleSubset([1, 2, 3])) // [1, 2] or [1, 3]
console.log(largestDivisibleSubset([1, 2, 4, 8])) // [1, 2, 4, 8]
console.log(largestDivisibleSubset([1])) // [1]
console.log(largestDivisibleSubset([1, 2, 4, 8, 16])) // [1, 2, 4, 8, 16]
console.log(largestDivisibleSubset([5, 9, 18, 54, 90, 108, 180, 360, 540, 720])) // [9,18,90,180,360,720]
console.log(largestDivisibleSubset([4, 8, 10, 240])) // [4, 8, 240]
