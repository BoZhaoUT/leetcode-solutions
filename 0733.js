/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // special case: no need to paint
    if (image[sr][sc] === newColor) {
        return image
    }

    const height = image.length
    const width = image[0].length
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    const oldColor = image[sr][sc] // all adjacent cells with old color will be painted

    const paint = (x, y) => {
        if (image[x][y] === oldColor) {
            image[x][y] = newColor
            for (let direction of directions) {
                const newX = x + direction[0]
                const newY = y + direction[1]
                // coordinate is valid
                if (0 <= newX && newX < height && 0 <= newY && newY <= width) {
                    if (image[newX][newY] === oldColor) {
                        paint(newX, newY)
                    }
                }
            }
        }
    }
    paint(sr, sc)
    return image
};

// console.log(floodFill([
//     [1,1,1],
//     [1,1,0],
//     [1,0,1]
// ], 1, 1, 2))

