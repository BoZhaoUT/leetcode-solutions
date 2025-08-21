/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const complexNumberMultiply = (num1, num2) => {
  const [num1Real, num1Imaginary] = num1.split("+").map(num => +num.replace("i", ""))
  const [num2Real, num2Imaginary] = num2.split("+").map(num => +num.replace("i", ""))
  
  const realProduct = num1Real * num2Real
  const complexProduct = num1Real * num2Imaginary + num2Real * num1Imaginary
  const imaginaryProduct = num1Imaginary * num2Imaginary * -1
  
  return `${realProduct + imaginaryProduct}+${complexProduct}i`
}

console.log(complexNumberMultiply("1+1i", "1+1i")) // 0+2i
console.log(complexNumberMultiply("1+-1i", "1+-1i")) // 0+-2i

console.log(complexNumberMultiply("0+1i", "3+-2i")) // 2+3i

