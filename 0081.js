/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let result = false
    let leftIndex = 0
    let rightIndex = nums.length - 1
    while (!result) {

        const midIndex = Math.floor((leftIndex + rightIndex) / 2) // middle index
        const left = nums[leftIndex]
        const right = nums[rightIndex]
        const mid = nums[midIndex]
        let result = false
        // first half is sorted
        if (left <= mid) {
            result = binarySearch(nums, leftIndex, midIndex, target)
        }
        // second half is sorted
        if (!result && mid <= right) {
            result = binarySearch(nums, midIndex, rightIndex, target)
        }
        if (left > mid) {
            leftIndex
            rightIndex = midIndex--
        }
    }
};


var binarySearch = function(nums, leftIndex, rightIndex, target) {
    // cannot be found
    if (target < nums[leftIndex] || target > nums[rightIndex]) {
        return false
    }

    while (leftIndex <= rightIndex) {
        const left = nums[leftIndex]
        const right = nums[rightIndex]
        const midIndex = Math.floor((leftIndex + rightIndex) / 2)
        const mid = nums[midIndex]
        // found
        if (left === target || mid === target || right === target) {
            return true
        }
        if (left < target && target < mid) {
            leftIndex++
            rightIndex = midIndex - 1
        } else if (mid < target && mid < right) {
            rightIndex--
            leftIndex = midIndex + 1
        } else {
            return false
        }
    }
    return false
}

console.log(binarySearch([0,1,2,4,4,4,5,6,6,7], 0, 9, 3))