/**
 * @param {number[][]} cities
 * @return {number}
 */
const findCircleNum = (cities) => {
  // maintain map of city id to province id
  // city row index and province row index is the smallest row index of all cities
  const processedCities = new Set()
  // maintain a counter of cities 
  let result = 0

  // go through each row/city, and find its connected cities
  cities.forEach((row, rowIndex) => {
    // skip the ones that have been exampled?
    if (!processedCities.has(rowIndex)) {

      // maintian a set of cities row that belong to the same province
      // start with the current city itself
      const sameProvince = new Set([rowIndex])

      const unprocessedCitiesFromTheSameProvince = new Set([rowIndex])

      while (unprocessedCitiesFromTheSameProvince.size > 0) {
        console.log(unprocessedCitiesFromTheSameProvince)
        const unProcessedCityIndex = unprocessedCitiesFromTheSameProvince.values().next().value

        const city = cities[unProcessedCityIndex]

        city.forEach((cell, columnIndex) => {
          // is connected i.e. cell === 1
          if (cell === 1 && unProcessedCityIndex !== columnIndex && !sameProvince.has(columnIndex)) {
            // put the city into the the province set
            sameProvince.add(columnIndex)
            unprocessedCitiesFromTheSameProvince.add(columnIndex)
            // put the city into a set of unprocessed city but in the same province
          }
        })

        unprocessedCitiesFromTheSameProvince.delete(unProcessedCityIndex)
      }

      for (const city of sameProvince) {
        processedCities.add(city);
      }

      result++
    }
  })
  
  return result
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])) // 2
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])) // 3


/**
 * @param {number[][]} cities
 * @return {number}
 */
const findCircleNum2 = (cities) => {
  const n = cities.length
  const visited = Array(n).fill(false)
  let result = 0

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue
    }

    result++

    const citiesFromTheSameProvince = [i]
    visited[i] = true

    while (citiesFromTheSameProvince.length) {
      const currentCityIndex = citiesFromTheSameProvince.pop()
      const currentCity = cities[currentCityIndex]

      for (let neighboorIndex = 0; neighboorIndex < n; neighboorIndex++) {
        if (currentCity[neighboorIndex] === 1 && !visited[neighboorIndex]) {
          visited[neighboorIndex] = true
          citiesFromTheSameProvince.push(neighboorIndex)
        }
      }
    }
  }

  return result
}
