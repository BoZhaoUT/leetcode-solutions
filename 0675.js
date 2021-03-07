/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    // for time complexity, let n = num of cells

    // height and width of the golf yard
    const height = forest.length
    const width = forest[0].length
    // coordiantes of tree from shortest to highest
    const cutTreeOrder = []
    // O(n) time
    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            if (forest[row][column] > 0) {
                // [row, column, treeHeight]
                cutTreeOrder.push([row, column, forest[row][column]])
            }
        }
    }
    // O(n * log n) time
    cutTreeOrder.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]])
    console.log(cutTreeOrder)

    // O(n) time
    const shortestDistance = (origin, destination) => {
        // true if it's checked or in next array
        const visited = Array(height).fill().map(() => Array(width).fill(false))
        let distance = 0
        // special case
        if (origin[0] === destination[0] && origin[1] === destination[1]) {
            return 0
        }

        // north, south, west, east
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

        let curr = [origin]
        let next = []
        while (curr.length || next.length) {
            while (curr.length) {
                const [x, y] = curr.pop()
                if (!visited[x][y]) {
                    for (direction of directions) {
                        const nextX = x + direction[0]
                        const nextY = y + direction[1]
                        // coordinates are valid
                        if (0 <= nextX && nextX < height && 0 <= nextY && nextY < width) {
                            // destination is found
                            if (nextX === destination[0] && nextY === destination[1]) {
                                return distance + 1
                            }
    
                            // add this adjacent cell into next array if it needs to be checked
                            if (forest[nextX][nextY] !== 0 && !visited[nextX][nextY]) {
                                next.push([nextX, nextY])
                            }
                        }
                    }
                    visited[x][y] = true
                }
            }
            distance++
            curr = next
            next = []
        }
        return -1
    }

    let result = 0
    let i = 0
    let origin = [0, 0]
    // O(n ^ 2)
    while (result >= 0 && i < cutTreeOrder.length) {
        // O(n)
        const distance = shortestDistance(origin, cutTreeOrder[i])
        result = distance === -1 ? -1 : result + distance
        origin = cutTreeOrder[i]
        i++
    }

    return result
};



// 2, 2 -> [1, 2], [2, 3], [3, 2], [2, 1]

// 1. create a list of corrdiantes sorted by tree height in increasing order
// 2. find the shortest distance between one cell to another, in the meantime,
//    detect if there is at least one way

console.log(cutOffTree([[1,2,3],[0,0,4],[7,6,5]]))
console.log(cutOffTree([[1,2,3],[0,0,0],[7,6,5]]))
// console.log(cutOffTree([
//     [54581641,64080174,24346381,69107959],
//     [86374198,61363882,68783324,79706116],
//     [668150,92178815,89819108,94701471],
//     [83920491,22724204,46281641,47531096],
//     [89078499,18904913,25462145,60813308]
// ]))

// const forest = [[54581641,64080174,24346381,69107959],[86374198,61363882,68783324,79706116],[668150,92178815,89819108,94701471],[83920491,22724204,46281641,47531096],[89078499,18904913,25462145,60813308]]
// const height = 5
// const width = 4
// console.log(shortestDistance([3, 1], [0, 2]))