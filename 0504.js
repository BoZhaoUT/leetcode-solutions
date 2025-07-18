/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = (num) => {
  if (num === 0) {
    return "0"
  }

  const wasNegative = num < 0
  num = Math.abs(num)


  let result = ""

  while (num > 0) {
    const remainder = num % 7
    result = String(remainder) + result
    num -= remainder
    num = num / 7
  }

  return wasNegative ? `-${result}` : result
};

console.log(convertToBase7(100)) // 202
console.log(convertToBase7(-7)) // -10

console.log(convertToBase7(0)) // 0
console.log(convertToBase7(1)) // 1
console.log(convertToBase7(6)) // 6
console.log(convertToBase7(7)) // 10
console.log(convertToBase7(48)) // 66
console.log(convertToBase7(49)) // 100

console.log(convertToBase7(-0)) // 0
console.log(convertToBase7(-1)) // -1
console.log(convertToBase7(-6)) // -6
console.log(convertToBase7(-7)) // -10
console.log(convertToBase7(-48)) // -66
console.log(convertToBase7(-49)) // -100
