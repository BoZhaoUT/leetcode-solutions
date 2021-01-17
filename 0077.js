/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    // base case
    if (n === 1) {
        return [[1]]
    } else if (k === 1) {
        while (n >= 1) {
            result.push([n])
            n--
        }
        return result
    } else {
        while (n >= k) {
            const others = combine(n - 1, k - 1)
            others.forEach(other => other.push(n))
            result = result.concat(others)
            n--
        }
        return result
    }
};

