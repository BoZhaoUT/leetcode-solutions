/**
 * @param {number[]} nums
 * @return {string}
 */
const optimalDivision = (nums) => {
  if (nums.length === 1) {
    return `${nums0}`
  }

  if (nums.length === 2) {
    return `${nums[0]}/${nums[1]}`
  }

  const strFormat = nums.join('/')
  return strFormat.replace('/', "/(") + ")"
}

console.log(optimalDivision([1000, 100, 10, 2])) // "1000/(100/10/2)"
console.log(optimalDivision([2, 3, 4])) // "2/(3/4)"

console.log(optimalDivision([1, 2]))
