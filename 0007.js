/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = x < 0 ? (-x).toString() : x.toString()
    let reversed = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "-") {
            reversed = s[i] + reversed
        }
    }
    const parsed = parseInt(reversed)
    let result = x < 0 ? -1 * parsed : parsed
    result = result < (-2)**31 ? 0 : result
    result = result > 2**31 ? 0 : result
    return result
};

