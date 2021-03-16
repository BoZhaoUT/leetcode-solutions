/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const coinSet = new Set(coins)
    // special cases
    if (coinSet.has(amount)) {
        return 1
    }
    if (amount === 0) {
        return 0
    }

    const dp = new Array(amount + 1).fill(Infinity)
    let subAmount = 1
    while (subAmount <= amount) {
        // there is a coin for this amount
        if (coinSet.has(subAmount)) {
            dp[subAmount] = 1
        } else {
            for (coin of coins) {
                // calculate the number of coins required for this subamount
                const prevAmount = subAmount - coin
                if (prevAmount > 0 && dp[prevAmount] !== -1) {
                    dp[subAmount] = Math.min(dp[prevAmount] + 1, dp[subAmount])
                }
            }
        }
        subAmount++
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
};

// console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2,5,10,3], 1))
