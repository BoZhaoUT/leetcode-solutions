/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  const str = num.toString(2)
  const digits = []
  for (let digit of str) {
    const digitComplement = digit === '1' ? '0' : '1'
    digits.push(digitComplement)
  }
  const complement = digits.join("")
  console.log(complement)
  return parseInt(complement, 2)
};

console.log(findComplement(5)) // 2
console.log(findComplement(1)) // 0

console.log(findComplement(7)) // 0
console.log(findComplement(8)) // 7ß
