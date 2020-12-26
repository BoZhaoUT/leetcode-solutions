/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i = 0;
    let start
    let end
    while (i < intervals.length && end === undefined) {
        let curr = intervals[i]
        if (start === undefined && newInterval[0] < curr[1]) {
            start = i
        }
        if (newInterval[1] < curr[0]) {
            end = i - 1
        } else if (newInterval[1] < curr[1]) {
            end = i
        }
        i++
    }
    
    return [start, end]
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
