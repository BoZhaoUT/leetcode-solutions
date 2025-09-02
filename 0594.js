/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
  const freq = {}
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }

  let result = 0
  for (const key in freq) {
    const num = +key
    if (freq[num + 1]) {
      const length = freq[num] + freq[num + 1]
      result = Math.max(result, length)
    }
  }

  return result
}

console.log(findLHS([1,3,2,2,5,2,3,7])) // 5
console.log(findLHS([1,2,3,4])) // 2
console.log(findLHS([1,1,1,1])) // 0
