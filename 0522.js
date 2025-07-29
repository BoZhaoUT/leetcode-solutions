/**
 * @param {string[]} strs
 * @return {number}
 */
const findLUSlength = (strs) => {
  // sort strings in descending orders by their length
  strs.sort((a, b) => b.length - a.length)

  // go through each str and find if it's a subsequence of any other strings
  for (let i = 0; i < strs.length; i++) {
    let common = false

    for (let j = 0; j < strs.length; j++) {
      // skip comparing again itself
      if (i !== j) {
        if (isSubsequence(strs[i], strs[j])) {
          common = true
        }
      }
    }

    if (!common) {
      return strs[i].length
    }
  }

  return -1
}

/*
 * Return true if a is a subsequence of b
 */
const isSubsequence = (a, b) => {
  if (a === b) {
    return true
  }
  let i = 0, j = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++
    }
    j++
  }
  return i === a.length
}


console.log(findLUSlength(["aba","cdc","eae"])) // 3
console.log(findLUSlength(["aaa","aaa","aa"])) // -1

console.log(findLUSlength(["abc","ab"])) // 3
console.log(findLUSlength(["ab","ba"])) // 2
console.log(findLUSlength(["a","aa","aaa"])) // 3
console.log(findLUSlength(["aaa","aaa","bb"])) // 2