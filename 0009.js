/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 0 - 9 are palindrome
    if (0 <= x && x < 10) {
        return true
    }
    // mutiples of 10 cannot be palindrome
    if (x % 10 === 0) {
        return false
    } 
    let reversed = 0
    let result = false
    while (x >= reversed) {
        // reverse the param x
        reversed = reversed * 10 + x % 10
        // removing the last digit from param x
        x = Math.floor(x / 10)
        // can skip the middle digit
        if (x === reversed || Math.floor(x / 10) === reversed) {
            return true
        }
    }
    return result
};
