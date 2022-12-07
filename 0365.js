/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
const canMeasureWater = (jug1Capacity, jug2Capacity, targetCapacity) => {
  const testedCombinations = new Set()

  const helper = (jug1Volume, jug2Volume) => {
    const hash = `${jug1Volume}-${jug2Volume}`
    // base case: the current combination has been tested
    if (testedCombinations.has(hash)) {
      return false
    }
    // base case: target is fulfilled
    if (jug1Volume === targetCapacity || jug2Volume === targetCapacity) {
      return true
    }
    testedCombinations.add(hash)
    let result = false

    // console.log({ jug1Volume, jug2Volume })
    // fill jug 1
    result = result || helper(jug1Capacity, jug2Volume)
    // fill jug 2
    result = result || helper(jug1Volume, jug2Capacity)
    // empty jug 1
    result = result || helper(0, jug2Capacity)
    // empty jug 2
    result = result || helper(jug1Volume, 0)
    // pour jug 1 into jug 2
    let pourVolume = Math.min(jug1Volume, jug2Capacity - jug2Volume)
    result = result || helper(jug1Volume - pourVolume, jug2Volume + pourVolume)
    // pour jug 2 into jug 1
    pourVolume = Math.min(jug2Volume, jug1Capacity - jug1Volume)
    result = result || helper(jug1Volume + pourVolume, jug2Volume - pourVolume)
    // pour jug 1 and jug 2 together
    result = result || jug1Volume + jug2Volume === targetCapacity
    return result
  }

  return helper(0, 0)
}

console.log(canMeasureWater(3, 5, 4))
