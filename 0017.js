/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") {
        return []
    }
    
    const mapping = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let result = []
    let first = mapping[digits[0]]
    let second = mapping[digits[1]]
    let third = mapping[digits[2]]
    let fourth = mapping[digits[3]]
    
    for (let i = 0; i < first.length; i++) {
        if (digits.length === 1) {
            result.push(first[i])
        } else {
            for (let j = 0; j < second.length; j++) {
                if (digits.length === 2) {
                    result.push(first[i] + second[j])
                } else {
                    for (let k = 0; k < third.length; k++) {
                        if (digits.length === 3) {
                            result.push(first[i] + second[j] + third[k])
                        } else {
                            for (let l = 0; l < fourth.length; l++) {
                                result.push(first[i] + second[j] + third[k] + fourth[l])
                            }
                        }
                        
                    }
                }
            }
        }

    }
    return result
};
