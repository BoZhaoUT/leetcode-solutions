/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""
    }
    // assume the first str is the longest common prefix
    let result = strs[0]
    let i = 1
    while (i < strs.length && result !== "") {
        const commonStartsAt = strs[i].search(result)
        // take out the last char and re-try
        if (commonStartsAt !== 0) {
            result = result.substring(0, result.length - 1)
        } else {
            i++
        }
    }
    return result
};
