/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = {}

    /*
     * i and j and the indexes in s and p
     * check(i, j) means checking if s[i:end] and p[j:end] can match
     */
    const check = (i, j) => {
        const key = `${i}:${j}`
        // base cases
        // result is calculated
        if (dp[key] !== undefined) {
            return dp[key]
        }
        // out of range
        if (i > s.length) {
            return false
        }
        // all chars in s and p are checked
        if (i === s.length && j === p.length) {
            return true
        }
        let result
        // recursive cases
        // s[i] and p[j] are the same char or p[j] is a dot
        if (s[i] === p[j] || p[j] === ".") {
            // the symbol is followed by a star
            if (p[j + 1] === "*") {
                // match 1 occurence in s or
                // skip p[j]* by repeating 0 occurences
                result = check(i + 1, j) || check(i, j + 2)
            } else { // is not followed by a star
                result = check(i + 1, j + 1)
            }
        } else { // the s[i] and p[j] are not the same char
            // try to skip p[j]* by repeating 0 occurences
            if (p[j + 1] === "*") {
                result = check(i, j + 2)
            } else { // p[j] is not skippable. match fail
                result = false
            }
        }
        dp[key] = result
        return result
    }
    return check(0, 0)
};

console.log(isMatch("aa", "a")) // false
console.log(isMatch("aa", "a*")) // true
console.log(isMatch("ab", ".*")) // true
console.log(isMatch("aab", "c*a*b")) // true
console.log(isMatch("mississippi", "mis*is*p*.")) // false


// function isMatch(s, p) {
//     var lenS = s.length;
//     var lenP = p.length;
//     var map = {};
//     return check(0, 0);
  
//     function check(idxS, idxP) {
//       if (map[idxS + ':' + idxP] !== undefined) return map[idxS + ':' + idxP];
//       if (idxS > lenS) return false;
//       if (idxS === lenS && idxP === lenP) return true;
  
//       if (p[idxP] === '.' || p[idxP] === s[idxS]) {
//         map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
//           check(idxS + 1, idxP) || check(idxS, idxP + 2) :
//           check(idxS + 1, idxP + 1);
//       } else {
//         map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
//           check(idxS, idxP + 2) : false;
//       }
//       return map[idxS + ':' + idxP];
//     }
// }
