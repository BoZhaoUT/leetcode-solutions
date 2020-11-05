/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = ""
    for (char of s) {
        if (result === "" && (char === "+" || char === "-")) {
            result = char
        } else if (char >= "0" && char <= "9") {
            result += char
        } else if (result !== "" || char !== " ") {
            break
        }
    }
    result = result === "" ? 0 : parseInt(result)
    result = isNaN(result) ? 0 : result
    result = result >= 2**31 ? 2**31 - 1 : result
    result = result < (-2)**31 ? (-2)**31 : result
    return result
};
