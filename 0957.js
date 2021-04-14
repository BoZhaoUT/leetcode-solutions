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
    const cellsSet = new Set()
    const cellsArray = []
    cells = cells.join("")
    let day = 0
    while (day < n && !cellsSet.has(cells)) {
        cellsSet.add(cells)
        cellsArray.push(cells)
        cells = getNextDay(cells)
        day++
    }
    // console.log(cellsSet)
    // console.log(cellsArray)
    let result
    if (day === n) {
        result = cells
    } else {
        // a cycle is found
        const cellIndex = cellsArray.findIndex(element => element === cells)
        const cycleLength = cellsArray.length - cellIndex
        day = n % cycleLength
        console.log({cycleLength, day, cellsArray})
        result = cellsArray[day]
    }
    return result.split("")
};

// console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 777)) 
// console.log(prisonAfterNDays([0,0,1,1,1,1,0,0], 8))
console.log(prisonAfterNDays([1,1,0,1,1,0,1,1], 6))