/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // special cases
    if (intervals.length === 0) {
        return [newInterval]
    }
    if (newInterval[1] < intervals[0][0]) {
        intervals.splice(0, 0, newInterval)
        return intervals
    }
    let i = 0;
    let start
    let end
    let insert = []
    while (i < intervals.length) {
        let curr = intervals[i]
        // smaller, overlap, lower bound
        if (insert.length === 0 && newInterval[0] <= curr[1]) {
            start = i
            insert.push(Math.min(curr[0], newInterval[0]))
        }
        if (start !== undefined && end === undefined) {
            // bigger, no overlap
            if (newInterval[1] < curr[0]) {
            // if (newInterval[1] < curr[0] || i === intervals.length - 1) {
                end = i - 1
                insert.push(Math.max(intervals[end][1], newInterval[1]))
                // bigger, overlap
            } else if (newInterval[1] <= curr[1]) {
                end = i
                insert.push(curr[1])
            }
        }
        i++
    }
    if (end === undefined) {
        end = intervals.length
        insert.push(newInterval[1])
    }
    if (start === undefined) {
        intervals.push(newInterval)
    } else {
        intervals.splice(start, end - start + 1, insert)
    }
    return intervals
};

// console.log(insert([[1, 5]], [2, 7]))
// console.log(insert([[1,3], [6,9]], [2,5]))
// console.log(insert([], [5, 6]))
// console.log(insert([[1, 5]], [6, 8]))
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
// console.log(insert([[1,5]], [0, 3]))
// console.log(insert([[1,5]], [0, 0]))
// console.log(insert([[1,5],[6,8]], [5,6]))
// console.log(insert([[0,0],[2,4],[9,9]], [0,7]))
// console.log(insert([[3,5],[12,15]], [6,6]))

