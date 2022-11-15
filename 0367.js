/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  return Number.isInteger(Math.sqrt(num))
}

console.log(isPerfectSquare(1)) // true
console.log(isPerfectSquare(2)) // false
console.log(isPerfectSquare(4)) // true
console.log(isPerfectSquare(5)) // false
