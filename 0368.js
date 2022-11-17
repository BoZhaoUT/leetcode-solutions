/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
  const result = []
  const usedNumsIndexes = new Set()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (usedNumsIndexes.has(i) || usedNumsIndexes.has(j)) {
        continue
      }
      const num1 = nums[i]
      const num2 = nums[j]
      if (num1 % num2 == 0 || num2 % num1 == 0) {
        result.push(num1)
        result.push(num2)
        usedNumsIndexes.add(i)
        usedNumsIndexes.add(j)
      }
    }
  }
  return result
}

console.log(largestDivisibleSubset([1, 2, 3])) // [1, 2] or [1, 3]
console.log(largestDivisibleSubset([1, 2, 4, 8])) // [1, 2, 4, 8]
console.log(largestDivisibleSubset([1])) // [1, 2, 4, 8]
