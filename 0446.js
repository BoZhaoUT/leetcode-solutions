/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = (nums) => {
  const dp = []
  // dp[i] holds the number of difference between nums[i]
  // dp[i] = {} with
  // key = difference between nums[i] and another number,
  // value = the number of arithemetic slides with length >= 2 (formed between nums[0] to nums[i] inclusively)
  for (let i = 0; i < nums.length; i++) {
    dp.push({})
  }

  let result = 0
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const commonDifference = nums[i] - nums[j]
      // get the number of how many other numbers have the same common difference
      const numArithmeticSlicesAtI = dp[i][commonDifference] || 0
      const numArithmeticSlicesAtJ = dp[j][commonDifference] || 0
      dp[i][commonDifference] =
        numArithmeticSlicesAtI + numArithmeticSlicesAtJ + 1
      result += numArithmeticSlicesAtJ
    }
  }
  return result
}

console.log(numberOfArithmeticSlices([2, 4, 7])) // 7
// console.log(numberOfArithmeticSlices([7, 7, 7, 7, 7])) // 16
