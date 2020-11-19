/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 1
    let prevNum = nums[i]
    let firstNonIncreasingNumIndex
    // find the first non-increasing num from right
    while (i >= 0 && firstNonIncreasingNumIndex === undefined) {
        if (nums[i] < prevNum) {
            firstNonIncreasingNumIndex = i
        } else {
            prevNum = nums[i]
            i--
        }
    }
    // the nums is in descending order
    if (i === -1) {
        return nums.reverse()
    }
    // 
    i = nums.length - 1
    let nextNumIndex
    while (i >= 0) {
        if (nums[i] > nums[firstNonIncreasingNumIndex]) {
            if (!nextNumIndex || nums[i] < nums[nextNumIndex]) {
                nextNumIndex = i
            }
        }
        i--
    }
    
    // swap two nums
    const temp = nums[nextNumIndex]
    nums[nextNumIndex] = nums[firstNonIncreasingNumIndex]
    nums[firstNonIncreasingNumIndex] = temp
    
    const keep = nums.slice(0, firstNonIncreasingNumIndex + 1)
    const reversed = nums.slice(firstNonIncreasingNumIndex + 1, nums.length).reverse()
    const result = keep.concat(reversed)
    return result
};

// algorithm from discussions
// input: 2,3,6,5,4,1
// Solution:
// Step1, from right to left, find the first number which not increase in a ascending order. In this case which is 3.
// Step2, here we can have two situations:

// We cannot find the number, all the numbers increasing in a ascending order. This means this permutation is the last permutation, we need to rotate back to the first permutation. So we reverse the whole array, for example, 6,5,4,3,2,1 we turn it to 1,2,3,4,5,6.

// We can find the number, then the next step, we will start from right most to leftward, try to find the first number which is larger than 3, in this case it is 4.
// Then we swap 3 and 4, the list turn to 2,4,6,5,3,1.
// Last, we reverse numbers on the right of 4, we finally get 2,4,1,3,5,6.
