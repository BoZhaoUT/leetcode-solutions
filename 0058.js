/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // special case
    if (s.length === 0) {
        return 0
    }
    let result = 0
    let i = s.length - 1
    let isWord = false
    while (i >= 0) {
        if (s[i] !== " ") {
            isWord = true
            result++
        }
        if (s[i] === " " && isWord) {
            break
        }
        i--
    }
    return result
};
