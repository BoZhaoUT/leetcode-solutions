/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let result = 0
  const width = grid[0].length
  const height = grid.length
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex]
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const isIsland = grid[rowIndex][colIndex]
      // the current tile must be an island in order to haev perimeter
      if (isIsland) {
        // top
        if (rowIndex === 0 || grid[rowIndex - 1][colIndex] === 0) {
          result++
        }
        // right
        if (colIndex === width - 1 || row[colIndex + 1] === 0) {
          result++
        }
        // bottom
        if (rowIndex === height - 1 || grid[rowIndex + 1][colIndex] === 0) {
          result++
        }
        // left
        if (colIndex === 0 || row[colIndex - 1] === 0) {
          result++
        }
      }
    }
  }

  return result
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])) // 16

console.log(islandPerimeter([[1]])) // 4
console.log(islandPerimeter([[1], [1], [0]])) // 6
console.log(islandPerimeter([[0, 1, 1, 0]])) // 6
console.log(islandPerimeter([[1, 1, 1, 1]])) // 10
console.log(islandPerimeter([[1, 1], [1, 1]])) // 8
