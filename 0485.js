/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let maxConsecutiveOnes = 0
  let currentConsecutiveOnes = 0
  for (let num of nums) {
    if (num === 1) {
      currentConsecutiveOnes++
    } else {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentConsecutiveOnes)
      currentConsecutiveOnes = 0
    }
  }
  return Math.max(maxConsecutiveOnes, currentConsecutiveOnes)
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])) // 2

console.log(findMaxConsecutiveOnes([1])) // 1
console.log(findMaxConsecutiveOnes([0])) // 0
console.log(findMaxConsecutiveOnes([1, 1])) // 2
console.log(findMaxConsecutiveOnes([0, 0])) // 0
console.log(findMaxConsecutiveOnes([1, 0, 1])) // 1
console.log(findMaxConsecutiveOnes([0, 1, 0])) // 1
