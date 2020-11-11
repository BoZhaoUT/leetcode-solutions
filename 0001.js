/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumSlow = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

var twoSum2 = function(nums, target) {
    const mapping = {}
    for (let i = 0; i < nums.length; i++) {
        mapping[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (mapping[complement] !== undefined && mapping[complement] !== i) {
            return [i, mapping[complement]]
        }
    }
}

var twoSum = function(nums, target) {
    const mapping = {}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (mapping[complement] !== undefined) {
            return [mapping[complement], i]
        }
        mapping[nums[i]] = i
    }
}
