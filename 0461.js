/**
 * @param {string} s
 * @return {boolean}
 */
const hammingDistance = (x, y) => {
  x = x.toString(2)
  y = y.toString(2)
  const length = Math.max(x.length, y.length)
  let result = 0
  for (let i = 1; i <= length; i++) {
    const charX = x[x.length - i] || '0'
    const charY = y[y.length - i] || '0'
    if (charX !== charY) {
      result++
    }
  }
  return result
};

console.log(hammingDistance(1, 4)) // 2
console.log(hammingDistance(3, 1)) // 1

console.log(hammingDistance(0, 1)) // 1
console.log(hammingDistance(1, 1)) // 0
console.log(hammingDistance(15, 16)) // 5
