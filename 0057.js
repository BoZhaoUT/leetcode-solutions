/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i = 0;
    let start
    let end
    let insert = []
    while (i < intervals.length) {
        let curr = intervals[i]
        // smaller, overlap, lower bound
        if (insert.length === 0 && newInterval[0] <= curr[1]) {
            start = i
            insert.push(curr[0])
        }
        // bigger, no overlap
        if (end === undefined && newInterval[1] < curr[0]) {
            end = start
            insert.push(Math.max(intervals[start][1], newInterval[1]))
        }
        if (end === undefined && newInterval[1] <= curr[1]) {
            end = i
            insert.push(curr[1])
        }
        // bigger, overlap
        i++
    }
    // console.log("start", start, "end", end, "insert", insert)
    intervals.splice(start, end - start + 1, insert)
    return intervals
};


console.log(insert([[1,3],[6,9]], [2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
