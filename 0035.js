/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // special cases
    if (target < nums[0]) {
        return 0
    }
    if (target > nums[nums.length - 1]) {
        return nums.length
    }
    let headIndex = 0
    let tailIndex = nums.length - 1
    while (true) {
        let midIndex = Math.floor((headIndex + tailIndex) / 2)
        if (nums[midIndex] === target) {
            return midIndex
        }
        // search first half
        if (nums[headIndex] <= target && target < nums[midIndex]) {
            tailIndex = midIndex
        } else if (nums[midIndex] < target && target <= nums[tailIndex]) {
            headIndex = headIndex !== midIndex ? midIndex : midIndex + 1
        } else {
            return headIndex
        }
    }
};

