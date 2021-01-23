/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const height = board.length
    const width = board[0].length

    const searchWord = (i, j, word, visited) => {
        // found the word
        if (word === "") {
            return true
        }
        // out of range
        if (i < 0 || i >= height || j < 0 || j >= width) {
            return false
        }
        // wrong character
        if (board[i][j] !== word[0]) {
            return false
        }
        const cell = `${i},${j}`
        if (visited.has(cell)) {
            return false
        }
        visited.add(cell)

        
        const remaining = word.slice(1, word.length)
        // console.log("visited", visited)
        return searchWord(i, j + 1, remaining, new Set(visited)) ||
            searchWord(i + 1, j, remaining, new Set(visited)) ||
            searchWord(i, j - 1, remaining, new Set(visited)) ||
            searchWord(i - 1, j, remaining, new Set(visited))
    }


    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === word[0]) {
                const result = searchWord(i, j, word, new Set())
                if (result) {
                    return true
                }
            }
        }
    }
    return false
};
