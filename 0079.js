/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const height = board.length
    const width = board[0].length

    const searchWord = (i, j, word, prevCharDirection) => {
        // foudn the word
        if (word === "") {
            console.log("word", word, "reutnring true", prevCharDirection)
            return true
        }
        // out of range
        if (i < 0 || i >= height || j < 0 || j >= width) {
            console.log("out of range")
            return false
        }
        // wrong character
        if (board[i][j] !== word[0]) {
            return false
        }
        
        const remaining = word.slice(1, word.length)
        return prevCharDirection !== "west" && searchWord(i, j + 1, remaining, "east") ||
            prevCharDirection !== "north" && searchWord(i + 1, j, remaining, "south") ||
            prevCharDirection !== "east" && searchWord(i, j - 1, remaining, "west") ||
            prevCharDirection !== "south" && searchWord(i - 1, j, remaining, "north")
    }


    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === word[0]) {
                const result = searchWord(i, j, word)
                if (result) {
                    return true
                }
            }
        }
    }
    return false
};



// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const board = [["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]]
// const board = [["A", "A", "A"]]
// console.log(exist(board, "ABCCED"))
console.log(exist(board, "aaaaaaaaaaaaa"))
// console.log(exist(board, "AAA"))