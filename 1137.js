/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
  let t0 = 0
  let t1 = 1
  let t2 = 1

  if (n === 0) {
    return t0
  }
  if (n === 1) {
    return t1
  }
  if (n === 1) {
    return t2
  }
  while (n >= 3) {
    let t3 = t0 + t1 + t2
    t0 = t1
    t1 = t2
    t2 = t3
    n--
  }
  return t2
}

console.log(tribonacci(4)) // 4
console.log(tribonacci(25)) // 1389537
