/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    const strings = []
    for (let j = 0; j < numRows; j++) {
        strings.push("")
    }
    let index = 0
    let increase = true
    for (let i = 0; i < s.length; i++) {
        strings[index] = strings[index] + s[i]
        if (index === 0) {
            increase = true
        } else if (index === numRows - 1) {
            increase = false
        }
        index = increase ? index + 1 : index - 1
    }
    let result = ""
    for (i = 0; i < numRows; i ++) {
        result += strings[i]
    }
    return result
};
