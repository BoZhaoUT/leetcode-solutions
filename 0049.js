/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {}
    strs.forEach(str => {
        const chars = str.split("")
        chars.sort()
        const key = chars.join("")
        if (result[key]) {
            result[key].push(str)
        } else {
            result[key] = [str]
        }
    })
    return Object.values(result)
};
