var combinationSum2 = function(candidates, target) {
    const result = []
    candidates.sort((a, b) => a - b)
    search(candidates, target, [], 0, result)
    return result
}


const search = (candidates, target, solution, index, result) => {
    console.log("target", target, "solution", solution, "num", candidates[index], "index", index)
    // a solution is found
    if (target === 0) {
        return result.push(solution)
    }
    if (index === candidates.length) {
        return
    }

    // skip the curr num
    search(candidates, target, solution.slice(), index + 1, result)

    const num = candidates[index]
    // use the curr num
    if (num <= target) {
        solution.push(num)
        search(candidates, target - num, solution, index + 1, result)
    }
}
