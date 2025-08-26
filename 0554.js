/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = (wall) => {
  const edgeFrequencies = {}
  wall.forEach(row => {
    let rowSum = 0
    row.forEach((brick, i) => {
      if (i !== row.length - 1) {
        rowSum += brick
        if (edgeFrequencies[rowSum]) {
          edgeFrequencies[rowSum] += 1
        } else {
          edgeFrequencies[rowSum] = 1
        }
      }
    })
  })

  let highestFrequency = 0
  for (const edge in edgeFrequencies) {
    const frequency = edgeFrequencies[edge]
    highestFrequency = Math.max(frequency, highestFrequency)
  }

  return wall.length - highestFrequency
}

// console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]])) // 2
// console.log(leastBricks([[1,2,2,1]])) // 0
console.log(leastBricks([[1],[1],[1]])) // 3

// console.log(leastBricks([[[1, 2],[1, 2],[1, 2]]])) // 0
// console.log(leastBricks([[1, 2],[1, 2],[2, 1]])) // 1
// console.log(leastBricks([[[1]]])) // 1

