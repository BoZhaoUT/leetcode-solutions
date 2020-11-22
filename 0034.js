/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // initial search
    const initialSearch = binarySearch(nums, 0, nums.length - 1, target)
    if (initialSearch === -1) {
        return [-1, -1]
    }
    
    // special case
    if (nums.length === 1) {
        return [0, 0]
    }
    
    let currentSearchResult
    let rangeStart = initialSearch
    do {
        currentSearchResult = binarySearch(nums, 0, rangeStart - 1, target)
        rangeStart = currentSearchResult === -1 ? rangeStart : currentSearchResult
    } while (currentSearchResult !== -1)
        
    let rangeEnd = initialSearch
    do {
        currentSearchResult = binarySearch(nums, rangeEnd + 1, nums.length - 1, target)
        rangeEnd = currentSearchResult === -1 ? rangeEnd : currentSearchResult
    } while (currentSearchResult !== -1)
    return [rangeStart, rangeEnd]
};

const binarySearch = (nums, headIndex, tailIndex, target) => {
    // special case
    if (headIndex < 0 || tailIndex >= nums.length || headIndex > tailIndex) {
        return -1
    }
    while (true) {
        let midIndex = Math.floor((headIndex + tailIndex) / 2)
        if (nums[midIndex] === target) {
            return midIndex
        }
        // search first half
        if (nums[headIndex] <= target && target < nums[midIndex]) {
            tailIndex = midIndex
        } else if (nums[midIndex] < target && target <= nums[tailIndex]) {
            headIndex = headIndex !== midIndex ? midIndex : midIndex + 1
        } else {
            return -1
        }
    }
}

