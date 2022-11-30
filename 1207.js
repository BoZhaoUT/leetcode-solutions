/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  const occurrances = arr.reduce((accu, curr) => {
    accu[curr] = accu[curr] ? accu[curr] + 1 : 1
    return accu
  }, {})

  console.log(Object.values(occurrances))
  // each key should have a unique occurrence
  return (
    new Set(Object.values(occurrances)).size === Object.keys(occurrances).length
  )
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])) // true
console.log(uniqueOccurrences([1, 2])) // false
