/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const height = matrix.length
    const width = matrix[0].length

    // special case
    if (target < matrix[0][0] || target > matrix[height - 1][width - 1]) {
        return false
    }

    let lower = 0
    let upper = height - 1
    while (lower < upper) {
        let mid = Math.floor((lower + upper) / 2)
        if (matrix[mid][0] > target) { // too big
            upper = mid
        } else if (target >= matrix[mid + 1][0]) { // too small
            lower = mid + 1
        } else {
            lower = upper = mid
        }
    }

    let row = matrix[lower]
    // special case
    if (target > matrix[lower][width - 1]) {
        return false
    }

    lower = 0
    upper = width - 1
    // search row
    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2)
        if (row[lower] === target || row[mid] === target || row[upper] === target) {
            return true
        } else if (row[mid] > target) { // too big
            upper = mid - 1
        } else { // too small
            lower = mid + 1
        }
    }
    return false
};

