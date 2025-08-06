/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  let capitalCount = 0
  let lowerCount = 0
  let i = 0
  while (i < word.length && (lowerCount === 0 || capitalCount <= 1)) {
    const char = word[i]
    // console.log(char)
    const isLower = char >= 'a' && char <= 'z'
    if (isLower) {
      if (capitalCount > 1) {
        return false
      }
      lowerCount++
    } else {
      if (i !== 0 && lowerCount > 0) {
        return false
      }
      capitalCount++
    }
    i++
  }
  return i === word.length
}

console.log(detectCapitalUse("USA")) // true
console.log(detectCapitalUse("leetcode")) // true
console.log(detectCapitalUse("Google")) // true
console.log(detectCapitalUse("FlaG")) // false

console.log(detectCapitalUse("a")) // true
console.log(detectCapitalUse("A")) // true
console.log(detectCapitalUse("Aa")) // true
console.log(detectCapitalUse("aa")) // true
console.log(detectCapitalUse("AA")) // true
console.log(detectCapitalUse("aA")) // false

console.log(detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf")) // false
