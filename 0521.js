/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) => {
  if (a === b) {
    return -1
  }
  return Math.max(a.length, b.length)
}
