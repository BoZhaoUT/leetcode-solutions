/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  // elements that from nums2 that is greater than num
  // the stack only holds strictly increasing ints
  const stack = []
  const nextGreater = {}

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i]

    // look for the next greater element from the stack
    // disregard the lements that is not greater than the num
    // because the elements here are on the right hand side of num in nums2
    // if we search the next greater element between head of the elements all
    // the way to the left element of num, than num is for sure the next greater
    
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop()
    }

    // there is no next greater element for num
    if (stack.length === 0) {
      nextGreater[num] = -1
    } else {
      nextGreater[num] = stack[stack.length - 1]
    }

    stack.push(num)
  }

  return nums1.map(num => nextGreater[num])
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])) // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])) // [3, -1]

console.log(nextGreaterElement([1], [1])) // [-1]

console.log(nextGreaterElement([1, 2, 3], [1, 2, 3, 4])) // [2, 3, 4]
console.log(nextGreaterElement([1, 2, 3], [4, 3, 2, 1])) // [-1, -1, -1]
console.log(nextGreaterElement([1, 2, 3], [4, 3, 1, 2])) // [2, -1, -1]
console.log(nextGreaterElement([1, 2, 3], [4, 1, 2, 3])) // [2, 3, -1]

