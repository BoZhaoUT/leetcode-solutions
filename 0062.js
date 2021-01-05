/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, i = 1, j = 1, calculated = {}) {
    // base case
    if (i === m && j === n) {
        return 1
    }
    // sort m and n in ascending order
    if (m > n) {
        [m, n] = [n, m]
    }

    // special cases
    if (m === 1) {
        return 1
    } else if (m === 2) {
        return n
    }

    // memoization
    const key = `i=${i},j=${j}`
    if (calculated[key] !== undefined) {
        return calculated[key]
    }

    let result = 0
    if (i < m) {
        result += uniquePaths(m, n, i + 1, j, calculated)
    }
    if (j < n) {
        result += uniquePaths(m, n, i, j + 1, calculated)
    }
    calculated[key] = result
    return result
};

// dp O(m * n) space
var uniquePaths = function(m, n) { 
    // create an empty m by n matrix fill with undefined
    const matrix = Array(m).fill().map(()=>Array(n).fill())

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let fromTop = matrix[i - 1][j] || 1
            let fromLeft = matrix[i][j - 1] || 1
            matrix[i][j] = fromTop + fromLeft
        }
    }
    return matrix[m - 1][n - 1] || 1
};

// dp O(n) space
var uniquePaths = function(m, n) {
    let row = Array(n).fill(1)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            row[j] += row[j - 1]
        }
    }
    return row[n - 1]
};