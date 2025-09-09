/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
  if (nums.length === 0) {
    return true
  }
  let isIncreasing
  let isDecreasing
  let i = 0
  while (i < nums.length - 1) {
    const curr = nums[i]
    const next = nums[i + 1]
    if (isIncreasing && curr > next) {
      return false
    }
    if (isDecreasing && curr < next) {
      return false
    }
    if (isDecreasing === undefined && isIncreasing === undefined) {
      if (curr > next) {
        isDecreasing = true
      } else if (curr < next) {
        isIncreasing = true
      }
    }
    i++
  }
  return true
}

console.log(isMonotonic([1, 2, 2, 3])) // true
console.log(isMonotonic([6, 5, 4, 4])) // true
console.log(isMonotonic([1, 3, 2])) // false

console.log(isMonotonic([1])) // true
console.log(isMonotonic([1, 1])) // true
console.log(isMonotonic([1, 2])) // true
console.log(isMonotonic([2, 1])) // true
console.log(isMonotonic([-1, 1, -1])) // false
console.log(isMonotonic([0, 1, 1])) // true
