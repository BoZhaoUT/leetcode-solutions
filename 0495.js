/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
  let result = 0
  for (let i = 0; i < timeSeries.length; i++) {
    const currentTimestamp = timeSeries[i]
    const nextTimestamp = timeSeries[i + 1]
    // this attack's poison last full duration
    if (currentTimestamp + duration <= nextTimestamp || i === timeSeries.length - 1) {
      result += duration
    } else {
      result += nextTimestamp - currentTimestamp
    }
  }

  return result
};

console.log(findPoisonedDuration([1, 4], 2)) // 4
console.log(findPoisonedDuration([1, 2], 2)) // 3

console.log(findPoisonedDuration([1], 5)) // 5
console.log(findPoisonedDuration([1, 6], 5)) // 10

console.log(findPoisonedDuration([1, 6], 0)) // 0
console.log(findPoisonedDuration([1, 2, 3], 5)) // 7 <- lots of overlaps

