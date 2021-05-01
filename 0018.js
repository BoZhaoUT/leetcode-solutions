/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length -2; j++) {
            const complement = target - nums[i] - nums[j]
            let left = j + 1
            let right = nums.length - 1
            while (left < right) {
                if (nums[left] + nums[right] === complement) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    // avoid using the same num
                    while (nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (nums[right] === nums[right - 1]) {
                        right--
                    }
                }
                if (nums[left] + nums[right] < complement) {
                    left++
                } else {
                    right--
                }
            }
            // avoid using the same num
            while (nums[j] === nums[j + 1]) {
                j++
            }
        }
        // avoid using the same num
        while (nums[i] === nums[i + 1]) {
            i++
        }
    }
    return result
};

console.log(fourSum([1,0,-1,0,-2,2], 0)) // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)) // [[2,2,2,2]]
console.log(fourSum([-2,-1,-1,1,1,2,2], 0)) // [[-2,-1,1,2],[-1,-1,1,1]]
