/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []
    const length = nums.length
    const target = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < length - 2 && nums[i] <= target; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = length - 1
        const complement = target - nums[i]
        let lastUsedRightNum
        while (left < right) {
            const partialSum = nums[left] + nums[right]
            if (partialSum === complement && nums[right] !== lastUsedRightNum) {
                result.push([nums[i], nums[left], nums[right]])
                lastUsedRightNum = nums[right]
                left++
                right--
            } else if (partialSum < complement) {
                left++
            } else {
                right--
            }
        }
        lastUsedRightNum = null
    }
    return result
};

// [-2, 0, 0, 2, 2]
console.log(threeSum([-2, 0, 0, 2, 2])) // [[0, 0, 0]]
console.log(threeSum([0, 0, 0])) // [[0, 0, 0]]
// console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([])) // []
// console.log(threeSum([0])) // []