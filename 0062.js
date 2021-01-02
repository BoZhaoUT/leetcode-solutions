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

