/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
  if (s.length < 4 || s.length > 12) {
    return []
  }
  const result = []

  const buildSegment = (startingIndex, partialIp) => {
    if (partialIp.length === 4 && startingIndex === s.length) {
      return result.push(partialIp.join("."))
    }
    if (partialIp.length === 4) {
      return
    }
    for (let i = 1; i <= 3; i++) {
      const endIndex = startingIndex + i
      if (endIndex <= s.length) {
        const segmentCandidate = s.substring(startingIndex, endIndex)
        
        if (isValidSegment(segmentCandidate)) {
          // partialIp.push(segmentCandidate)
          // console.log({ segmentCandidate, partialIp, endIndex })
          buildSegment(endIndex, [...partialIp, segmentCandidate])
        }
      }
    }
  }

  buildSegment(0, [])

  return result
};


const isValidSegment = (segment) => {
  
  if (segment.length === 1) {
    return true
  }
  if (segment.length === 2) {
    // console.log("==== is valid", { segment, result: })
    return segment[0] !== "0"
  }
  if (segment.length === 3) {
    return segment[0] !== "0" && parseInt(segment) <= 255
  }
  return false
}


console.log(restoreIpAddresses("25525511135")) // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("0000")) // ["0.0.0.0"]
console.log(restoreIpAddresses("101023")) // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

console.log(restoreIpAddresses("0100")) // ["0.1.0.0"]
console.log(restoreIpAddresses("00000")) // []
console.log(restoreIpAddresses("01000")) // ["0.10.0.0"]
console.log(restoreIpAddresses("010010")) // ["0.100.1.0", "0.10.0.10"]
console.log(restoreIpAddresses("000256")) // []

console.log(restoreIpAddresses("0")) // []