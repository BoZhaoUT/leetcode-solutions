/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // n = nums.length
    const frequencyMap = {}
    // O(n) time
    nums.forEach(num => {
        if (!frequencyMap[num]) {
            frequencyMap[num] = 1
        } else {
            frequencyMap[num] += 1
        }
    })

    // O(m) time, m is number of unique elements
    const numToFrquency = [...Object.entries(frequencyMap)]

    // O(m) time, m is guaranteed to be less than or equal to n
    numToFrquency.sort((a, b) => b[1] - a[1])

    // O(k) time
    return numToFrquency.slice(0, k).map(element => parseInt(element[0]))
};



// console.log(topKFrequent([1,1,1,2,2,3], 2))
// console.log(topKFrequent([-1, -1], 1))
// console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))


