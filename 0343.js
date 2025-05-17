/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => {
  let foundSomething = false
  let result = 0
  for (let char of s) {
    if (char === " " && foundSomething) {
      result++
      foundSomething = false
    } else if (char !== " ") {
      foundSomething = true
    }
  }
  if (foundSomething) {
    result++
  }
  return result
};

console.log(countSegments("Hello, my name is John")) // 5
console.log(countSegments("Hello")) // 1

console.log(countSegments("")) // 0
console.log(countSegments(" ")) // 0
console.log(countSegments("  ")) // 0
console.log(countSegments(" a ")) // 1
console.log(countSegments(" a")) // 1
console.log(countSegments("a ")) // 1
console.log(countSegments(" a b ")) // 2
console.log(countSegments(" a  b ")) // 2
console.log(countSegments(" acc bbb ")) // 2
console.log(countSegments("acc bbb")) // 2
