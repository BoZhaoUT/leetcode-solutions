/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k, start = 1) {
    console.log(n , k , start)
    const result = []
    // base case
    if (k === 1) {
        while (start <= n) {
            result.push([start])
            start++
        }
        console.log("result", result)
        return result
    }

    let others
    // recursivce case
    for (let i = 1; i <= n - k + 1; i++) {
        others = combine(n, k - 1, start + 1)
        others.forEach(curr => curr.push(i))
    }
    return others
};

