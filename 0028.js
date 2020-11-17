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
    let j = 0
    let nextSearchStart = 0
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            i++
            j++
            if (haystack[i] === needle[0] && nextSearchStart === 0) {
                nextSearchStart = i
            }
        } else {
            i = nextSearchStart ? nextSearchStart : i
            if (nextSearchStart) {
                i = nextSearchStart
                nextSearchStart = 0
            } else {
                i++
            }
            j = 0
        }
        
    }
    return j === needle.length ? i - j : -1
};

