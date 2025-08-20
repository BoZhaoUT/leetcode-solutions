/**
 * @param {number[][]} matrix
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (matrix, outputRow, outputCol) => {
  const inputRow = matrix.length
  const inputCol = matrix[0].length
  if (inputRow * inputCol !== outputRow * outputCol) {
    return matrix
  }

  // build an empty placeholder?
  const result = Array.from({ length: outputRow }, () => Array(outputCol))
  

  let resultRowIndex = 0
  let resultColIndex = 0
  matrix.forEach(row => {
    row.forEach(cell => {
      result[resultRowIndex][resultColIndex] = cell
      if (resultColIndex < outputCol - 1) {
        resultColIndex++
      } else {
        resultColIndex = 0
        resultRowIndex++
      }
    })
  })
  return result
}

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)) // [1, 2, 3, 4]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)) // [[1, 2], [3, 4]]

console.log(matrixReshape([[1, 2], [3, 4]], 4, 1)) // [[1, 2], [3, 4]]
console.log(matrixReshape([[1]], 1, 1)) // [[1]]
