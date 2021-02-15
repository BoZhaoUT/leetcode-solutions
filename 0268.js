/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const acc = nums.reduce((acc, curr) => acc + curr)
    return nums.length * (nums.length + 1) / 2 - acc
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
