/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // String(n) doesn't work here because it change the number format
  // e.g. 00000010100101000001111010011100.toString() = 3.83703986092975e+22
  let stringN = ""
  while (n) {
    stringN += n % 2
    console.log(stringN)
    n = Math.floor(n / 2)
  }
  console.log(stringN)
  console.log(stringN.length)
  return parseInt(stringN)
}

console.log(reverseBits(00000010100101000001111010011100))
// console.log(1.toString())

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const bits = new Array(32).fill(0)
  let idx = 1
  while (n) {
    bits[32 - idx++] = n % 2
    n = Math.floor(n / 2)
  }
  return parseInt(bits.reverse().join(""), 2)
}
