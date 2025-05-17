/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  let largest = Number.NEGATIVE_INFINITY
  let secondLargest = Number.NEGATIVE_INFINITY
  let thirdLargest = Number.NEGATIVE_INFINITY

  for (let num of nums) {
    if (num > largest) {
      thirdLargest = secondLargest
      secondLargest = largest
      largest = num
    } else if (num !== largest && num > secondLargest) {
      thirdLargest = secondLargest
      secondLargest = num
    } else if (num !== secondLargest && num != largest && num > thirdLargest) {
      thirdLargest = num
    }
  } 

  return thirdLargest === Number.NEGATIVE_INFINITY ? largest : thirdLargest
};

// console.log(thirdMax([3,2,1])) // 1
// console.log(thirdMax([1,2])) // 2
// console.log(thirdMax([2,2,3,1])) // 1

// console.log(thirdMax([1])) // 1
// console.log(thirdMax([1, 1])) // 1
// console.log(thirdMax([1, 1, 1])) // 1
// console.log(thirdMax([1, 1, 1, 1])) // 1
// console.log(thirdMax([1, 1, 1, 2])) // 2
// console.log(thirdMax([1, 1, 2, 2])) // 2
// console.log(thirdMax([1, 1, 2, 3, 2])) // 1
console.log(thirdMax([1, 2, 2, 3, 3, 3])) // 1

