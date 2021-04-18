/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const charSet = new Set(t)
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
        }
    }
    // console.log({filteredS})
    // impossible to form a window
    if (filteredS.length < charSet.size) {
        return ""
    }
    // console.log({filteredS})
    // the start and end index of the current window in filteredS
    let start = 0
    let end = 0
    // track the count of each chars in the current window
    const occurence = {}
    // number of unique chars in window
    let size = 0
    // the start and end index of the smallest window in s
    let resultStart = 0
    let resultEnd = s.length
    while (start < filteredS.length - 1) {
        // wnidow doesn't contains all chars in t
        // move the end index so window will contain more chars
        if (end <= filteredS.length - 1 && size < charSet.size) {
            const { char } = filteredS[end]
            const count = occurence[char]
            // adding a new char into window
            if (count === undefined || count === 0) {
                occurence[char] = 1
                size++
            } else {
                occurence[char]++
            }
            end++
        } else { 
            // window contains all chars in t
            // move the start index, so window size will become smaller
            const { char } = filteredS[start]
            occurence[char]--
            start++
            // the new window doesn't contain all chars in t
            if (occurence[char] === 0) {
                size--
            }
        }
        // console.log({occurence, start,end})
        // current window contain all chars in t
        if (size === charSet.size) {
            const minWindowSize = resultEnd - resultStart
            const currWindowEnd = filteredS[end - 1].index
            const currWindowStart = filteredS[start].index
            const currWindowSize = currWindowEnd - currWindowStart
            // console.log({start,end})
            // console.log({resultStart,resultEnd,currWindowStart,currWindowEnd})
            // updathe the result window indexes
            if (currWindowSize < minWindowSize) {
                resultStart = currWindowStart
                resultEnd = currWindowEnd
            }
        }
    }

    return s.slice(resultStart, resultEnd + 1)
};



// console.log(minWindow("ADOBECODEBANC", "ABC")) // "BANC"
// console.log(minWindow("ABECFFBAC", "ABC")) // "BANC"
// console.log(minWindow("ADOBECODEBANC", "XYZ")) // ""
// console.log(minWindow("a", "a")) // "a"
console.log(minWindow("a", "aa")) // ""
