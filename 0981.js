class TimeMap {
  constructor() {
    this.data = {}
  }

  set(key, value, timestamp) {
    if (this.data[key] === undefined) {
      this.data[key] = []
    }
    this.data[key].push([value, timestamp])
  }

  get(key, timestamp) {
    const valuesWithTimetamps = this.data[key] || []

    let left = 0
    let right = valuesWithTimetamps.length - 1

    let result = ''
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const [midValue, midTimestamp] = valuesWithTimetamps[mid]
      // found a record with the input timestamp
      if (timestamp === midTimestamp) {
        return midValue
      }
      // result is in the second half
      if (timestamp >= midTimestamp) {
        result = valuesWithTimetamps[left][0]
        left = mid + 1
      } else {
        // result is in the first half
        right = mid - 1
      }
    }
    return result
  }
}

const myTimeMap = new TimeMap()

myTimeMap.set('love', 'high', 10)
myTimeMap.set('love', 'low', 20)
console.log(myTimeMap.get('love', 5)) // ""
console.log(myTimeMap.get('love', 10)) // "high"
console.log(myTimeMap.get('love', 15)) // "high"
console.log(myTimeMap.get('love', 20)) // "low"
console.log(myTimeMap.get('love', 25)) // "low"
