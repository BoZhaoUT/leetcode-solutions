/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0

  while (n != 0) {
    // 1 & 1 = 1
    // 0 & 1 = 0
    result += n & 1
    // shift all bits to the right by 1
    // and drop the right most bit
    n = n >>> 1
  }

  return result
}
