class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix
    // crate a matrix with the same size as matrix to record the sum from cell at index [0, 0]
    this.cache = Array(matrix.length)
      .fill()
      .map(() => Array(matrix[0].length))
    this.matrix
    this.matrix.forEach((row, rowIndex) => {
      row.forEach((_, colIndex) => {
        const sum =
          this.matrix[rowIndex][colIndex] +
          this.sum(rowIndex - 1, colIndex) +
          this.sum(rowIndex, colIndex - 1) -
          this.sum(rowIndex - 1, colIndex - 1) // avoid double counting
        this.cache[rowIndex][colIndex] = sum
      })
    })
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.sum(row2, col2) -
      this.sum(row1 - 1, col2) -
      this.sum(row2, col1 - 1) +
      this.sum(row1 - 1, col1 - 1)
    )
  }

  // return 0 if the index is out of range
  sum(rowIndex, colIndex) {
    return rowIndex >= 0 && colIndex >= 0 ? this.cache[rowIndex][colIndex] : 0
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const myMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
])

console.log(myMatrix.sumRegion(2, 1, 4, 3)) // 8
console.log(myMatrix.sumRegion(1, 1, 2, 2)) // 11
console.log(myMatrix.sumRegion(1, 2, 2, 4)) // 12
