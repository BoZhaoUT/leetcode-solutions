class TicTacToe {
    constructor(n) {
        this.size = n
        this.column = new Array(n)
        this.row = new Array(n)
        this.hill = 0 // bottom-left to top-right diangal
        this.dale = 0 // top-left to bottom-right diagnal
    }

    // row:    [0, 0, 3]
    // column: [1, 1, 1]

    // player 1: 2, 1
    // player 1: 2, 2
    // player 1: 2, 0

    /*
     * 0 - no win
     * 1 - player 1 wins
     * -1 - player 2 wins
     */
    move(row, column, player) {
        // update the status of row, column and dale
        this.row[row] += player
        this.column[column] += player
        if (row === column) {
            this.dale += player
        }
        if (row + column === this.size - 1) {
            this.hill += player
        }

        // check winning condition
        const winningCondition = player * n
        if (this.row[row] === winningCondition
            || this.column[column] === winningCondition
            || this.hill === winningCondition
            || this.dale === winningCondition) {
                return player
            }
        return 0
    }
}



//     0   1   2
// 0  0,0 0,1 0,2
// 1  1,0 1,1 1,2
// 2  2,0 2,1 2,2
