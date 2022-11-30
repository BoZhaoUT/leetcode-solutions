/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = (matches) => {
  const noLost = new Set()
  const oneLost = new Set()
  const twoOrMoreLost = new Set()
  matches.forEach((match) => {
    const [winner, loser] = match
    // handle loser
    if (oneLost.has(loser)) {
      oneLost.delete(loser)
      twoOrMoreLost.add(loser)
    } else if (noLost.has(loser)) {
      noLost.delete(loser)
      oneLost.add(loser)
    } else if (!twoOrMoreLost.has(loser)) {
      oneLost.add(loser)
    }

    // handle winner
    if (!twoOrMoreLost.has(winner) && !oneLost.has(winner)) {
      noLost.add(winner)
    }
  })

  return [[...noLost].sort((a, b) => a - b), [...oneLost].sort((a, b) => a - b)]
}

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9]
  ])
) // [[1,2,10],[4,5,7,8]]
