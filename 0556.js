/**
 * @param {number} n
 * @return {number}
 */
const nextGreaterElement = (n) => {
  const digits = n.toString().split("")

  if (n <= 11) {
    return -1
  }

  // this is the first index (inclusive) that we want to sort the number
  let i = digits.length - 1
  let pivotIndex = -1
  while (i > 0 && pivotIndex === -1) {
    const right = digits[i]
    const left = digits[i - 1]
    if (left < right) {
      pivotIndex = i - 1
    }
    i--
  }

  if (pivotIndex === -1) {
    return -1
  }

  // saerch between pivot and the end of the array
  // find the smallest int that's greater than pivot
  let smallestIndex = -1
  for (let i = pivotIndex + 1; i < digits.length; i++) {
    const curr = digits[i]
    if (curr > digits[pivotIndex] && (smallestIndex === -1 || curr < digits[smallestIndex])) {
      smallestIndex = i
    }
  }
  console.log(digits, pivotIndex);

  const temp = digits[smallestIndex]
  digits[smallestIndex] = digits[pivotIndex]
  digits[pivotIndex] = temp

  const head = digits.slice(0, pivotIndex + 1)
  const tail = digits.slice(pivotIndex + 1).sort((a, b) => a - b)

  const result = +(head.concat(tail).join(""))

  if (result > 2147483647) {
    return -1
  }

  return result
}


// console.log(nextGreaterElement(12)) // 21
// console.log(nextGreaterElement(21)) // -1

// console.log(nextGreaterElement(1)) // -1
// console.log(nextGreaterElement(10)) // -1
// console.log(nextGreaterElement(22)) // -1
// console.log(nextGreaterElement(143)) // 341
// console.log(nextGreaterElement(198765432)) // 341

// console.log(nextGreaterElement(230241)) // 230412
console.log(nextGreaterElement(2147483486)) // 230412
