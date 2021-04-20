/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    // store all requried chars in a map
    const requiredChars = {}
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if (requiredChars[char] === undefined) {
            requiredChars[char] = 1
        } else {
            requiredChars[char] += 1
        }
    }

    // use this shallow copy of required chars to 
    // check whether s contains at least 1 window
    const requiredCharsCopy = { ...requiredChars }
    
    // the algorithm will go through string s twice
    // so it's better to filtred out all the characters that
    // are not in t
    const filteredS = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        // char is requried in window
        if (requiredChars[char]) {
            filteredS.push({
                char,
                index: i
            })
        }
        // decrease the count of required chars
        const count = requiredCharsCopy[char] || 0
        if (count <= 1) {
            delete requiredCharsCopy[char]
        } else {
            requiredCharsCopy[char]--
        }
    }
    // impossible to form a window
    if (filteredS.length < t.length || Object.keys(requiredCharsCopy).length > 0) {
        return ""
    }

    // the start and end index of the current window in filteredS
    let start = 0
    let end = 0
    // track the count of each chars in the current window
    const window = {}
    let numMissingChars = t.length

    // the start and end index of the smallest window in s
    let resultStart = 0
    let resultEnd = s.length
    while (start <= filteredS.length - 1) {
        // wnidow doesn't contain all chars in t
        // move the end index so window will contain more chars
        if (end <= filteredS.length - 1 && numMissingChars > 0) {
            const { char } = filteredS[end]
            const count = window[char] || 0
            // adding a new char into window
            if (count === 0) {
                window[char] = 1
            } else {
                window[char] += 1
            }
            // decrease num of missing chars for a window
            if (count < requiredChars[char]) {
                numMissingChars--
            }
            end++
        } else { 
            // window contains all chars in t
            // move the start index, so window size will become smaller
            const { char } = filteredS[start]
            window[char]--
            start++
            // incrase number of missing chars
            if (window[char] < requiredChars[char]) {
                numMissingChars++
            }
        }

        // current window contain all chars in t
        if (numMissingChars === 0) {
            
            const minWindowSize = resultEnd - resultStart
            const currWindowEnd = filteredS[end - 1].index
            const currWindowStart = filteredS[start].index
            const currWindowSize = currWindowEnd - currWindowStart
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
// console.log(minWindow("ABECFFBAC", "ABC")) // "BAC"
// console.log(minWindow("a", "a")) // "a"
// console.log(minWindow("ab", "a")) // "a"
// console.log(minWindow("babb", "baba")) // ""
// console.log(minWindow("ADOBECODEBANC", "XYZ")) // ""
// console.log(minWindow("aa", "aaa")) // ""
