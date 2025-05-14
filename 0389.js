/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let sum = 0
  for (let char of t) {
    sum += char.charCodeAt(0)
  }
  for (let char of s) {
    sum -= char.charCodeAt(0)
  }
  return String.fromCharCode(sum)
};

console.log(findTheDifference('abcd', 'abcde')) // e
console.log(findTheDifference('', 'y')) // 'y'
