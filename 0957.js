// get the cells status for the next day
// the first and last cell are always empty after the 1st day
const getNextDay = cells => {
    let result = "0"
    for (let i = 1; i < cells.length - 1; i++) {
        result += cells[i - 1] === cells[i + 1] ? "1" : "0"
    }
    return result + "0"
}

/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    let curr = cells.join("")
    let next = getNextDay(curr)
    const cellsArray = [next]
    while (n > 0) {
        curr = next
        next = getNextDay(next)
        n--
        // found a cycle
        if (next === cellsArray[0]) {
            break
        }
        cellsArray.push(next)
    }
   
    let result
    // no cycle
    if (n === 0) {
        result = curr
    } else {
        // console.log({n})
        // cycle
        const cycleLength = cellsArray.length
        n = (n - 1) % cycleLength
        result = cellsArray[n]
        // console.log({cellsArray, n, result, cycleLength})
    }
    // return result
    return result.split("")
};

// slow algorithm for testing
const prisonAfterNDaysTest = (cells, n) => {
    let next = getNextDay(cells)
    while (n > 1) {
        next = getNextDay(next)
        n--
    }
    return next
}

// analysis of the prison cells
// there are at most 2^6 = 64 different combinations
// because the first and last cells are always empty for the first day

// prev    0   1   2   3   4   5   6   7
// curr    0   a   0   b   0   c   0   0
// the curr[1], curr[3], curr[5] depend on prev[0], prev[2], prev[4], prev[6]



// const runTest = (cells, n) => {
//     let i = 1
//     while (i <= n) {
//         const expected = prisonAfterNDaysTest(cells, i)
//         const actual = prisonAfterNDays(cells, i)
//         const diff = actual === expected ? "" : "X"
//         console.log(expected, i, actual, diff)
//         i++
//     }
// }

// runTest([1,1,0,1,1,0,0,1], 50)
// runTest([1,1,0,1,1,0,0,1], 14)
// test case #1
// cycleLength: 14
// cellsArray: [
    // '00100000', n = 1    15
    // '00101110', n = 2    16
    // '00110100', n = 3    17
    // '00001100', n = 4    18
    // '01100000', n = 5    19
    // '00001110', n = 6    20
    // '01100100', n = 7    21
    // '00000100', n = 8    22
    // '01110100', n = 9    23
    // '00101100', n = 10   24
    // '00110000', n = 11   25
    // '00000110', n = 12   26
    // '01110000', n = 13   27
    // '00100110'  n = 14   28
//   ]


// test case #2
// initial cells: [1,0,0,1,0,0,1,0]
// [                
    // '00010010', n = 1    15
    // '01010010', n = 2    16
    // '01110010', n = 3    17
    // '00100010', n = 4    18
    // '00101010', n = 5    19
    // '00111110', n = 6    20
    // '00011100', n = 7    21
    // '01001000', n = 8    22
    // '01001010', n = 9    23
    // '01001110', n = 10   24
    // '01000100', n = 11   25
    // '01010100', n = 12   26
    // '01111100', n = 13   27
    // '00111000'  n = 14   28
// ]
