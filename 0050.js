/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // special case
    if (n === 0) {
        return 1
    }
    if (x === 1) {
        return 1
    }
    if (x === -1) {
        return n % 2 === 0 ? 1 : -1
    }
    const power = Math.abs(n)
    let result = x
    for (let i = 1; i < power; i++) {
        result = result * x
    }
    return n > 0 ? result : 1 / result
};
