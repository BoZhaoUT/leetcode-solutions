/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let i = 0
  let j = 0
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
      j++
    } else {
      j++
    }
  }
  return i === s.length
};

console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false

console.log(isSubsequence("", "")) // true
console.log(isSubsequence("", "a")) // true
console.log(isSubsequence("a", "a")) // true
console.log(isSubsequence("a", "ab")) // true
console.log(isSubsequence("a", "ba")) // true
console.log(isSubsequence("aa", "aba")) // true
console.log(isSubsequence("aa", "babab")) // true
console.log(isSubsequence("aa", "bab")) // false


