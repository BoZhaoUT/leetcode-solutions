/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const numRows = word1.length
  const numCols = word2.length
  // the the difference between word1[0, i] and word2[0, j]
  const dp = Array(numRows + 1)
    .fill()
    .map(() => Array(numCols + 1).fill(0))

  // the difference between word1[0, i] and empty string is i
  for (let rowIndex = 1; rowIndex <= numRows; rowIndex++) {
    dp[rowIndex][0] = rowIndex
  }

  // the difference between empty string and word2[0, j] is j
  for (let colIndex = 1; colIndex <= numCols; colIndex++) {
    dp[0][colIndex] = colIndex
  }

  // start from bottom left corner, calculate the smalleset the
  // difference for each operation
  for (let rowIndex = 1; rowIndex <= numRows; rowIndex++) {
    for (let colIndex = 1; colIndex <= numCols; colIndex++) {
      // the 2 words have the same char at given indices
      if (word1[rowIndex - 1] === word2[colIndex - 1]) {
        dp[rowIndex][colIndex] = dp[rowIndex - 1][colIndex - 1]
      } else {
        // the words have different chars
        const replaceChar = dp[rowIndex - 1][colIndex - 1] + 1
        const left = dp[rowIndex][colIndex - 1] + 1
        const top = dp[rowIndex - 1][colIndex] + 1
        dp[rowIndex][colIndex] = Math.min(replaceChar, left, top)
      }
    }
  }
  return dp[numRows][numCols]
}

console.log(minDistance('horse', 'ros')) // 3
console.log(minDistance('intention', 'execution')) // 5
