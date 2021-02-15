/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // the idea of solving this problem is to have 2 arrays: left and right
    // each hold the product of all nums from the left and right hand side of num[i]
    // e.g. nums = [1, 2, 3, 4, 5]
    // then left = [1, 1, 2, 2*3, 2*3*4] and right = [2*3*4*5, 3*4*5, 4*5, 5, 1]
    // taht is left = [1, 1, 2, 6, 24] and right = [120, 60, 20, 5, 1]
    // for each i, simply get the product of left[i] * right[i]
    // e.g. when i === 2, then the result is 2 * 20 = 40
    // thus result = [120, 60, 40, 30, 24]
    // since the questions states the space complexity must be O(1), then we must
    // temporarily store the left array into the result array
    // and then calculate the right array on the fly
    const result = new Array(nums.length)
    // the left of first item is always 1
    result[0] = 1
    // calculate left array from the second item
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1]
    }
    // the right of the last item is always 1
    let right = 1
    // start from the second last item in nums, we can skip the last item since
    // result[last] = left[last] * 1
    for (let i = nums.length - 2; i >= 0; i--) {
        right = right * nums[i + 1]
        result[i] = right * result[i]
    }
    return result
};

console.log(productExceptSelf([1, 2, 3, 4, 5])) // [120, 60, 40, 30, 24]

// public class Solution {
//     public int[] productExceptSelf(int[] nums) {
//         int n = nums.length;
//         int[] res = new int[n];
//         // Calculate lefts and store in res.
//         int left = 1;
//         for (int i = 0; i < n; i++) {
//             if (i > 0)
//                 left = left * nums[i - 1];
//             res[i] = left;
//         }
//         // Calculate rights and the product from the end of the array.
//         int right = 1;
//         for (int i = n - 1; i >= 0; i--) {
//             if (i < n - 1)
//                 right = right * nums[i + 1];
//             res[i] *= right;
//         }
//         return res;
//     }
// }
