/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
    while (n >= 4) {
        n = n / 4
    }
    console.log(n)
    return n === 1
};

console.log(isPowerOfFour(16)) // true
console.log(isPowerOfFour(5)) // false
console.log(isPowerOfFour(1)) // true
