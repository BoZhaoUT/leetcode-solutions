/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = (maze, entrance) => {
  const numTotalRows = maze.length
  const numTotalColumns = maze[0].length
  // mark the entrance as "visited" or "wall"
  maze[entrance[0]][entrance[1]] = "+"

  // additioanl, record the distance away from the entrance cell
  let currentCell = [entrance[0], entrance[1], 0]
  // this queue holds nearby unexplored empty cells
  const queue = [currentCell]

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  while (queue.length) {
    currentCell = queue.shift()
    // check all neighbour cells
    for (let direction of directions) {
      const neighbourRow = currentCell[0] + direction[0]
      const neighbourColumn = currentCell[1] + direction[1]
      const neighbourDistance = currentCell[2] + 1
      const isEdge =
        neighbourRow === 0 ||
        neighbourRow === numTotalRows - 1 ||
        neighbourColumn === 0 ||
        neighbourColumn === numTotalColumns - 1
      // walls and cells that outside of maze are not empty cells
      const isEmpty =
        maze[neighbourRow] && maze[neighbourRow][neighbourColumn] === "."
      if (isEmpty) {
        // found an exit
        if (isEdge) {
          return neighbourDistance
        }
        maze[neighbourRow][neighbourColumn] = "+"
        queue.push([neighbourRow, neighbourColumn, neighbourDistance])
      }
    }
  }
  return -1
}

console.log(
  nearestExit(
    [
      ["+", ".", "+", "+", "+", "+", "+"],
      ["+", ".", "+", ".", ".", ".", "+"],
      ["+", ".", "+", ".", "+", ".", "+"],
      ["+", ".", ".", ".", "+", ".", "+"],
      ["+", "+", "+", "+", "+", "+", "."]
    ],
    [0, 1]
  )
)

console.log(
  nearestExit(
    [
      ["+", ".", "+", "+", "+", "+", "+"],
      ["+", ".", "+", ".", ".", ".", "+"],
      ["+", ".", "+", ".", "+", ".", "+"],
      ["+", ".", ".", ".", "+", ".", "+"],
      ["+", "+", "+", "+", "+", ".", "+"]
    ],
    [3, 2]
  )
) // 4

console.log(
  nearestExit(
    [
      ["+", "+", ".", "+"],
      [".", ".", ".", "+"],
      ["+", "+", "+", "."]
    ],
    [1, 2]
  )
) // 1

console.log(
  nearestExit(
    [
      ["+", "+", "+"],
      [".", ".", "."],
      ["+", "+", "+"]
    ],
    [1, 0]
  )
) // 2

console.log(nearestExit([[".", "+"]], [0, 0])) // -1
