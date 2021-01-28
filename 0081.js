/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let result = false
    let leftIndex = 0
    let rightIndex = nums.length - 1
    while (!result && leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2) // middle index
        console.log("mid", midIndex)
        const left = nums[leftIndex]
        const right = nums[rightIndex]
        const mid = nums[midIndex]
        // first half is sorted
        if (left <= mid) {
            // console.log("regular search in 1st", leftIndex, midIndex)
            result = binarySearch(nums, leftIndex, midIndex, target)
        }
        // second half is sorted
        if (!result && mid <= right) {
            // console.log("regular search in 2st")
            result = binarySearch(nums, midIndex, rightIndex, target)
        }
        // pivot is in the first half
        if (left > mid) {
            leftIndex++
            rightIndex = midIndex - 1
        }
        if (mid > right) {
            leftIndex = midIndex + 1
            rightIndex--
        }
    }
    return result
};


var binarySearch = function(nums, leftIndex, rightIndex, target) {
    console.log({leftIndex, rightIndex})
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

console.log(search([2,5,6,0,0,1,2], 3))
// console.log(binarySearch([0,0,1,2], 0, 3, 3))