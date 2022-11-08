/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const frequencyMap = {}
  nums1.forEach((num) => {
    if (frequencyMap[num]) {
      frequencyMap[num] = frequencyMap[num] + 1
    } else {
      frequencyMap[num] = 1
    }
  })

  return nums2.filter((num) => {
    if (frequencyMap[num]) {
      frequencyMap[num] = frequencyMap[num] - 1
      return true
    } else {
      return false
    }
  })
}

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect([1, 2, 1], [2, 2])) // [2]
console.log(intersect([2, 2], [1, 2, 1])) // [2]
console.log(intersect([2, 2], [1, 2, 2])) // [2, 2]
console.log(intersect([], [1, 2, 2])) // []
console.log(intersect([], [])) // []
