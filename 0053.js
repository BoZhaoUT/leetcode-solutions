/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = -Infinity
    let prev = 0
    nums.forEach(num => {
        prev = prev + num > num ? prev + num : num
        result = result > prev ? result : prev
    })
    return result
};

