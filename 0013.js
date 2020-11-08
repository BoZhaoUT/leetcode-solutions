/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    const map = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }
    while (s) {
        const currChar = s[0]
        const nextChar = s[1]
        const combination = currChar + nextChar
        if (map[combination]) {
            result += map[combination]
            s = s.substring(2, s.length)
        } else {
            result += map[currChar]
            s = s.substring(1, s.length)
        }
    }
    return result
};
