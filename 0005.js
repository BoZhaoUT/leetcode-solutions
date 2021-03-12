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


// dp
// var longestPalindrome = function(s) {
//     // special case
//     if (s.length <= 1) {
//         return s
//     }

//     const dp = Array(s.length).fill().map(() => Array(s.length).fill(false))

//     // all length of 1 strings are palindrome
//     for (let i = 0; i < s.length; i++) {
//         dp[i][i] = true
//     }

//     let result = s[0]

//     // find all length 2 palindrome strings
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === s[i + 1]) {
//             dp[i][i + 1] = true
//             result = s.slice(i, i + 2)
//         }
//     }

//     let i = 0
//     let gap = 2 // gaps of 0 and 1 are covered from above
//     // fill all cells in upper diagnal in dp
//     while (gap < s.length) {
//         while (i + gap < s.length) {
//             // ending index
//             const j = i + gap
//             // if the outter chars are the same and inner substring is palindrome
//             if (s[i] === s[j] && dp[i + 1][j - 1]) {
//                 dp[i][j] = true
//                 result = s.substr(i, j + 1)
//             }
//             i++
//         }
//         i = 0
//         gap++
//     }

//     return result
// };


// console.log(longestPalindrome("aabba"))