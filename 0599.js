/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const list1Object = list1.reduce((accu, curr, i) => {
    accu[curr] = i
    return accu
  }, {})

  let result = []
  let minimumIndexSum = Infinity

  list2.forEach((key, list2Index) => {
    const list1Index = list1Object[key]
    if (list1Index === undefined) {
      return
    }
    const indexSum = list1Index + list2Index
    if (indexSum < minimumIndexSum) {
      result = [key]
      minimumIndexSum = indexSum
    } else if (indexSum === minimumIndexSum) {
      result.push(key)
    }
  })

  return result
}

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])) // ["Shogun"]
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"])) // ["Shogun"]
console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"])) // ["sad","happy"]
