/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let index = 0
    let max = 0
    let last = nums.length - 1

    while (index < nums.length) {
        max = Math.max(max, index + nums[index])
        // reached the last index
        if (max >= last) {
            return true
        }
        // didn't reach the last index and cannot move further
        if (max <= index && nums[index] === 0) {
            return false
        }
        index++
    }
    return false
};

