/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // special case
    if (n === 1) {
        return "1"
    }
    let prevStr = "1"
    let newStr = ""
    for (let i = 1; i < n; i++) {
        let prevChar
        let count = 1
        for(let charIndex = 0; charIndex < prevStr.length; charIndex++) {
            // initialize first char
            if (charIndex === 0) {
                prevChar = prevStr[0]
                newStr = ""
            // repeat char
            } else if (prevStr[charIndex] === prevChar) {
                count++
            // different char
            } else {
                newStr += count + prevChar
                count = 1
                prevChar = prevStr[charIndex]
            }
            // the last char
            if (charIndex === prevStr.length - 1) {
                newStr += count + prevStr[charIndex]
            }
        }
        prevStr = newStr
    }
    return newStr || prevStr
}


// n = 1, result = 1, base case
// n = 2, result = 11, because n = 1 has one "1"
// n = 3, result = 21, because n = 2 has two "1"
// n = 4, result = 1211, because n = 3 has one "2" and one "1"
// n = 5, result = 111221, because n = 4 has one "1", one "2" and two "1"
// n = 6, result = 312211, because n = 5 has three "1", two "2" and one "1"
// n = 7, result = 13112221, because n = 6 has one "3", one "1", two "2" and two "1"`
