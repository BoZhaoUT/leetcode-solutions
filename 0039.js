/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    search(candidates, target, [], 0, result)
    return result
}


const search = (candidates, target, solution, index, result) => {
    // a solution is found
    if (target === 0) {
        return result.push(solution)
    // numbers in buffer cannot form a solution
    } else if (index === candidates.length || target < 0) {
        return
    }
    // try to use the next num
    search(candidates, target, solution.slice(), index + 1, result)

    // try to reuse the current num
    const num = candidates[index]
    solution.push(num)
    search(candidates, target - num, solution, index, result)
}
