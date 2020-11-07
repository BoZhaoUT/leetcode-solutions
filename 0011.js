/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let leftIndex = 0
    let rightIndex = height.length - 1
    let result = 0
    while (leftIndex < rightIndex) {
        let leftHeight = height[leftIndex]
        let rightHeight = height[rightIndex]
        let currentArea = Math.min(leftHeight, rightHeight) * (rightIndex - leftIndex)
        result = currentArea > result ? currentArea : result
        // move the shorter height
        if (leftHeight > rightHeight) {
            rightIndex--
        } else {
            leftIndex++
        }
    }
    return result
};
