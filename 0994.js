/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ]

  let rottens = []
  let newRottens = []
  let numDays = 0
  let numFresh = 0
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === 2) {
        rottens.push([rowIndex, colIndex])
      } else if (cell === 1) {
        numFresh += 1
      }
    })
  })

  while (rottens.length > 0 && numFresh > 0) {
    // mark all fresh pears adjacent to rotten pears as rotten
    rottens.forEach(([rowIndex, colIndex]) => {
      for ([deltaRowIndex, deltaColIndex] of directions) {
        const neighborRowIndex = rowIndex + deltaRowIndex
        const neighborColIndex = colIndex + deltaColIndex
        if (0 <= neighborRowIndex && neighborRowIndex < grid.length) {
          // found a fresh pear
          if (grid[neighborRowIndex][neighborColIndex] === 1) {
            newRottens.push([neighborRowIndex, neighborColIndex])
            grid[neighborRowIndex][neighborColIndex] = 2
            numFresh -= 1
          }
        }
      }
    })
    rottens = newRottens
    newRottens = []
    numDays += 1
  }

  return numFresh === 0 ? numDays : -1
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ])
) // 4

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
  ])
) // -1

console.log(orangesRotting([[0, 2]])) // 0
