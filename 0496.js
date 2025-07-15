/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const nums2Map = {}
  nums2.forEach((num, i) => {
    nums2Map[num] = i
  })

  const result = []
  nums1.forEach((num, i) => {
    const indexInNums2 = nums2Map[num]

    let j = indexInNums2 + 1
    while (j < nums2.length && result.length <= i) {
      if (nums2[j] > num) {
        result.push(nums2[j])
      } else {
        j++
      }
    }
    if (j === nums2.length) {
      result.push(-1)
    }
  })

  return result
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])) // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])) // [3, -1]

console.log(nextGreaterElement([1], [1])) // [-1]
