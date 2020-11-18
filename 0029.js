/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // special cases
    // without special cases leetcode evaluation will fail due to exceeding time liimt
    if (divisor === 1) {
        return dividend
    } else if (divisor === -1) {
        return -dividend
    }
    
    let result = 0
    let dividendAbs = Math.abs(dividend)
    let divisorAbs = Math.abs(divisor)
    while (dividendAbs >= divisorAbs) {
        dividendAbs -= divisorAbs
        result++
    }
    // dividend XOR divisor
    if (dividend < 0 ^ divisor < 0) {
        result = result * -1
    }
    
    // overflow and underflow
    if (result > 2147483647) {
        return 2147483647
    } else if (result < -2147483648) {
        return -2147483648
    }

    return result
};

var divide = function(dividend, divisor) {
    const retIsNegative = divisor > 0 ^ dividend > 0
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    
    let ret = 0
    while (divisor <= dividend) {
        let value = divisor
        let multiple = 1
        while (value + value <= dividend) {
            value += value
            multiple += multiple
        }
        dividend = dividend - value
        ret += multiple
    }
    
    if (ret > ((2**31) - 1)) {
        return retIsNegative ? -(2**31) : 2**31 - 1
    }
    return retIsNegative ? -ret : ret
};
