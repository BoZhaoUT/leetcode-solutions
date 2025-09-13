const getDistance = (point1, point2) => {
  const [point1X, point1Y] = point1
  const [point2X, point2Y] = point2
  return Math.sqrt((point1X - point2X) ** 2 + (point1Y - point2Y) ** 2)
}

// console.log(getDistance([0, 0], [1, 1])) // 1.414
// console.log(getDistance([1, 1], [0, 0])) // 1.414
// console.log(getDistance([0, 0], [1, 0])) // 1
// console.log(getDistance([-2, 0], [2, 0])) // 4
// console.log(getDistance([0, 0], [0, 0])) // 0



/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = (p1, p2, p3, p4) => {
  const points = [p1, p2, p3, p4]
  const distances = new Set()
  for (let i = 0; i < points.length; i++) {
    const curr = points[i]
    let j = 0
    while (j < points.length) {
      // skip curr itself
      if (i === j) {
        j++
        continue
      }
      const other = points[j]
      const distance = getDistance(curr, other)
      if (distance === 0) {
        // console.log("same point")
        return false
      }
      if (i === 0) {
        distances.add(distance)
      } else {
        if (!distances.has(distance)) {
          // console.log({distance, distances, i})
          return false
        }
      }
      if (distances.size > 2) {
        return false
      }
      j++
    }
  }

  return true
}

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1])) // true
console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 12])) // false
console.log(validSquare([1, 0], [-1, 0], [0, 1], [0, -1])) // true

console.log(validSquare([1, 0], [1, 0], [0, 1], [0, -1])) // true
console.log(validSquare([0, -1], [1, 0], [0, 1], [-1, 0])) // true

console.log(validSquare([0, 0], [5, 0], [5, 4], [0, 4])) // false

