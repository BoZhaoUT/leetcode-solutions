/**
 * @param {number[]} nums
 * @return {number}
 */
const rob2 = (nums, startingIndex = 0) => {
  // no more houses to rob
  if (startingIndex >= nums.length) {
    return 0
  }

  const planA = nums[startingIndex] + rob(nums, startingIndex + 2)
  const planB = (nums[startingIndex + 1] || 0) + rob(nums, startingIndex + 3)

  // console.log({planA, planB})

  return Math.max(planA, planB)
}

const rob3 = (nums) => {
  const dp = Array(nums.length).fill(0)
  dp.forEach((_, i) => {
    if (i === 0) {
      dp[0] = nums[0]
      return
    }
    const planA = (dp[i - 2] || 0) + nums[i]
    const planB = dp[i - 1]
    dp[i] = Math.max(planA, planB)
  })

  return dp[dp.length - 1]
}

const rob = (nums) => {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }

  let prev2 = nums[0]  // dp[i-2]
  let prev1 = Math.max(nums[0], nums[1])  // dp[i-1]

  for (let i = 2; i < nums.length; i++) {
    const curr = Math.max(prev1, prev2 + nums[i])
    prev2 = prev1
    prev1 = curr
  }

  return prev1
}

console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([2, 7, 9 ,3, 1])) // 12

console.log(rob([155,44,52,58,250,225,109,118,211,73,137,96,137,89,174,66,134,26,25,205,239,85,146,73,55,6,122,196,128,50,61,230,94,208,46,243,105,81,157,89,205,78,249,203,238,239,217,212,241,242,157,79,133,66,36,165])) // 4517
