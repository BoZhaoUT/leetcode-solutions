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
        console.log("reversing")
        return nums.reverse()
    }
    // 
    i = nums.length - 1
    let nextNumIndex
    while (i > firstNonIncreasingNumIndex) {
        if (nums[i] > nums[firstNonIncreasingNumIndex]) {
            if (!nextNumIndex || nums[i] < nums[nextNumIndex]) {
                nextNumIndex = i
            }
        }
        i--
    }
    // swap two nums
    swap(nums, nextNumIndex, firstNonIncreasingNumIndex)
    
    for (i = 0; i < Math.floor((nums.length - 1 - firstNonIncreasingNumIndex) / 2) ; i++) {
        swap(nums, i + firstNonIncreasingNumIndex + 1, nums.length - 1 - i)
    }
};

var swap = function(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}

// algorithm from discussions
// input: 2,3,6,5,4,1
// Solution:
// Step1, from right to left, find the first number which not increase in a ascending order. In this case which is 3.
// Step2, here we can have two situations:

// We cannot find the number, all the numbers increasing in a ascending order. This means this permutation is the last permutation, we need to rotate back to the first permutation. So we reverse the whole array, for example, 6,5,4,3,2,1 we turn it to 1,2,3,4,5,6.

// We can find the number, then the next step, we will start from right most to 3, try to find the first number which is larger than 3, in this case it is 4. This search does not include any numbers on the left hand of 3
// Then we swap 3 and 4, the list turn to 2,4,6,5,3,1.
// Last, we reverse numbers on the right of 4, we finally get 2,4,1,3,5,6.
