/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  const numRows = mat.length
  const numColumns = mat[0].length
  // create a output matrix to hold the result
  const result = Array.from({ length: numRows }, () => Array(numColumns).fill(null))

  let coordinates = new Set()
  let neighbours = new Set()
  
  mat.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === 0) {
        coordinates.add([rowIndex, columnIndex])
        result[rowIndex][columnIndex] = 0
      }
    })
  })

  let counter = 1
  while (coordinates.size) {
    for (const [rowIndex, columnIndex] of coordinates) {
      // console.log({ rowIndex, columnIndex})
      // console.log(result[rowIndex][columnIndex + 1])
      // put empty neighbours into coordinates set
      if (rowIndex !== 0 && result[rowIndex - 1][columnIndex] === null) {
        neighbours.add([rowIndex - 1, columnIndex])
        result[rowIndex - 1][columnIndex] = counter
      } 
      if (rowIndex !== numRows - 1 && result[rowIndex + 1][columnIndex] === null) {
        neighbours.add([rowIndex + 1, columnIndex])
        result[rowIndex + 1][columnIndex] = counter
      }
      if (columnIndex !== 0 && result[rowIndex][columnIndex - 1] === null) {
        neighbours.add([rowIndex, columnIndex - 1])
        result[rowIndex][columnIndex - 1] = counter
      } 
      if (columnIndex !== numColumns - 1 && result[rowIndex][columnIndex + 1] === null) {
        neighbours.add([rowIndex, columnIndex + 1])
        result[rowIndex][columnIndex + 1] = counter
      }
    }
    coordinates = neighbours
    neighbours = new Set()
    counter++
  }
  return result
}

console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]])) // [[0,0,0],[0,1,0],[0,0,0]]
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])) // [[0,0,0],[0,1,0],[1,2,1]]

console.log(updateMatrix([[0]])) // [[0]]

console.log(updateMatrix([[1, 0]])) // [[1, 0]]
console.log(updateMatrix([[1, 1, 1, 1, 1, 1, 1, 0]])) // [[7, 6, 5, 4, 3, 2, 1, 0]]
console.log(updateMatrix([[1, 1, 1, 1, 0, 1, 1, 1]])) // [[4, 3, 2, 1, 0, 1, 2, 3]]
console.log(updateMatrix([[1], [1], [1], [1], [0], [1], [1], [1]])) // [[4], [3], [2], [1], [0], [1], [2], [3]]
console.log(updateMatrix([[1,1,1],[1,1,1],[1,1,0]])) // [[4,3,2],[3,2,1],[2,1,0]]
console.log(updateMatrix([[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]])) // [[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]]