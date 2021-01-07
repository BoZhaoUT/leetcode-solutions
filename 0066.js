/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1
    while (i >= 0) {
        let curr = digits[i]
        if (curr <= 8) {
            digits[i]++
            return digits
        }
        // digit === 9
        digits[i] = 0
        i--
    }
    return [1, ...digits]
};

