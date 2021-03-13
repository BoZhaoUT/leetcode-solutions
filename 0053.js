/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = 0
    let result = -Infinity
    nums.forEach(num => {
        sum += num
        result = Math.max(sum, result)
        sum = sum > 0 ? sum : 0
    })
    return result
};

// class Solution {
//     public:
//         int maxSubArray(vector<int>& nums) {
//             int sum = 0, smax = INT_MIN;
//             for (int num : nums) {
//                 sum += num;
//                 smax = max(smax, sum);
//                 if (sum < 0) {
//                     sum = 0;
//                 }
//             }
//             return smax;
//         }
//     };


// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([-2,1,-3,4,-1]))
// console.log(maxSubArray([-2, -1, -3, -4, -1]))

