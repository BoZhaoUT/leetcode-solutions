/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const result = []
  let i = 1
  while (i <= n) {
    if (i % 15 === 0) {
      result.push("FizzBuzz")
    } else if (i % 3 === 0) {
      result.push("Fizz")
    } else if (i % 5 === 0) {
      result.push("Buzz")
    } else {
      result.push(String(i))
    }
    i++
  }
  return result
};

console.log(fizzBuzz(3)) // ['1', '2', 'Fizz']
console.log(fizzBuzz(5)) // ['1', '2', 'Fizz', '4', 'buzz']
console.log(fizzBuzz(15)) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
