/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) {
    return true
  }

  let avaiablePlots = 0
  let lastPlantedPlot
  flowerbed.forEach((curr, i) => {
    const isPrevAvailable = lastPlantedPlot === undefined || lastPlantedPlot < i - 1
    const isCurrAvailable = curr === 0
    const isNextAvailable = flowerbed[i + 1] === 0 || i + 1 === flowerbed.length
    // console.log({isPrevAvailable, isCurrAvailable, isNextAvailable})
    if (curr === 1) {
      lastPlantedPlot = i
    } else if (isPrevAvailable && isCurrAvailable && isNextAvailable) {
      avaiablePlots++
      lastPlantedPlot = i
    }
  })
  return avaiablePlots >= n
}

console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false

console.log(canPlaceFlowers([0], 1)) // true
console.log(canPlaceFlowers([1], 0)) // true
console.log(canPlaceFlowers([0, 1], 1)) // false
console.log(canPlaceFlowers([1, 0], 1)) // false
console.log(canPlaceFlowers([0, 0, 0], 1)) // true
console.log(canPlaceFlowers([0, 0, 0], 2)) // true
console.log(canPlaceFlowers([1, 0, 0, 1], 1)) // false
