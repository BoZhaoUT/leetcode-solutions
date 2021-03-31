
// assume nums is non-empty and sorted in increasing order
const binarySearch = (nums, target) => {
    // target is out of range
    if (target < nums[0] || target > nums[nums.length - 1]) {
        return -1
    }
    let left = 0
    let right = nums.length - 1
    let middle
    while (left < right) {
        middle = Math.floor((left + right) / 2)
        if (nums[left] === target) {
            return left
        } else if (nums[right] === target) {
            return right
        } else if (nums[middle] === target) {
            return middle
        } else if (target < nums[target]) {
            // search the 1st half
            right = middle - 1
        } else {
            // search the 2nd half
            left = middle + 1
        }
    }
    console.log(left, middle, right)
}



// console.log(binarySearch([0, 4, 6, 9, 10, 12], 9)) // 3
console.log(binarySearch([0, 4, 6, 9, 10, 12], 8)) // 2
// console.log(binarySearch([0, 4, 6, 9, 10, 12], 0)) // 0
// console.log(binarySearch([0, 4, 6, 9, 10, 12], 12)) // 5
// console.log(binarySearch([0, 4, 6, 9, 10, 12], -2)) // -1
// console.log(binarySearch([0, 4, 6, 9, 10, 12], 13)) // -1
