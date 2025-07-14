/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const result = []
  for (let word of words) {
    const firstLetterRow = getKeyboardRow(word[0])
    let i = 1
    while (i < word.length && getKeyboardRow(word[i]) === firstLetterRow) {
      i++
    }
    if (i === word.length) {
      result.push(word)
    }
  }
  return result
};

const getKeyboardRow = (char) => {
  const firstRow = new Set([..."qwertyuiop"])
  const secondRow = new Set([..."asdfghjkl"])
  // const thirdRow = new Set([..."zxcvbnm"])

  char = char.toLowerCase()

  if (firstRow.has(char)) {
    return "first"
  }
  if (secondRow.has(char)) {
    return "second"
  }
  return "third"
}

console.log(findWords(["Hello","Alaska","Dad","Peace"])) // ["Alaska","Dad"]
console.log(findWords(["omk"])) // []
