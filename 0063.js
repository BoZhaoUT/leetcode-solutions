/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid, i = 0, j = 0, memoization = {}) {
    const maxI = obstacleGrid.length - 1
    const maxJ = obstacleGrid[0].length - 1
    // special case
    if (obstacleGrid[i][j] === 1) {
        return 0
    }

    // base case
    if (i === maxI && j === maxJ) {
        return 1
    }

    // memoization
    const key = `i=${i},j=${j}`
    if (memoization[key] !== undefined) {
        return memoization[key]
    }
    let result = 0
    if (i < maxI && obstacleGrid[i + 1][j] === 0) {
        result += uniquePathsWithObstacles(obstacleGrid, i + 1, j)
    }
    if (j < maxJ && obstacleGrid[i][j + 1] === 0) {
        result += uniquePathsWithObstacles(obstacleGrid, i, j + 1)
    }
    memoization[key] = result
    return result
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
// console.log(uniquePathsWithObstacles([[1]]))
console.log(uniquePathsWithObstacles([[0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1],[0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0],[1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],[0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0],[0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0],[0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1],[0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],[1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0],[1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1],[1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0]]))

// dp
var uniquePathsWithObstacles = function(obstacleGrid) {
    const width = obstacleGrid[0].length
    const height = obstacleGrid.length
    const row = Array(width).fill(0)
    row[0] = 1
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (obstacleGrid[i][j] === 1) {
                row[j] = 0
            } else if (j > 0) {
                row[j] += row[j - 1]
            }
        }
    }
    return row[width - 1]
};