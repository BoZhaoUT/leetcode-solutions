/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = (nums) => {
  const n = nums.length
  const result = new Array(n).fill(-1)

  // a stack that holds the indexes of the number that do not 
  // find their next greater element
  const stack = []
  for (let i = 0; i < 2 * n; i++) {
    // 1. get current elment from the nums 
    const currIndex = i % n
    const currNum = nums[currIndex]

    let shouldContine = true
    // 2. compare the current element with the top of the stack
    while (stack.length > 0 && shouldContine) {
      const topIndex = stack[stack.length - 1]
      const topNum = nums[topIndex]

      // curr > top of the stack
      // write the curr as the next greater for top of the stack
      if (topNum < currNum) {
        result[topIndex] = currNum
        stack.pop()
      } else {
        shouldContine = false
      }
    }
    // put curr's index on top of the stack
    if (i < n) {
      stack.push(currIndex);
    }
  }

  return result
};

console.log(nextGreaterElements([1, 2, 1])) // [2, -1, 2]
console.log(nextGreaterElements([1, 2, 3, 4, 3])) // [2, 3, 4, -1, 4]

// TODO: for the element taht we found its next greater, and that's in the "extended" list
// can I skip putting that into the stack?

console.log(nextGreaterElements([1, 2, 3, 4])) // [2, 3, 4, -1]
console.log(nextGreaterElements([1, 1, 1, 1])) // [-1, -1, -1, -1]
console.log(nextGreaterElements([4, 3, 2, 1])) // [-1, 4, 4, 4]
