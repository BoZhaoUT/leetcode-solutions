/**
 * Return the longest parlindromic substring centered at i or i and i+1
 * @param {string} s
 * @param {number} i
 * @param {number} j
 * @return {string}
 */
var getPalindrome = function(s, i, j) {
    while (i >= 0 && j < s.length && s[i-1] === s[j+1]) {
        i -= 1
        j += 1
    }
    return s.substring(i, j+1)
}


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ""
    for (let i = 0; i < s.length; i++) {
        const odd = getPalindrome(s, i, i)
        const even = s[i] === s[i+1] ? getPalindrome(s, i, i+1) : ""
        const currentLongest = odd.length > even.length ? odd : even
        result = currentLongest.length > result.length ? currentLongest : result
    }
    return result
};
