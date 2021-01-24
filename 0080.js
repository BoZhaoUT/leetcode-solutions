/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let prev = undefined
    let count = 0
    while (i < nums.length) {
        const curr = nums[i]
        // found a new num
        if (curr !== prev) {
            prev = curr
            count = 1
            i++
        } else { // same num as prev
            count++
            if (count > 2) {
                nums.splice(i, 1)
            } else {
                i++
            }
        }
    }
    return nums.length
};
