/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let finished = false
    let seen = new Set()
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j]
            // skip empties
            if (num === ".") {
                continue
            }
            let row = num + " in row " + i
            let column = num + " in column " + j
            let box = num + " in box " + Math.floor(i / 3) + Math.floor(j / 3)
            let size = seen.size
            seen.add(row)
            seen.add(column)
            seen.add(box)
            
            if (seen.size !== size + 3) {
                return false
            }
            
        }
    }
    return true
};

