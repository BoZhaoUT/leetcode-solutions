/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const buffer = []
    for (let char of s) {
        if ("([{".includes(char)) {
            buffer.push(char)
        } else if (char === ")" && buffer[buffer.length - 1] === "(") {
            buffer.pop()
        } else if (char === "]" && buffer[buffer.length - 1] === "[") {
            buffer.pop()
        } else if (char === "}" && buffer[buffer.length - 1] === "{") {
            buffer.pop()
        } else {
            return false
        }
    }
    return buffer.length === 0
};
