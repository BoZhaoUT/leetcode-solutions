/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    return binaryGrayCode(n).map(num => parseInt(num, 2))
};

const binaryGrayCode = n => {
    if (n === 1) {
        return [0, 1]
    }
    let result = []
    let others = binaryGrayCode(n - 1)
    const withZero = others.map(other => other + "0")
    result = result.concat(withZero)
    others.reverse()
    const withOne = others.map(other => other + "1")
    result = result.concat(withOne)
    return result
}

console.log(grayCode(3))
