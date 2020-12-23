/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = []
    let i = 0
    let j = 0
    let direction = "right"
    let rightBound = matrix[0].length - 1
    let leftBound = 0
    let lowerBound = matrix.length - 1
    let upperBound = 1
    while (result.length < matrix.length * matrix[0].length) {
        // console.log(`direction=${direction}`)
        result.push(matrix[i][j])
        if (direction === "right") {
            // turn
            if (j === rightBound) {
                direction = "down"
                rightBound--
                i++
            } else {
                j++
            }
        } else if (direction === "down") {
            // turn
            if (i === lowerBound) {
                direction = "left"
                lowerBound--
                j--
            } else {
                i++
            }
        } else if (direction === "left") {
            // turn
            if (j === leftBound) {
                direction = "up"
                leftBound++
                i--
            } else {
                j--
            }
        } else if (direction === "up") {
            // turn
            if (i === upperBound) {
                direction = "right"
                upperBound++
                j++
            } else {
                i--
            }
        }
    }
    return result
};
