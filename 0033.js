/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1 && nums[0] !== target) {
        return -1
    }
    // locate the pivot index
    let headIndex = 0
    let tailIndex = nums.length - 1
    let pivotIndex
    while (pivotIndex === undefined) {
        let midIndex = Math.floor((headIndex + tailIndex) / 2)
        // target is found
        if (nums[midIndex] === target) {
            return midIndex
        } else if (nums[midIndex + 1] === target) {
            return midIndex + 1
        }
        if (headIndex === tailIndex - 1) {
            pivotIndex = nums[headIndex] < nums[tailIndex] ? headIndex : tailIndex
        } else if (headIndex < midIndex && nums[headIndex] > nums[midIndex]) {
            tailIndex = midIndex
        } else if (midIndex < tailIndex && nums[tailIndex] < nums[midIndex]) {
            headIndex = midIndex
        } else [
            pivotIndex = 0
        ]
    }
    // do binary search on 2 sorted arrays
    let result = -1
    if (nums[0] <= target && target <= nums[pivotIndex - 1]) {
        result = binarySearch(nums, 0, pivotIndex - 1, target)
    } else if ((nums[pivotIndex] <= target && target <= nums[nums.length - 1]) || pivotIndex === 0) {
        result = binarySearch(nums, pivotIndex, nums.length - 1, target)
    }
    return result
};

var binarySearch = function(nums, headIndex, tailIndex, target) {
    let result = -1
    let finishedSearch = false
    while (!finishedSearch) {
        if (headIndex === tailIndex) {
            return -1
        }
        let midIndex = Math.floor((headIndex + tailIndex) / 2)
        // target is found
        if (nums[midIndex] === target) {
            return midIndex
        } else if (nums[midIndex + 1] === target) {
            return midIndex + 1
        } else if (headIndex < midIndex && target < nums[midIndex]) {
            tailIndex = midIndex
        } else if (midIndex < tailIndex && target > nums[midIndex] && headIndex !== midIndex) {
            headIndex = midIndex
        } else {
            finishedSearch = true
        }
    }
    return result
}
