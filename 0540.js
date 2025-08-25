/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
  let startIndex = 0
  let endIndex = nums.length - 1

  while (startIndex < endIndex - 1) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
    const partnerIndex = middleIndex % 2 === 0 ? middleIndex + 1 : middleIndex - 1
    if (nums[middleIndex] === nums[partnerIndex]) {
      startIndex = middleIndex + 1
    } else {
      endIndex = middleIndex
    }
  }

  return nums[startIndex]
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])) // 2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])) // 10

console.log(singleNonDuplicate([1])) // 1
console.log(singleNonDuplicate([1, 1, 3])) // 3
console.log(singleNonDuplicate([1, 3, 3])) // 1
