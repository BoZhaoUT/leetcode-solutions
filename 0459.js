/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  const len = s.length
  
  for (let i = 1; i <= len / 2; i++) {
    // skip the ones that cannot constrct s in terms of its length
    if (len % i === 0) {
      const candidate = s.slice(0, i)
      
      // test the candidate
      let j = 0
      while (j < s.length) {
        // candidate index j mode candidate.length
        if (candidate[j % candidate.length] === s[j]) {
          j++
        } else {
          break
        }
        // s index -> j
      }
      if (j === s.length) {
        return true
      }
    }
  }
  return false
};

console.log(repeatedSubstringPattern("abab")) // true
console.log(repeatedSubstringPattern("aba")) // false
console.log(repeatedSubstringPattern("abcabcabcabc")) // true

console.log(repeatedSubstringPattern("a")) // false
console.log(repeatedSubstringPattern("aa")) // true
console.log(repeatedSubstringPattern("ab")) // false
console.log(repeatedSubstringPattern("abab")) // true
console.log(repeatedSubstringPattern("aaa")) // true
