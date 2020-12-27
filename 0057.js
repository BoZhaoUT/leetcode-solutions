/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i = 0;
    let start
    let end
    const result = []
    while (i < intervals.length) {
        let curr = intervals[i]
        // smaller, no overlap
        if (curr[1] < newInterval[0]) {
            result.push(curr)
        }
        // smaller, overlap
        if (start === undefined && newInterval[0] <= curr[1]) {
            start = i
        }
        // bigger, overlap
        if (end === undefined && newInterval[1] <= curr[1]) {
            end = i
            result.push([intervals[start][0], intervals[end][1]])
        }
        // bigger, no overlap
        if (newInterval[1] < curr[0]) {
            result.push(curr)
        }
        console.log(i, result)
        i++
    }
    return result
};


