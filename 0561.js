/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < nums.length; i += 2) {
    result += Math.min(nums[i], nums[i + 1])
  }
  return result
}

console.log(arrayPairSum([1,4,3,2])) // 4
console.log(arrayPairSum([6,2,6,5,1,2])) // 9

console.log(arrayPairSum([1,2])) // 1
