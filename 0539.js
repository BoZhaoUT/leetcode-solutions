/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = (timePoints) => {
  timePoints.sort((time1, time2) => {
    const [time1Hour, time1Minute] = parseTime(time1)
    const [time2Hour, time2Minute] = parseTime(time2)

    if (time1Hour < time2Hour) {
      return -1
    }
    if (time1Hour > time2Hour) {
      return 1
    }
    if (time1Minute < time2Minute) {
      return -1
    }
    if (time1Minute > time2Minute) {
      return 1
    }
    return 0
  })

  let result = Number.POSITIVE_INFINITY
  let i = 0
  while (i < timePoints.length - 1) {
    const time1 = timePoints[i]
    const time2 = timePoints[i + 1]

    if (time1 === time2) {
      return 0
    }
    
    const [time1Hour, time1Minute] = parseTime(time1)
    const [time2Hour, time2Minute] = parseTime(time2)

    let diff = 0
    diff += (time2Hour - time1Hour) * 60
    diff += time2Minute - time1Minute
    result = Math.min(result, diff)
    i++
  }



  const time1 = timePoints[0]
  const time2 = timePoints[timePoints.length - 1]
  const [time1Hour, time1Minute] = parseTime(time1)
  const [time2Hour, time2Minute] = parseTime(time2)

  let diff = 0
  diff += time1Hour * 60 + time1Minute
  diff += (23 - time2Hour) * 60 + (60 - time2Minute)
  result = Math.min(result, diff)

  return result
}

const parseTime = (timePoint) => {
  return timePoint.split(":").map(value => +value)
}

// console.log(findMinDifference(["23:59","00:00"]))
// console.log(findMinDifference(["00:00","23:59","00:00"]))

console.log(findMinDifference(["01:01","02:01","03:00"]))

