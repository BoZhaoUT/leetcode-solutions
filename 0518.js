/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  const dp = new Array(amount + 1).fill(0)

  dp[0] = 1

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[dp.length - 1]
}

console.log(change(5, [1, 2, 5])) // 4
console.log(change(3, [2])) // 0

console.log(change(1, [1])) // 1
console.log(change(0, [1])) // 1
console.log(change(10, [5])) // 1
