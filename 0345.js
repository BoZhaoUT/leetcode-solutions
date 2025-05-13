/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  if (s.length <= 1) {
    return s
  }
  let i = 0
  let j = s.length - 1
  const result = new Array(s.length)
  while (i < j) {
    // find vowel from the left
    while (!isVowel(s[i]) & i < j) {
      result[i] = s[i]
      i++
    }
    // find vowel from the right
    while (!isVowel(s[j]) && i < j) {
      result[j] = s[j]
      j--
    }
    // find a pair of vowel
    if (i < j) {
      result[i] = s[j]
      result[j] = s[i]
      i++
      j--
    }
    if (i === j) {
      result[i] = s[i]
    }
  }
  return result.join('')
};

const isVowel = char => 'aeiouAEIOU'.includes(char)

console.log(reverseVowels("IceCreAm")) // "AceCreIm"
console.log(reverseVowels("leetcode")) // "leotcede"
console.log(reverseVowels("")) // ""
console.log(reverseVowels("a")) // "a"
console.log(reverseVowels("q")) // "q"
console.log(reverseVowels("ae")) // "ea"
console.log(reverseVowels("qw")) // "qw"
console.log(reverseVowels("qaw")) // "qaw"
console.log(reverseVowels("qaa")) // "qaa"
console.log(reverseVowels("qww")) // "qww"
console.log(reverseVowels("qwa")) // "qwa"
console.log(reverseVowels("awq")) // "awq"
console.log(reverseVowels("aaq")) // "aaq"
console.log(reverseVowels("aaw")) // "aaw"
