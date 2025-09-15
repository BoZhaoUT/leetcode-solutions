/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
  const dp = Array(cost.length + 1).fill(0)

  for (let i = 2; i < cost.length + 1; i++) {
    const planA = dp[i - 2] + cost[i - 2]
    const planB = dp[i - 1] + cost[i - 1]
    dp[i] = Math.min(planA, planB)
  }

  return dp[cost.length]
}

console.log(minCostClimbingStairs([10, 15, 20])) // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
