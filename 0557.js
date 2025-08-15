/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  const result = []
  let stack = []

  const putStackIntoResult = () => {
    let i = stack.length - 1
    while (i >= 0) {
      result.push(stack[i])
      i--
    }
    stack = []
  }

  for (const char of s) {
    if (char === " ") {
      putStackIntoResult()
      result.push(" ")
    } else {
      stack.push(char)
    }
  }
  putStackIntoResult()
  return result.join("")
}

console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Mr Ding")) // "rM gniD"

console.log(reverseWords("a")) // "a"
console.log(reverseWords("ab")) // "ba"
