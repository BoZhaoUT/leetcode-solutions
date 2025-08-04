/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
const canIWin = (maxChoosableInteger, desiredTotal) => {
  // If the target is 0 or less, first player wins immediately
  if (desiredTotal <= 0) {
    return true;
  }

  // Sum of all numbers 1..maxChoosableInteger
  // arithmetic series sum formula: 1+2+3+...+n= n(n+1) / 2
  const maxSum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2

  // If even the sum of all numbers can't reach desiredTotal, no one can win
  if (maxSum < desiredTotal) {
    return false;
  }

  const memo = {}; // use object instead of Map

  const dfs = (used, remianing) => {
    const key = used.join(',')

    if (memo[key] !== undefined) {
      return memo[key]
    }
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (!used[i]) {
        used[i] = true
        // Two ways to win:
        // 1. Picking i reaches/exceeds remaining target
        // 2. Opponent cannot win in the next state
        if (i >= remianing || !dfs(used, remianing - i)) {
          used[i] = false
          memo[key] = true
          return true
        }
        used[i] = false
      }
    }
    memo[key] = false
    return false
  }

  const used = Array(maxChoosableInteger + 1).fill(false)

  return dfs(used, desiredTotal)
}

console.log(canIWin(10, 11)) // false
console.log(canIWin(10, 0)) // true
console.log(canIWin(10, 1)) // true
