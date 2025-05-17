/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  let i = num1.length - 1
  let j = num2.length - 1
  let result = ""
  let carryOn = 0
  while (i >= 0 || j >= 0) {
    digit1 = num1[i] || 0
    digit2 = num2[j] || 0 
    let sum = +digit1 + +digit2 + carryOn
    if (sum <= 9) {
      carryOn = 0
    } else {
      carryOn = 1
      sum -= 10
    }
    result = sum + result
    digit1
    i--
    j--
  }
  if (carryOn) {
    result = "1" + result
  }
  return result
};

console.log(addStrings("11", "123")) // "134"
console.log(addStrings("456", "77")) // "533"
console.log(addStrings("0", "0")) // "0"

console.log(addStrings("1", "0")) // "1"
console.log(addStrings("0", "1")) // "1"
console.log(addStrings("0", "11")) // "11"
console.log(addStrings("0", "12345678")) // "12345678"
console.log(addStrings("999", "1")) // "1000"
console.log(addStrings("5", "6")) // "11"

