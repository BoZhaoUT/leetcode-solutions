/**
 * @param {number} n
 * @return {number}
 */
const countArrangement = (n) => {
  // candidates[i] = all numbers x valid at position i
  const candidates = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i <= n; i++) {
    for (let num = 1; num <= n; num++) {
      // definition of beautiful number
      if (num % i === 0 || i % num === 0) {
        candidates[i].push(num)
      }
    }
  }

  // visit positions in order of fewest options first to prune earlier
  // choose the next step with the smallest branching factor
  const order = Array.from({ length: n }, (_, k) => k + 1) // create an array [1, 2, 3, ... n]
    .sort((a, b) => candidates[a].length - candidates[b].length)

  const used = new Set()
  let total = 0

  const dfs = (index) => {
    // found a new beatuful arrangement
    if (index === n) {
      total += 1
      return 
    }

    // get the position index that we're working on
    const position = order[index]
    // go through all candidates and recursively build beautfuli arragenment
    for (const num of candidates[position]) {
      if (!used.has(num)) {
        used.add(num)
        dfs(index + 1)
        used.delete(num)
      }
    }
  }

  dfs(0)
  return total
}

console.log(countArrangement(1)) // 1
console.log(countArrangement(2)) // 2
console.log(countArrangement(3)) // 3
console.log(countArrangement(4)) // 8
console.log(countArrangement(5)) // 10
