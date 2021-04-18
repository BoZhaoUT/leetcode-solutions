/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const charSet = new Set(t)

    const occurence = {}
    // the algorithm will go through string s twice
    // so it's better to filtred out all the characters that
    // are not in t
    const filteredS = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (charSet.has(char)) {
            filteredS.push({
                char,
                index: i
            })
            const count = occurence[char]
            occurence[char] = count === undefined ? 1 : count + 1
        }
    }

    // impossible to form a window
    if (filteredS.length < charSet.size) {
        return ""
    }

    let start = 0
    let end = 0
    while (start < filteredS.length) {
        // window contains all chars in t

        // wnidow doesn't contains all chars in t
    }
    return result
};



console.log(minWindow("ADOBECODEBANC", "ABC")) // "BANC"
console.log(minWindow("ADOBECODEBANC", "XYZ")) // ""
console.log(minWindow("a", "a")) // "a"