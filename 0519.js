class Solution {
  constructor(m, n) {
    this.m = m                    // number of rows
    this.n = n                    // number of columns
    this.total = m * n            // total number of cells in the matrix
    this.posMap = {}              // object to store swapped positions
    this.reset()                  // initialize totalRemaining and clear posMap
  }

  flip() {
    // Pick a random index between 0 and totalRemaining - 1
    const rand = Math.floor(Math.random() * this.totalRemaining)

    // Find the actual cell for this random index.
    // If rand has been swapped before, use the mapped value.
    // Otherwise, use rand itself.
    let x
    // rand has been used in the past
    if (rand in this.posMap) {
      // get the swapped index from this.map instead
      x = this.posMap[rand]
    } else {
      // rand has not been used in the past
      x = rand
    }

    // The last available index in the current "virtual" array
    const last = this.totalRemaining - 1

    // Find what value should replace rand in future flips.
    // If last has been swapped before, use its mapped value.
    // Otherwise, use last itself.
    let y
    // the "last" index has been used in the past
    if (last in this.posMap) {
      y = this.posMap[last]
    } else {
      y = last
    }

    // Mark rand as "used" by mapping it to y.
    // This effectively swaps rand with the last available cell.
    this.posMap[rand] = y

    // Reduce the count of available cells
    this.totalRemaining--

    // Convert the 1D index (x) back to 2D coordinates [row, col]
    const row = Math.floor(x / this.n)
    const col = x % this.n
    return [row, col]
  }

  reset() {
    // Reset the total remaining cells to the full matrix size
    this.totalRemaining = this.m * this.n

    // Clear all mappings, making all cells available again
    this.posMap = {}
  }
}