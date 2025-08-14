/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = (s) => {
  
  let numAbsence = 0
  let numLate = 0
  let i = 0
  while (i < s.length && numAbsence < 2 && numLate < 3) {
    const record = s[i]
    if (record === "P") {
      numLate = 0
    } else if (record === "L") {
      numLate++
    } else if (record === "A") {
      numAbsence++
      numLate = 0
    }
    i++
  }
  return numAbsence < 2 && numLate < 3
}

console.log(checkRecord("PPALLP")) // true
console.log(checkRecord("PPALLL")) // false

console.log(checkRecord("P")) // true
console.log(checkRecord("A")) // true
console.log(checkRecord("L")) // true
console.log(checkRecord("LL")) // true
console.log(checkRecord("AA")) // false
console.log(checkRecord("LLPLL")) // true

console.log(checkRecord("LALL")) // false
