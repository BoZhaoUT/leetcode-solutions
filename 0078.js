/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    // base case
    if (nums.length === 1) {
        return [[], [nums[0]]]
    } else if (nums.length === 2) {
        return [[], [nums[0]], [nums[1]], [nums[0], nums[1]]]
    }
    let result = []
    const others = subsets(nums.slice(0, nums.length - 1))
    result = result.concat(others)


};

const combine = (nums, k) => {
    let result = []
    if (k === 1) {
        nums.forEach(num => result.push([num]))
        return result
    }
    const length = nums.length
    let i = 0
    while (i <= length) {
        const others = combine(nums.slice(1, length), k - 1)
        others.forEach(other => other.push(nums[0]))
        result = result.concat(others)
        i++
    }
    return result
}
console.log(combine([1, 2, 3], 2))
// console.log([1, 2 ,3].slice(1, 3))

console.log(subsets([1,2,3])) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// console.log(subsets([0])) // [[],[0]]

