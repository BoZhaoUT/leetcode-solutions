 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    for (let i = 0; i <= nums.length; i++) {
        let combinations = combine(nums, i)
        result = result.concat(combinations)
    }
    return result
};

const combine = (nums, k) => {
    // base case
    if (k === 0) {
        return [[]]
    } else if (k === 1) {
        return nums.map(num => [num]); 
    }
    let result = []
    let i = 0
    while (i < nums.length) {
        let others = nums.slice(i + 1, nums.length)
        let permutations = combine(others, k - 1)
        permutations.forEach(permutation => permutation.push(nums[i]))
        result = result.concat(permutations)
        i++
    } 
    return result
}

// solution 2
const generatePowerset = (curr, start, powerset, nums) => {
    powerset.push(curr)
    for (let i = start; i < nums.length; i++) {
        generatePowerset([...curr, nums[i]], i + 1, powerset, nums)
    }
}

const subsets = nums => {
    const result = []
    generatePowerset([], 0, result, nums)
    return result
}