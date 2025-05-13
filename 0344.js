/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  for (let i = 0; i < s.length / 2; i++) {
    const j = s.length - i - 1
    const holder = s[i]
    s[i] = s[j]
    s[j] = holder
  } 
};

// s = ["h","e","l","l","o"] // [ 'o', 'l', 'l', 'e', 'h' ]
// s = [] // []
// s = ['a'] // ['a']
// s = ['a', 'b'] // ['b', 'a']
// s = ['a', 'b', 'c']
// reverseString(s)
// console.log(s)
