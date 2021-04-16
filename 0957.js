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
    const cellsMap = {}
    let cellsArray = []
    let day = 0
    let curr = cells.join("")
    while (day < n && cellsMap[curr] === undefined) {
        cellsMap[curr] = day
        cellsArray.push(curr)
        curr = getNextDay(curr)
        day++
    }
    // no cycle
    if (day === n) {
        return curr
        return curr.split("")
    }
    let result
    // cycle
    const cycleStartIndex = cellsMap[curr]
    const cycleLength = cellsArray.length - cycleStartIndex
    day = n % cycleLength
    // console.log({n, day, cycleStartIndex, cycleLength, cellsArray})
    if (cycleLength === 1) {
        result = cellsArray[cycleStartIndex]
    } else if (cycleStartIndex === 0) {
        result = cellsArray[cycleStartIndex + day]
    } else {
        // console.log("====")
        result = cellsArray[cycleStartIndex + day - 1]
    }
    return result
    return result.split("")
};

// console.log(prisonAfterNDays([1,1,1,1,1,1,1,1], 111)) // 00011000

// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 1)) // 01100000
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 2)) // 00001110
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 14)) // 00001100
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 15)) // 01100000
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 16)) // 00001110
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 17)) // 01100100
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 18)) // 00000100
// console.log(prisonAfterNDays([1,1,0,1,1,0,1,1], 6)) // 00100100
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 18))
// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 7))


const looper = n => {
    let i = 0
    while (i < n) {
        console.log(i, prisonAfterNDays([1,1,0,1,1,0,0,1], i))
        i++
    }
}

looper(50)

// cycleStartIndex: 1
// cycleLength: 14
// cellsArray: [
    // '11011001', n = 0
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


// '11011001', n = 0
// '00100000'

// 1, 3 diff
// 2, 4 same
// 3, 5 diff
