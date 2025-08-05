// /**
//  * @param {string} s
//  * @return {number}
//  */
// const findSubstringInWraproundString = (s) => {
//   // use a set to capture the results 
//   const result = new Set()

//   // go through all substrings of s
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       if (isSubstring(s, i, j)) {
//         console.log(s.substring(i, j), i, j)
//         result.add(s.substring(i, j))
//       }
//     }
//   }
//   console.log(result)
//   return result.size
// }

// const isSubstring = (s, startIndex, endIndex) => {
//   if (endIndex - startIndex === 1) {
//     return true
//   }

//   for (let i = startIndex + 1; i < endIndex; i++) {
//     if (!isContenious(s[i - 1], s[i])) {
//       return false
//     }
//   }
//   return true
// }

const isContenious = (char1, char2) => {
  // char1 followed by char like a, b in the alphabet
  const case1 = char1.charCodeAt(0) === char2.charCodeAt(0) - 1
  
  const case2 = char1 === "z" && char2 === 'a'

  return case1 || case2
}

const findSubstringInWraproundString = (s) => {
  const maxLen = Array(26).fill(0); // max length ending at 'a' to 'z'
  let k = 0; // length of current valid wraparound substring

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && isContenious(s[i - 1], s[i])) {
      k++;
    } else {
      k = 1;
    }

    const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
    maxLen[index] = Math.max(maxLen[index], k);
  }

  // Sum up all max lengths (each accounts for 1-letter, 2-letter,... substrings)
  return maxLen.reduce((a, b) => a + b, 0);
};


console.log(findSubstringInWraproundString("a")) // 1
console.log(findSubstringInWraproundString("cac")) // 2
console.log(findSubstringInWraproundString("zab")) // 6

console.log(findSubstringInWraproundString("abcd")) // 10
console.log(findSubstringInWraproundString("abx")) // 4
