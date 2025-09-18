/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = (nums, target) => {
  const total = nums.reduce((a, b) => a + b, 0)

  // impossible cases
  if (Math.abs(target) > total) {
    return 0
  }
  if (((total + target) % 2) === 1) {
    return 0
  }

  // sum(positive numbers) + sum(negative numbers) = target
  // sum(positive numbers) + sum(abs(negative numbers)) = total
  // => 2 * sum(positive numbers) = target + total
  // => sum(positive numbers) = (target + total) / 2

  // the result is to find how many ways to make the the difference between
  // each positie number and need

  const need = (total + target) / 2

  // dp[s] means number of ways to reach sum s
  const dp = Array(need + 1).fill(0)
  // there is only 1 way to make 0 at the beginning
  dp[0] = 1

  for (const num of nums) {
    // iterate downward to avoid reusing current item more than once
    for (let currentSum = need; currentSum >= num; currentSum--) {
      dp[currentSum] += dp[currentSum - num]
    }
    // when x is zero, the loop doubles all reachable counts correctly
    // since dp[s] += dp[s] which represents choosing plus zero or minus zero
  }

  return dp[need]
}

console.log(findTargetSumWays([1,1,1,1,1], 3)) // 5
console.log(findTargetSumWays([1], 1)) // 1
