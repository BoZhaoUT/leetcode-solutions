/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // special case
    if (n === 1) {
        return 1
    }
    let a = 1
    let b = 2
    while (n > 2) {
        let temp = a
        a = b
        b = temp + a
        n--
    }
    return b
};



console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(7))
