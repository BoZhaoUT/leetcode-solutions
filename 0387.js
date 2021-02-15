/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const frequency = {}
    for (char of s) {
        frequency[char] = frequency[char] + 1 || 1
    }
    let i = 0;
    while (i < s.length) {
        if (frequency[s[i]] === 1) {
            return i
        }
        i++
    }
    return -1
};
