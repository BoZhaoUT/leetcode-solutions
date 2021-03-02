/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    let currWords = new Set([beginWord])
    let neighbourWords = new Set()
    let distanceMap = {}
    let distance = 0
    while (currWords.size && !distanceMap[endWord]) {
        currWords.forEach(currWord => {
            // find neighbours that we don't know the distance
            wordSet.forEach(word => {
                // a new word
                if (!distanceMap[word] && !neighbourWords[word] && word !== currWord) {
                    if (isNeighbour(currWord, word)) {
                        neighbourWords.add(word)
                        wordSet.delete(word)
                    }
                }
            })
            distanceMap[currWord] = distance 
        })
        distance++
        currWords = neighbourWords
        neighbourWords = new Set()
    }
    return distanceMap[endWord] + 1 || 0
};

const isNeighbour = (word1, word2) => {
    let diff = 0
    let i = 0
    while (i < word1.length && diff <= 1) {
        diff += word1[i] === word2[i] ? 0 : 1
        i++
    }
    return diff === 1
}

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))

