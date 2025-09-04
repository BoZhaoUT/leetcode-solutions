/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
const findPaths = (m, n, maxMove, startRow, startColumn) => {
  const MOD = 1_000_000_007 // same as 1000000007
  const memo = Object.create(null)

  const isInBounds = (row, col) => row >= 0 && row < m && col >= 0 && col < n

  const dfs = (row, col, numRemainingMoves) => {
    if (!isInBounds(row, col)) {
      return 1
    }
    if (numRemainingMoves === 0) {
      return 0
    }

    const key = `${row}-${col}-${numRemainingMoves}`

    if (memo[key] !== undefined) {
      return memo[key]
    }

    let total = 0
    total = (total + dfs(row - 1, col, numRemainingMoves - 1)) % MOD
    total = (total + dfs(row + 1, col, numRemainingMoves - 1)) % MOD
    total = (total + dfs(row, col - 1, numRemainingMoves - 1)) % MOD
    total = (total + dfs(row, col + 1, numRemainingMoves - 1)) % MOD

    memo[key] = total
    return total
  }

  return dfs(startRow, startColumn, maxMove)
}

console.log(findPaths(2, 2, 2, 0, 0)) // 6
console.log(findPaths(1, 3, 3, 0, 1)) // 12
