/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const letters = {}
  for (let char of magazine) {
    if (letters[char]) {
      letters[char] += 1
    } else {
      letters[char] = 1
    }
  }
  // console.log(letters)
  for (let char of ransomNote) {
    if (letters[char]) {
      letters[char] -= 1
    } else {
      return false
    }
  }
  return true
};

console.log(canConstruct('', '')) // true
console.log(canConstruct('', 'abc')) // true
console.log(canConstruct('a', '')) // false
console.log(canConstruct('a', 'a')) // true
console.log(canConstruct('aa', 'aa')) // true
console.log(canConstruct('aa', 'aaa')) // true
console.log(canConstruct('aa', 'a')) // false
console.log(canConstruct('abc', 'cba')) // true
console.log(canConstruct('aab', 'baa')) // true
console.log(canConstruct('aabbcc', 'abcabc')) // true - enough of each letter
