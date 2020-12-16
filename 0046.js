/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [[...nums]]
    } else if (nums.length === 2) {
        return [[...nums], [nums[1], nums[0]]]
    } else {
        const result = []
        nums.forEach((_, i) => {
            const others = [...nums]
            others.splice(i, 1)
            const permuted = permute(others)
            permuted.forEach(arr => arr.push(nums[i]))
            result.push(permuted)
        })
        return result
    }
};

// console.log(permute([1]))       // [[1]]
// console.log(permute([1, 2]))    // [[1, 2], [2, 1]]
console.log(permute([1, 2, 3])) // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

