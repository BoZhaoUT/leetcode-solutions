/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    // it has to loop from the last to first
    let prev = nums[nums.length - 1]
    for (let i = nums.length - 2; i >= 0; i--) {
        if (prev === nums[i]) {
            nums.splice(i, 1)
        } else {
            prev = nums[i]
        }
    }
    return nums.length
};


// buggy solution
// var removeDuplicates = function(nums) {
//     if (nums.length === 0) {
//         return 0
//     }
//     let prev = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         if (prev === nums[i]) {
//             nums.splice(i, 1)
//         } else {
//             prev = nums[i]
//         }
//     }
//     return nums.length
// };
