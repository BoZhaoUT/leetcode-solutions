/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = (s, dictionary) => {
  dictionary.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length
    }
    return a.localeCompare(b)
  })
  const validWords = dictionary.filter(word => isSubsequence(word, s))

  return validWords[0] || ""
};


// return true if short is subsequence of long
// otherwise false
const isSubsequence = (short, long) => {
  if (short.length > long.length) {
    return false
  }
  let i = 0
  let j = 0
  while (i < short.length && j < long.length) {
    if (short[i] === long[j]) {
      i++
    }
    j++
  }
  return i === short.length
}

console.log(findLongestWord("abpcplea", ["ale","apple","monkey","plea"])) // "apple"
console.log(findLongestWord("abpcplea", ["a","b","c"])) // "a"

console.log(findLongestWord("a", ["b", "c", "d"])) // ""
console.log(findLongestWord("abc", ["c", "b", "a"])) // "a"
