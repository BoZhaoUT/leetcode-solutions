/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const height = grid.length
    const width = grid[0].length
    const dp = Array(height).fill().map(() => Array(width).fill(Infinity))
    dp[0][0] = grid[0][0]

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i === 0 && j === 0) {
                continue
            }
            let fromTop = i > 0 ? dp[i - 1][j] : Infinity
            let fromLeft = j > 0 ? dp[i][j - 1] : Infinity
            dp[i][j] = Math.min(fromTop, fromLeft) + grid[i][j]
        }
    }
    return dp[height - 1][width - 1]
};

