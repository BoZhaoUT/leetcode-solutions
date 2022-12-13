/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  if (nums.length === 0) {
    return 0
  }
  nums.sort((a, b) => a - b)
  console.log(nums)
  let result = 1
  let currLength = 1
  for (let i = 1; i <= nums.length; i++) {
    const curr = nums[i]
    const prev = nums[i - 1]
    console.log({ prev, curr, result, currLength })
    if (curr === prev + 1) {
      currLength += 1
    } else if (prev === curr) {
      continue
    } else {
      result = Math.max(result, currLength)
      currLength = 1
    }
  }
  return result
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9
// console.log(longestConsecutive([])) // 0
// console.log(longestConsecutive([0, -1])) // 2
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])) // 7
console.log(longestConsecutive([1, 2, 0, 1])) // 3
