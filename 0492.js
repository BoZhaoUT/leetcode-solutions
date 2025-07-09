/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = (area) => {
  let l = area
  let w = 1
  for (let i = 2; i <= Math.sqrt(area); i++) {
    const candidate = area / i
    if (Number.isInteger(candidate)) {
      l = candidate
      w = i
    }
  }

  return [l, w]
};

console.log(constructRectangle(4)) // [2, 2]
console.log(constructRectangle(37)) // [37, 1]

console.log(constructRectangle(1)) // [1, 1]
console.log(constructRectangle(2)) // [2, 1]
console.log(constructRectangle(3)) // [3, 1]
console.log(constructRectangle(6)) // [3, 2]
console.log(constructRectangle(7)) // [7, 1]
