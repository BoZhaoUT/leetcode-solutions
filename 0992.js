/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct2 = (nums, k) => {
  const n = nums.length
  const dp = Array.from({ length: n}, () => Array(n))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = new Set()
      if (i === j) {
        dp[i][j].add(nums[i])
      }
    }
  }

  console.log(dp)

  let result = k === 1 ? n : 0
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      const below = dp[i + 1][j]
      const left = dp[i][j - 1]
      const newSet = new Set([...below, ...left])
      dp[i][j] = newSet
      if (newSet.size === k) {
        result++
      }
    }
  }
  return result
}


const subarraysWithKDistinct = (nums, k) => {
  return atMostKDifference(nums, k) - atMostKDifference(nums, k - 1)
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const atMostKDifference = (nums, k) => {
  const frequency = {}
  let distinct = 0
  let leftIndex = 0
  let total = 0

  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) { // O(n)
    const right = nums[rightIndex]
    // never been added to frequency object or number of uniq nums is 0
    if (frequency[right] === undefined || frequency[right] === 0) {
      distinct++
    }

    // record the frequency of this number
    frequency[right] = (frequency[right] || 0) + 1

    while (distinct > k) {
      const left = nums[leftIndex]
      leftIndex++
      frequency[left]--
      if (frequency[left] === 0) {
        distinct--
      }
    }

    total += rightIndex - leftIndex + 1
  }
  return total
}




console.log(subarraysWithKDistinct([1,2,1,2,3], 2)) // 7
console.log(subarraysWithKDistinct([1,2,1,3,4], 3)) // 3

console.log(subarraysWithKDistinct([1, 2], 1)) // 2
console.log(subarraysWithKDistinct([2,1,1,1,2], 1)) // 8 
