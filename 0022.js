/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    return helper(0, 0, n, "", [])
};

var helper = function(numLeft, numRight, n, curr, results) {
    if (n === numRight) {
        results.push(curr)
        return results
    }
    if (numLeft < n) {
        helper(numLeft + 1, numRight, n, curr + "(", results)
    }
    if (numLeft > numRight) {
        helper(numLeft, numRight+1, n, curr + ")", results)
    }
    return results
}
