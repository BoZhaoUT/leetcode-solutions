/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = (nums) => {
  nums.sort((a, b) => a - b)

  const median = Math.round(getMedian(nums))

  return nums.reduce((accu, curr) => accu + Math.abs(curr - median), 0)
}

const getMedian = (nums) => {
  const n = nums.length
  if (n % 2 === 1) {
    return nums[(n - 1) / 2]
  }
  const middle = n / 2
  
  return (nums[middle - 1] + nums[middle]) / 2
}

console.log(minMoves2([1, 2, 3])); // 2
console.log(minMoves2([1, 10, 2, 9])); // 16

// Single element (no moves needed)
console.log(minMoves2([5])); // 0

// All elements already equal
console.log(minMoves2([7, 7, 7, 7])); // 0

// Two elements
console.log(minMoves2([1, 100])); // 99

// Even number of elements
console.log(minMoves2([1, 2, 3, 4])); // 4
// Explanation: median is 2 or 3. Moves = |1-2|+|2-2|+|3-2|+|4-2| = 4

// Odd number of elements with negatives
console.log(minMoves2([-5, -1, 0, 1, 5])); // 12
// Moves = |−5−0|+|−1−0|+|0−0|+|1−0|+|5−0| = 12

// Large gap values
console.log(minMoves2([1000, 0, 0, 1000])); // 2000

// Mixed negatives and positives
console.log(minMoves2([-10, -5, 0, 5, 10])); // 30

// Already sorted but wide range
console.log(minMoves2([1, 3, 6, 7, 8, 9])); // 14
