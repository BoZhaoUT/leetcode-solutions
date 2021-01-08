/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = ""
    let i = 0
    const iteration = Math.max(a.length, b.length)
    let carry = 0
    while (i < iteration) {
        let digitA = a[a.length - 1 - i] || 0
        let digitB = b[b.length - 1 - i] || 0
        sum = parseInt(digitA) + parseInt(digitB) + carry
        if (sum === 0) {
            result = "0" + result
            carry = 0
        } else if (sum === 1) {
            result = "1" + result
            carry = 0
        } else if (sum === 2) {
            result = "0" + result
            carry = 1
        } else { // sum === 3
            result = "1" + result
            carry = 1
        }
        i++
    }
    if (carry) {
        result = "1" + result
    }
    return result
};
