/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit2 = (n) => {
  let i = 1
  if (n > 63_000_000) {
    n -= 63_000_000
    i = 1_000_000
  }
  if (n > 5400_000) {
    n -= 5400_000
    i = 100_000
  }
  if (n > 450_000) {
    n -= 450_000
    i = 10_000
  }
  if (n > 36000) {
    n -= 36000
    i = 1_000
  }
  if (n > 2700) {
    n -= 2700
    i = 100
  }
  if (n > 180) {
    n -= 180
    i = 10
  }
  if (n > 9) {                   // 1-digit block
    n -= 9
    i = 10
  }
  while (n >= 1) {
    const num = i.toString()
    if (num.length < n) {
      n -= num.length
    } else {
      return +num[n - 1]
    }
    i++
  }
}

/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = (n) => {
  let i = 1

  if (n > 9) {
    n -= 9
    i = 10
  }
  if (n > 180) {
    n -= 180
    i = 100
  }
  if (n > 2700) {
    n -= 2700
    i = 1000
  }
  if (n > 36000) {
    n -= 36000
    i = 10000
  }
  if (n > 450000) {
    n -= 450000
    i = 100000
  }
  if (n > 5400000) {
    n -= 5400000
    i = 1000000
  }
  if (n > 63_000_000) {
    n -= 63000000
    i = 10000000
  }
  if (n > 720_000_000) {
    n -= 720_000_000
    i = 100000000
  }

  const digitLen = i.toString().length
  const index = n - 1
  const num = i + Math.floor(index / digitLen)
  const position = index % digitLen

  return +num.toString()[position]
}

console.log(findNthDigit(3)) // 3
console.log(findNthDigit(11)) // 0

console.log(findNthDigit(1)) // 1
console.log(findNthDigit(10)) // 1

console.log(findNthDigit(10000)) // 7
console.log(findNthDigit(2147483647)) // 7