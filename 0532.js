/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
  // special case k = 0
  if (k === 0) {
    const numSet = new Set()
    const duplicates = new Set()
    nums.forEach(num => {
      if (numSet.has(num)) {
        duplicates.add(num)
      } else {
        numSet.add(num)
      }
    })
    return duplicates.size
  }

  // go through the nums and create an set // O(n) time and space complexigty
  const numSet = new Set(nums)
  let result = 0
  for (const num of numSet) {
    if (numSet.has(num + k)) {
      result++
    }
  }

  return result
}

console.log(findPairs([3,1,4,1,5], 2)) // 2
console.log(findPairs([1,2,3,4,5], 1)) // 4
console.log(findPairs([1,3,1,5,4], 0)) // 1

console.log(findPairs([1], 0)) // 0
console.log(findPairs([1, 1], 0)) // 1
console.log(findPairs([1, 2, 3, 4], 0)) // 0
console.log(findPairs([1, 2, 3, 4], 1)) // 3
console.log(findPairs([1, 3, 2, 4], 2)) // 2
console.log(findPairs([1, 3, 1, 1, 3, 3], 2)) // 1
