/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let row = Array(n).fill(0)
    const result = Array(n).fill([...row])
    let direction = "right"
    let i = 0
    let j = 0
    let num = 1
    let rightBound = n - 1
    let bottomBound = n - 1
    let leftBound = 0
    let upperBound = 0
    while (num < n) {
        result[i][j] = num
        if (direction === "right") {

        } else if (direction === "bottom") {

        } else if (direction === "left") {

        } else if (direction === "upper") {

        }
    }
    return result
};

console.log(generateMatrix(4))
