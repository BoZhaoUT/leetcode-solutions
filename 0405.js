/**
 * @param {number} num
 * @return {string}
 */
const toHex = (num) => {
  if (num === 0) {
    return "0"
  }
  if (num < 0) {
    num = Math.pow(2, 32) + num; // add 2^32
  }
  let result = ""
  const map = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f"
  };
  while (num > 0) {
    const remainder = Math.floor(num % 16)
    result = map[remainder] + result
    num = Math.floor(num / 16)
  }
  return result
};

console.log(toHex(26)) // 1a
console.log(toHex(-1)) // ffffffff
console.log(toHex(0)) // 0
