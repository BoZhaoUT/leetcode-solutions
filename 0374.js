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
  while (true) {

    const newGuess = Math.floor((lower + higher) / 2)
    console.log({ lower, higher, newGuess})
    const result = guess(newGuess)
    if (result === 0) {
      return newGuess
    }
    if (result === -1) {
      higher = newGuess
    } else {
      lower = newGuess
    }
  }
};

const guess = (n) => {
  const picked = 1
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

console.log(guessNumber(10))