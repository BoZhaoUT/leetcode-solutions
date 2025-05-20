/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const findDisappearedNumbers = (nums) => {
//   let result = []
//   nums.forEach((_, i) => {
//     result[i] = i + 1
//   })
//   nums.forEach(num => {
//     result[num - 1] = null 
//   })
//   result = result.filter(element => element)
//   return result
// };

const findDisappearedNumbers = (nums) => {
  // mark each seen number by flipping the sign at its corresponding index
  // after the loop, the indices that remain positive are missing numbers
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }

  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5,6]
// console.log(findDisappearedNumbers([1,1])) // [2]

// console.log(findDisappearedNumbers([1])) // []
// console.log(findDisappearedNumbers([1, 1, 1, 1, 1, 1])) // [2, 3, 4, 5, 6]
// console.log(findDisappearedNumbers([6, 5, 4, 3, 2, 2])) // [1]

