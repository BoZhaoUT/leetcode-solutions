/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let result = nums[0] + nums[1] + nums[2]
    const length = nums.length
    nums.sort((a, b) => a - b)
    for (let i = 0; i < length - 2; i++) {
        let left = i + 1
        let right = length - 1
        const complement = target - nums[i]
        while (left < right) {
            const partialSum = nums[left] + nums[right]
            // found exact match
            if (partialSum === complement) {
                return target
            }
            // calculate and update diff between current three
            // sum and target
            const absoluteDiff = Math.abs(partialSum - complement)
            if (absoluteDiff < Math.abs(target - result)) {
                result = partialSum + nums[i]
            }
            if (partialSum < complement) {
                left++
            } else {
                right--
            }
        }
    }
    return result
};

                             // -4, -1, 1, 2
// console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
// console.log(threeSumClosest([0, 0, 0], 1)) // 0
// console.log(threeSumClosest([0, 1, 2], 0)) // 3
// console.log(threeSumClosest([1, 1, 1, 0], -100)) // 2