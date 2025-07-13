/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
  if (s.length < 4 || s.length > 12) {
    return false
  }
  const result = []

  const buildSegment = (startingIndex, partialIp) => {
    if (partialIp.length === 4 && startingIndex > s.length) {
      return
    }
    if (partialIp.length === 4 && startingIndex === s.length) {
      return validIps.push(partialIp.join("."))
    }
    for (let i = 1; i <= 3; i++) {
      const endIndex = startingIndex + i
      if (endIndex <= s.length) {
        const segmentCandidate = s.substring(startingIndex, endIndex)
        if (isValidSegment(segmentCandidate)) {
          partialIp.push(segmentCandidate)
          buildSegment(endIndex, partialIp)
        }
      }
    }
  }

  buildSegment(0, [])

  return result
};

// helper function
// knows how many segments have been decided 0, 1, 2, 3, 4. 
// knows which is the next digit to to start a segment
// try to recursively call itself with 1 - 3 nums
// knows how to skip impossible scenarios
// optinal: check the number of remaining digits vs remaining segments needs to be built

// return false if it's impossible ton continue building the next segment



const isValidSegment = (s) => {
  if (s.length === 1) {
    return true
  }
  if (s.length === 2) {
    return s[0] !== 0
  }
  if (s.length === 3) {
    return s[0] !== 0 && parseInt(s) <= 255
  }
  return false
}

console.log(restoreIpAddresses["0000"]) // ["0.0.0.0"]
