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


    const num = candidates[index]
    // use the curr num
    if (num <= target) {
        // if the num is previously used
        if (num === solution[solution.length - 1]) {
            search(candidates, target - num, [...solution, num], index + 1, result)
        } else if (num !== candidates[index - 1]){
            search(candidates, target - num, [...solution, num], index + 1, result)
        }
        // if (num !== candidates[index - 1]) {
        //     search(candidates, target - num, [...solution, num], index + 1, result)
        // } else if (num === solution[solution.length - 1]) {
        //     while (candidates[index] === candidates[index+1]) {
        //         index++
        //     }
        //     search(candidates, target - num, [...solution, num], index + 1, result)
        // }
    }

    // skip the curr num
    search(candidates, target, [...solution], index + 1, result)
}

// console.log(combinationSum2([10,1,2,7,6,1,5], 8))

// var combinationSum2 = function(candidates, target) {
//     candidates.sort((a,b)=>a-b);
    
//     let res = [];
//     let dfs = function(id, n, comb) {
//         if (candidates[id] === 1 || candidates[id] === 6) console.log("index", id, "target", n, "comb", comb)
//         if (n == 0) {
//             res.push(comb);
//             return;
//         }
        
//         for (let i=id;i<candidates.length;i++) {
//             console.log("i", i, "candidates", candidates[i])
//             if (candidates[i] <= n) {
//                 dfs(i+1, n - candidates[i], [...comb, candidates[i]]);
//             }
//             while(candidates[i+1]==candidates[i]) {
//                 console.log("skipping", i, comb)
//                 i++
//             }
//         }
//         return res;
//     }
    
//     dfs(0, target, []);
//     return res;
// };

console.log(combinationSum2([3,1,3,5,1,1], 8))


