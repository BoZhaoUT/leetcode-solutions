/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) { 
    let lower = 1
    let upper = Math.floor(x / 2) + 1
    while (lower <= upper) {
        let mid = Math.floor((upper + lower) / 2)
        let square = mid * mid
        // perfect square
        if (square === x) {
            return mid
        }

        if (square > x) {
            upper = mid - 1
        } else {
            lower = mid + 1
        }
    }
    return upper
};

// [1, x/2 + 1]

console.log(mySqrt(1))
console.log(mySqrt(3))
console.log(mySqrt(9))
