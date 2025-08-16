/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = (num) => {
  if (num === 1) {
    return false
  }
  let i = 2
  const squareRoot = Math.sqrt(num)
  const divisors = [1]
  while (i <= squareRoot) {
    if (num % i === 0) {
      divisors.push(i)
      divisors.push(num / i)
    }
    i++
  }
  const sum = divisors.reduce((accu, curr) => accu + curr, 0)
  return sum === num
}

console.log(checkPerfectNumber(28)) // true
console.log(checkPerfectNumber(7)) // false

console.log(checkPerfectNumber(1)) // true
console.log(checkPerfectNumber(2)) // false
console.log(checkPerfectNumber(3)) // false
console.log(checkPerfectNumber(4)) // false
console.log(checkPerfectNumber(16)) // false
