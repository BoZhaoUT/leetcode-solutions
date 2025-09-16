/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  const robLinear = (start, end) => {
    const dp = Array(nums.length - 1).fill(0)

    dp[0] = nums[start]
    dp[1] = Math.max(nums[start], nums[start + 1])

    for (let i = 2; i < dp.length; i++) {
      const planA = dp[i - 2] + nums[start + i]
      const planB = dp[i - 1]
      dp[i] = Math.max(planA, planB)
    }

    return dp[dp.length - 1]
  }

  return Math.max(robLinear(0, nums.length - 2), robLinear(1, nums.length - 1))
}

console.log(rob([2, 3, 2])) // 3
console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([1, 2, 3])) // 3

console.log(rob([1])) // 1
console.log(rob([1, 2])) // 2

console.log(rob([200, 3, 140, 20, 10])) // 340

