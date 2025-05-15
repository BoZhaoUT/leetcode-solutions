/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = (turnedOn) => {
  const result = []
  // it holds a map of number of bit counts to it's decimal value
  const decimalToBitCounts = {}
  for (let decimal = 0; decimal < 60; decimal++) {
    decimalToBitCounts[decimal] = countBits(decimal)
  }

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (decimalToBitCounts[h] + decimalToBitCounts[m] === turnedOn) {
        const decorateMinute = m <= 9 ? `0${m}` : m
        result.push(`${h}:${decorateMinute}`)
      }
    }
  }

  return result
};

const countBits = (n) => {
  let result = 0
  while (n > 0) {
    result += n % 2
    n = Math.floor(n / 2)
  }
  return result
}

console.log(readBinaryWatch(0))
console.log(readBinaryWatch(1))
console.log(readBinaryWatch(2))
console.log(readBinaryWatch(3))
console.log(readBinaryWatch(4))
console.log(readBinaryWatch(5))
console.log(readBinaryWatch(6))
