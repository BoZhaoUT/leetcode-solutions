/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0 // index on nums1
    let j = 0 // index on nums2
    // only need the smaller half of numbers
    // if length of combined array is 5, then only need the first 3 nums to get median
    // if length of combined array is 6, then get first 4 items
    const half = Math.ceil((nums1.length + nums2.length + 1) / 2)
    // largest numbers in the smaller half
    let largest
    let secondLargest
    while (i + j < half) {
        const num1 = nums1[i] !== undefined ? nums1[i] : Infinity
        const num2 = nums2[j] !== undefined ? nums2[j] : Infinity
        let newLargest
        if (num1 <= num2) {
            newLargest = num1
            i++
        } else {
            newLargest = num2
            j++
        }
        secondLargest = largest
        largest = newLargest
    }

    // odd number of items
    if ((nums1.length + nums2.length) % 2 === 1) {
        return largest
    }
    // even number of items
    return (secondLargest + largest) / 2
};

// O(1) space

// console.log(findMedianSortedArrays([1], []))
// console.log(findMedianSortedArrays([1, 3], [2]))
// console.log(findMedianSortedArrays([1, 3], [2, 4, 5])) // 3
// console.log(findMedianSortedArrays([1, 3], [2, 4])) // 2.5
// console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
// console.log(findMedianSortedArrays([2], [1, 3, 4])) // 2.5, sl = 2, l = 3
// console.log(findMedianSortedArrays([2], [1, 3, 4, 5, 6, 7])) // 4, sl = 2, l = 4
// console.log(findMedianSortedArrays([1, 2], [3, 4, 5])) // 3
// console.log(findMedianSortedArrays([1, 2], [3, 4, 5, 6])) // 3.5
// console.log(findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7])) // 4
// console.log(findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7, 8])) // 4.5
// console.log(findMedianSortedArrays([1, 3], []))
// console.log(findMedianSortedArrays([1], []))
// console.log(findMedianSortedArrays([0, 0], [0, 0]))



// O(n) space
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//     const sortedNums = []
//     let i = 0
//     let j = 0
//     while (i < nums1.length || j < nums2.length) {
//         const num1 = nums1[i] !== undefined ? nums1[i] : Infinity
//         const num2 = nums2[j] !== undefined ? nums2[j] : Infinity
//         if (num1 <= num2) {
//             sortedNums.push(num1)
//             i++
//         } else {
//             sortedNums.push(num2)
//             j++
//         }
//     }

//     const length = sortedNums.length
//     if (length % 2 === 1) { // odd
//         return sortedNums[(length - 1) / 2]
//     } else { // even
//         return (sortedNums[length / 2] + sortedNums[length / 2 - 1]) / 2
//     }
// };
