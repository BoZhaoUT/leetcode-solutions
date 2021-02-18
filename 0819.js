/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // calculate the frequency of each word in paragraph
    const frequency = {}
    let i = 0;
    let char
    let word = ""
    while (i < paragraph.length + 1) {
        char = paragraph[i]
        if (char && /[a-zA-Z]/.test(char)) {
            word += char
        } else if (word) {
            word = word.toLowerCase()
            frequency[word] = frequency[word] + 1 || 1
            word = ""
        }
        i++
    }
    // take out banned words
    banned.forEach(bannedWord => frequency[bannedWord] = -1)
    // find the most frequent word
    let topOccurance = 0
    let result = ""
    Object.keys(frequency).forEach(word => {
        occurance = frequency[word]
        if (occurance > topOccurance) {
            result = word
            topOccurance = occurance
        }
    })
    return result
};

// console.log("B".match(/[a-zA-Z]/))
// console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))
console.log(mostCommonWord("Bob", ["hit"]))
