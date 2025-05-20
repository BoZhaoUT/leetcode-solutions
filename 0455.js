/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (children, cookies) => {
  children.sort((a, b) => a - b)
  cookies.sort((a, b) => a - b)
  let childIndex = 0
  let cookieIndex = 0
  let result = 0
  while (childIndex < children.length && cookieIndex < cookies.length) {
    if (children[childIndex] <= cookies[cookieIndex]) {
      result++
      childIndex++
      cookieIndex++
    } else {
      cookieIndex++
    }
  }
  return result
};

console.log(findContentChildren([1,2,3], [1,1])) // 1
console.log(findContentChildren([1,2], [1,2,3])) // 2

console.log(findContentChildren([1], [])) // 0
console.log(findContentChildren([1], [1])) // 1
console.log(findContentChildren([2], [1])) // 0
console.log(findContentChildren([1], [2])) // 1
console.log(findContentChildren([1], [2, 3, 4])) // 1
console.log(findContentChildren([2, 3, 4], [2, 3, 4])) // 3
console.log(findContentChildren([2, 3, 4, 5], [2, 3, 4])) // 3
console.log(findContentChildren([1,1,1], [1,1,1])) // 3

console.log(findContentChildren([3,1,2], [1,1])) // 1
console.log(findContentChildren([5,6,7], [1,2,3])) // 0
