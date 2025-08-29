/**
 * 598. Range Addition II
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
function maxCount(m, n, ops) {
  if (!ops || ops.length === 0) {
    return m * n
  }
    
  let minA = m
  let minB = n

  for (const [a, b] of ops) {
    if (a < minA) {
      minA = a
    } 
    if (b < minB) {
      minB = b
    } 
  }

  return minA * minB
}