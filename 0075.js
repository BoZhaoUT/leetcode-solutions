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
    while (i < nums.length) {
        let curr = nums[i]
        console.log("i", i, "curr", curr, "zero", zeroIndex, "one", oneIndex, "two", twoIndex, ",", nums)
        if (curr === 0) {
            swap(i, zeroIndex)
            oneIndex++
            zeroIndex++
            i++
        } else if (curr === 1) {
            if (nums[oneIndex] === 0) {
                oneIndex++
            } else {
                swap(i, oneIndex)
                oneIndex++
                i++
            }
        } else if (curr === 2) {
            if (nums[twoIndex] === 2) {
                twoIndex--
            } else {
                swap(i, twoIndex)
                i++
            }
        }
    }
};


// let lst = [2,0,2,1,1,0]
const lst = [1,2,0]
sortColors(lst) // [0,0,1,1,2,2]

console.log(lst)
