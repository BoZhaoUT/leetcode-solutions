/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, i = 1, j = 1, result = 0) {
    // base case
    if (i === m && j === n) {
        return 1
    }
    if (i < m) {
        result += uniquePaths(m, n, i + 1, j)
    }
    if (j < n) {
        result += uniquePaths(m, n, i, j + 1)
    }
    return result
};

