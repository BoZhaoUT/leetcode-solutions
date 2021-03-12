/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let low = 0
    let high = numbers.length - 1
    while (numbers[low] + numbers[high] !== target) {
        if (numbers[low] + numbers[high] > target) {
            high--
        } else {
            low++
        }
    }
    return [low, high]
};
