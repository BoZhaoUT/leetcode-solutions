/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // +num1 converts the value from string to integer
    // special case
    if (+num1 === 0 || +num2 === 0) {
        return "0"
    }
    
    // number of digits in the product cannot exceed the sum of digits in
    // two multipliers. e.g. 99 * 999 = 98901
    const result = Array(num1.length + num2.length).fill(0)

    // starting from the right hand side in the first number and multiply
    // each digit in the other number    
    for (let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            const product = +num2[i] * +num1[j]
            result[i + j + 1] += product
            while (result[i + j + 1] >= 10) {
                result[i + j + 1] -= 10
                result[i + j] += 1
            }
        }
    }
    return result.join("").replace(/^0*/, "")
};

/*
num1        1   2   3
num2            4   5
        -------------
                1   5   (3 * 5)
            1   0       (2 * 5)
        0   5           (1 * 5)
        
            1   2       (3 * 4)
        0   8           (2 * 4)
    0   4               (1 * 4)
        -------------
    0   5   5   3   5   (sum all digits in a column)
*/

