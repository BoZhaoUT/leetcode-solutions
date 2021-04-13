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
    const knowns = {}
    cells = cells.join("")
    let day = 0
    while (day < n && knowns[cells] === undefined) {
        knowns[cells] = day
        cells = getNextDay(cells)
        day++
    }
    if (day === n) {
        return cells.split("")
    } else {
        day = n % day
        return prisonAfterNDays(cells.split(""), day)
    }
};

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 777))

