/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const row = Array(n).fill(0)
    const matrix = []
    // const matrix = Array(n).fill([]) <- this doesn't work
    let rowIndex = 0
    while (rowIndex < n) {
        matrix.push([...row])
        rowIndex++
    }
    let direction = "east"
    let num = 1
    let eastBound = n - 1
    let westBound = 0
    let northBound = 1
    let southBound = n - 1
    let i = 0
    let j = 0
    while (num <= n * n) {
        matrix[i][j] = num
        num++
        if (direction === "east") {
            // turn
            if (j === eastBound) {
                direction = "south"
                eastBound--
                i++
            } else {
                j++
            }
        } else if (direction === "south") {
            // turn
            if (i === southBound) {
                direction = "west"
                southBound--
                j--
            } else {
                i++
            }
        } else if (direction === "west") {
            // turn
            if (j === westBound) {
                direction = "north"
                westBound++
                i--
            } else {
                j--
            }
        } else if (direction === "north") {
            // turn
            if (i === northBound) {
                direction = "east"
                northBound++
                j++
            } else {
                i--
            }
        }

    }
    return matrix
};
