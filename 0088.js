/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while (n > 0) {
        // nums1 has bigger num
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1]
            m--
        } else {
            nums1[m + n - 1] = nums2[n - 1]
            n--
        }
    }
};

const a1 = [1,2,3,0,0,0]
const a2 = [2,5,6]

merge(a1, 3, a2, 3)

console.log(a1)