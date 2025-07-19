/**
 * @param {number[]} scores
 * @return {string[]}
 */
const findRelativeRanks = (scores) => {
  const scoresWithIndex = scores.map((score, index) => ({
    score,
    index
  }))

  scoresWithIndex.sort((a, b) => b.score - a.score)

  const result = new Array(scores.length)

  scoresWithIndex.forEach((scoreWithIndex, rank) => {
    const { index } = scoreWithIndex
    if (rank === 0) {
      result[index] = "Gold Medal"
    } else if (rank === 1) {
      result[index] = "Silver Medal"
    } else if (rank === 2) {
      result[index] = "Bronze Medal"
    } else {
      result[index] = `${rank + 1}`
    }
  })

  return result
};

console.log(findRelativeRanks([5, 4, 3, 2, 1])) // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9 ,4])) // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

console.log(findRelativeRanks([0])) // ["Gold Medal"]
console.log(findRelativeRanks([0, 1])) // ["Silver Medal", "Gold Medal"]
console.log(findRelativeRanks([0, 2, 1])) // ["Bronze", "Gold Medal", "Silver Medal"]
console.log(findRelativeRanks([1, 2, 3, 4, 5])) // ["5", "4", "Bronze Medal", "Silver Medal", "Gold Medal"]
console.log(findRelativeRanks([1, 3, 5, 2, 4])) // ["5", "Bronze Medal", "Gold Medal", "Silver Medal", "4"]

