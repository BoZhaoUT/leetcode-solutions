/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
// const maxCount = (m, n, ops) => {
//   const matrix = Array.from({ length: m }, () => Array(n).fill(0))
//   // console.log(matrix)

//   for (const op of ops) {
//     for (let i = 0; i < op[0]; i++) {
//       for (let j = 0; j < op[1]; j++) {
//         matrix[i][j]++
//       }
//     }
//   }

//   let result = 0
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === ops.length) {
//         result++
//       }
//     }
//   }

//   return result
// }

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
  let minRow = Number.POSITIVE_INFINITY
  let minCol = Number.POSITIVE_INFINITY

  if (ops.length === 0) {
    return m * n
  }

  ops.forEach(op => {
    const [row, col] = op
    minRow = Math.min(minRow, row)
    minCol = Math.min(minCol, col)
  })

  return minRow * minCol
}

console.log(maxCount(3, 3, [[2, 2], [3, 3]])) // 4
console.log(maxCount(3, 3, [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]])) // 4
console.log(maxCount(3, 3, [])) // 9

console.log(maxCount(1, 1, [[1, 1]])) // 1
console.log(maxCount(1, 1, [[1, 1], [1, 1]])) // 1
console.log(maxCount(2, 2, [[1, 1]])) // 1
console.log(maxCount(2, 2, [[1, 1], [2, 1], [1, 2]])) // 1
