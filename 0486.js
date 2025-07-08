/**
 * @param {number[]} nums
 * @return {boolean}
 */
const predictTheWinner = (nums) => {
  // memoization
  const memo = {}
  // player = 0 -> p1's turn
  // player = 1 -> p2's turn
  const helper = (leftIndex, rightIndex, player, p1Score, p2Score) => {
    if (leftIndex === rightIndex) {
      if (player === 0) {
        return p1Score + nums[leftIndex] >= p2Score
      } else {
        return p1Score >= p2Score + nums[leftIndex]
      }
    }
    const key = `${leftIndex}-${rightIndex}-${p1Score}-${p2Score}`
    const previouslyCalcualtedResult = memo[key]
    if (previouslyCalcualtedResult !== undefined) {
      // console.log("=== reading from memo")
      return previouslyCalcualtedResult
    }
    
    // p1's turn
    if (player === 0) {
      const left = helper(leftIndex + 1, rightIndex, 1, p1Score + nums[leftIndex], p2Score)
      const right = helper(leftIndex, rightIndex - 1, 1, p1Score + nums[rightIndex], p2Score)
      memo[`${leftIndex}-${rightIndex}-${p1Score}-${p2Score}`] = left || right
      return left || right
    } else {
      // p2's turn
      const left = helper(leftIndex + 1, rightIndex, 0, p1Score, p2Score + nums[leftIndex])
      const right = helper(leftIndex, rightIndex - 1, 0, p1Score, p2Score + nums[rightIndex])
      memo[`${leftIndex}-${rightIndex}-${p1Score}-${p2Score}`] = left && right
      return left && right
    }
  }

  const result = helper(0, nums.length - 1, 0, 0, 0)

  return result
};

console.log(predictTheWinner([1, 5, 2])) // false
console.log(predictTheWinner([1, 5, 233, 7])) // true

console.log(predictTheWinner([1])) // true
console.log(predictTheWinner([0])) // true
console.log(predictTheWinner([1, 2, 1])) // true
console.log(predictTheWinner([1, 1])) // true
console.log(predictTheWinner([3, 1])) // true
console.log(predictTheWinner([1, 3])) // true

console.log(predictTheWinner([2,4,55,6,8])) // false
console.log(predictTheWinner([0,0,7,6,5,6,1])) // false
console.log(predictTheWinner([11,22,33,44,55,666,777,888,999,10,1,2,3,44444,5555,6,7,88,99,110])) // false
