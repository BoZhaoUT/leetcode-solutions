/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
  let lower = 1
  let higher = n
  while (lower <= higher) {
    const newGuess = Math.floor((lower + higher) / 2)
    const result = guess(newGuess)
    if (result === 0) {
      return newGuess
    }
    if (result === -1) {
      higher = newGuess - 1
    } else {
      lower = newGuess + 1
    }
  }
};

const guess = (n) => {
  const picked = 2
  if (n === picked) {
    return 0
  }
  if (n > picked) {
    return -1
  }
  if (n < picked) {
    return 1
  }
}

console.log(guessNumber(2))