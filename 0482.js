/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
  let result = ""
  let currentGroupLength = 0
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i].toUpperCase()
    if (char !== "-") {
      if (currentGroupLength < k) {
        result = char + result
        currentGroupLength++
      } else if (currentGroupLength === k) {
        result = char + "-" + result
        currentGroupLength = 1
      }
      console.log(char, currentGroupLength)
    }
  }
  return result
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)) // "5F3Z-2E9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)) // "2-5G-3J"

console.log(licenseKeyFormatting("5", 1)) // "5"
console.log(licenseKeyFormatting("5F3Z", 1)) // "5-F-3-Z"
console.log(licenseKeyFormatting("5F", 2)) // "5F"
console.log(licenseKeyFormatting("5F3", 2)) // "5-F3"
console.log(licenseKeyFormatting("5F", 3)) // "5F"
console.log(licenseKeyFormatting("5F3Z", 3)) // "5-F3Z"
