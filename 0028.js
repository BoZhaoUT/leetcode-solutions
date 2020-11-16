/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // special cases
    if (needle === "") {
        return 0
    }
    let i = 0
    while (i < haystack.length) {
        let j = 0
        while (j < needle.length) {
            if (needle[j] === haystack[i + j]) {
                j++
            } else {
                break
            }
        }
        if (j === needle.length) {
            return i
        }
        i++
    }
    return -1
};

