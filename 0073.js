/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let height = matrix.length
    let width = matrix[0].length

    let zeroInFlagRow = false
    let zeroInFlagColumn = false

    // use the first cell of each row and column as a flag
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) {
                    zeroInFlagRow = true
                }
                if (j === 0) {
                    zeroInFlagColumn = true
                }
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    // set zeros in non-flag cells
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    // set zeros in flag row and column
    if (zeroInFlagRow) {
        matrix[0] = Array(width).fill(0)
    }
    if (zeroInFlagColumn) {
        matrix.forEach(row => row[0] = 0)
    }
    return matrix
};


