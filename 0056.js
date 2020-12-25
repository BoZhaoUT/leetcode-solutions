/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const result = []
    let start = intervals[0][0]
    let end = intervals[0][1]
    intervals.forEach((interval, i) => {
        // new start is bigger than previous end, AKA no overlapping
        if (interval[0] > end) {
            result.push([start, end])
            start = interval[0]
            end = interval[1]
        }
        // overlapping
        end = Math.max(end, interval[1])

        // last element
        if (i === intervals.length - 1) {
            if (interval[0] > end) {
                result.push(...interval)
            } else {
                result.push([start, end])
            }
        }
    })
    return result
};
