/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === nums[right]) {
            right--
        } else if (nums[mid] < nums[right]) { // the 2nd half is sorted
            // target can be in the 2nd half
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            // target cannot be found in the 2nd half
            } else {
                right = mid
            }
        } else { // the 1st half is sorted
            // the target can be found in the 2nd half
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1
            } else { // target cannot be found in the 2nd half
                right = mid
            }
        }
    }
    return nums[left] === target
}

