/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = (n) => {
  let i = 1
  while (n >= 1) {
    const num = i.toString()
    console.log({ num, n})
    if (num.length < n) {
      n -= num.length
    } else {
      return +num[n - 1]
    }
    i++
  }
}

console.log(findNthDigit(3)) // 3
console.log(findNthDigit(11)) // 0

console.log(findNthDigit(1)) // 1
console.log(findNthDigit(10)) // 1
