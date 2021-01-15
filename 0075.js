/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var swap = function(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    let zeroIndex = 0
    let oneIndex = 0
    let twoIndex = nums.length - 1
    let i = 0
    while (i < nums.length && i <= twoIndex) {
        if (nums[i] === 0) {
            swap(i, zeroIndex)
            oneIndex++
            zeroIndex++
            i++
        } else if (nums[i] === 1) {
            if (nums[oneIndex] === 0) {
                oneIndex++
            } else {
                swap(i, oneIndex)
                oneIndex++
                i++
            }
        } else if (nums[i] === 2) {
            if (nums[twoIndex] === 2) {
                twoIndex--
            }
            else {
                swap(i, twoIndex)
            }
        }
    }
};

