/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let known = []
    let result = 0
    let longest = 0
    for (char of s) {
        const index = known.indexOf(char)
        if (index >= 0) {
            result = known.length > result ? known.length : result
            known = known.slice(index + 1, known.length)
        }
        known.push(char)
    }
    result = known.length > result ? known.length : result
    return result
};
