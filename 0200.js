/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0
    const height = grid.length
    const width = grid[0].length
    const visited = Array(height).fill().map(() => Array(width).fill(false))
    let i = 0
    let j = 0

    const recursion = (i, j) => {
        // valid and unvisited cells
        if (0 <= i && i < height && 0 <= j && j < width && !visited[i][j]) {
            visited[i][j] = true
            // island
            if (grid[i][j] === "1") {
                // explore adjacent cells
                recursion(i - 1, j) // up
                recursion(i, j + 1) // right
                recursion(i + 1, j) // down
                recursion(i, j - 1) // left
            }
        }
    }

    // walk through the entire grid
    while (i < height) {
        while (j < width) {
            // skip visited cells and water
            if (!visited[i][j] && grid[i][j] === "1") {
                recursion(i, j)
                result++
            }
            j++
        }
        j = 0
        i++
    }

    return result
};




