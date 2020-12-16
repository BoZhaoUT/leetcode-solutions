/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 1) {
        return [[...nums]]
    } else {
        let result = []
        const used = new Set()
        nums.forEach((num, i) => {
            if (used.has(num)) {
                return
            } else {
                used.add(num)
            }
            const others = [...nums]
            others.splice(i, 1)
            const permutation = permuteUnique(others)
            permutation.forEach(arr => arr.push(nums[i]))
            result = result.concat(permutation)
        })
        return result
    }
};
