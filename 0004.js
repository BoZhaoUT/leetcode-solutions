/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sortedNums = []
    let i = 0
    let j = 0
    while (i < nums1.length || j < nums2.length) {
        const num1 = nums1[i] !== undefined ? nums1[i] : Infinity
        const num2 = nums2[j] !== undefined ? nums2[j] : Infinity
        if (num1 <= num2) {
            sortedNums.push(num1)
            i++
        } else {
            sortedNums.push(num2)
            j++
        }
    }

    const length = sortedNums.length
    if (length % 2 === 1) { // odd
        return sortedNums[(length - 1) / 2]
    } else { // even
        return (sortedNums[length / 2] + sortedNums[length / 2 - 1]) / 2
    }
};

// console.log(findMedianSortedArrays([1, 3], [2]))
// console.log(findMedianSortedArrays([1, 3], [2, 4]))
// console.log(findMedianSortedArrays([1, 3], []))
// console.log(findMedianSortedArrays([1], []))
console.log(findMedianSortedArrays([0, 0], [0, 0]))