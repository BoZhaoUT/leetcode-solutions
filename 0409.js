/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  let odd = 0
  let result = 0
  const map = {}
  for (let char of s) {
    const occurrence = map[char]
    if (!occurrence) {
      map[char] = 1
      odd++
    } else if (occurrence % 2 === 1) {
      map[char] = occurrence + 1
      result += 2
      odd--
    } else {
      // even
      map[char] = occurrence + 1
      odd++
    }
  }
  if (odd > 0) {
    result++
  }
  return result
};

console.log(longestPalindrome("abccccdd")) // 7
console.log(longestPalindrome("a")) // 1

console.log(longestPalindrome("")) // 0
console.log(longestPalindrome("aa")) // 2
console.log(longestPalindrome("aab")) // 3
console.log(longestPalindrome("aba")) // 3
console.log(longestPalindrome("aaa")) // 3
console.log(longestPalindrome("aaaa")) // 4
console.log(longestPalindrome("aabb")) // 4
console.log(longestPalindrome("baba")) // 4

console.log(longestPalindrome("aA")) // 1
