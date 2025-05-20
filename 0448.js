/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  let result = []
  nums.forEach((_, i) => {
    result[i] = i + 1
  })
  nums.forEach(num => {
    result[num - 1] = null 
  })
  result = result.filter(element => element)
  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5,6]
console.log(findDisappearedNumbers([1,1])) // [2]

console.log(findDisappearedNumbers([1])) // []
console.log(findDisappearedNumbers([1, 1, 1, 1, 1, 1])) // [2, 3, 4, 5, 6]
console.log(findDisappearedNumbers([6, 5, 4, 3, 2, 2])) // [1]

