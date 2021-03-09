/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
    const height = board.length
    const width = board[0].length
    const initials = {}
    const result = new Set()
    words.forEach(word => {
        if (!initials[word[0]]) {
            initials[word[0]] = [word]
        } else {
            initials[word[0]].push(word)
        }
    })

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]] // east, west, north, south

    const findWord = (x, y, word, remainingChars, usedCoordinates) => {
        const textCoordinates = `${x}-${y}`
        // skip the cells that have been used
        if (!usedCoordinates.has(textCoordinates) && board[x][y] === remainingChars[0]) {
            remainingChars = remainingChars.slice(1)
            usedCoordinates.add(textCoordinates)
            if (remainingChars.length === 0) {
                result.add(word)
                return true
            }
            for (direction of directions) {
                const newX = x + direction[0]
                const newY = y + direction[1]
                if (0 <= newX && newX < height && 0 <= newY && newY < width) {
                    findWord(newX, newY, word, remainingChars, usedCoordinates)
                }
            }
            usedCoordinates.delete(textCoordinates)
        }
    }

    for (let x = 0; x < height; x++) {
        for (let y = 0; y < width; y++) {
            // only try to find word if the letter on this cell is the initial of at least one words
            if (initials[board[x][y]]) {
                initials[board[x][y]] = initials[board[x][y]].filter(matchingWord => {
                    return !findWord(x, y, matchingWord, matchingWord, new Set())
                })
            }
        }
    }
    return [...result]
};

// const board = [
//     ["o","a","a","n"],
//     ["e","t","a","e"],
//     ["i","h","k","r"],
//     ["i","f","l","v"]
// ]
// console.log(findWords(board, ["oath","pea","eat","rain"]))

// const board = [
//     ["o","a","b","n"],
//     ["o","t","a","e"],
//     ["a","h","k","r"],
//     ["a","f","l","v"]
// ]
// console.log(findWords(board, ["oa","oaa"]))

// const board = [
//     ["a","b","c"],
//     ["a","e","d"],
//     ["a","f","g"]
// ]
// console.log(findWords(board, ["eaabcdgfa"]))

// const board = [
//     ["o","a","b","n"],
//     ["o","t","a","e"],
//     ["a","h","k","r"],
//     ["a","f","l","v"]
// ]
// console.log(findWords(board, ["oa", "oaa"]))