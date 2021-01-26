/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (target < nums[0] || target > nums)
    let leftIndex = 0
    let rightIndex = nums.length - 1
    
    while (true) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2) // middle index
        const left = nums[leftIndex]
        const mid = nums[midIndex]
        const right = nums[rightIndex]
        if (left === target || mid === target || right === target) {
            return true
        }
        if (left < target && target < mid) {
            
        }
    }
};


var binarySearch = function(nums, leftIndex, rightIndex, target) {
    // cannot be found
    if (target < nums[leftIndex] || target > nums[rightIndex]) {
        return false
    }

    do {
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
    } while (leftIndex <= rightIndex)
}

console.log(binarySearch([0,1,2,4,4,4,5,6,6,7], 0, 9, 3))
