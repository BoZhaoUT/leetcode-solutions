/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const last = matrix.length - 1
    for (let i = 0; i < Math.ceil(last / 2) ; i++) {
        for (let j = 0; j <= last / 2; j++) {
            let temp = matrix[i][j]
            // bottom-left to top-left
            matrix[i][j] = matrix[last - j][i]
            // bottom-right to bottom-left
            matrix[last - j][i] = matrix[last - i][last - j]
            // top-right to bottom-right
            matrix[last - i][last - j] = matrix[j][last - i]
            // top-left to top-right
            matrix[j][last - i] = temp   
        }
    }
};


