/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  const array = s.split("")
  const result = array.map((char, i) => {
    const kCount = Math.floor(i / k)
    if (kCount % 2 === 1) {
      return char
    } else {
      const lastCharIndex = Math.min(s.length - 1, kCount * k - 1 + k)
      return s[lastCharIndex - (i % k)]
    }
  })

  return result.join("")
}

console.log(reverseStr("abcdefg", 2)) // "bacdfeg"
console.log(reverseStr("abcd", 2)) // "bacd"

console.log(reverseStr("a", 1)) // "a"
console.log(reverseStr("abcdefg", 1)) // "abcdefg"
console.log(reverseStr("abc", 10)) // "cba"
console.log(reverseStr("abc", 3)) // "cba"
console.log(reverseStr("abcd", 3)) // "cbad"
console.log(reverseStr("abcde", 3)) // "cbade"
console.log(reverseStr("abcdef", 3)) // "cbadef"
console.log(reverseStr("abcdefg", 3)) // "cbadefg"
console.log(reverseStr("abcdefgh", 3)) // "cbadefhg"
console.log(reverseStr("abcdefghijklmn", 3)) // "cbadefihgjklnm"


/*

k = 3
i = 0, => i = 2, k - i + 1 = 3 - 0 -1
i = 1, => i = 1, k - i + 1 = 3 - 1 -1 = 1
i = 2, => i = 0, k - i + 1 = 3 - 2 - 1

i = 3, => 3
i = 4, => 4
i = 5, => 5

i = 6, => 8, k - mod - 1 + i = 3 - 0 - 1 + 6 = 8
i = 7, => 7,                   3 - 1 - 1 + 6 = 7 
i = 8, => 6,                  = 3 - 2 - 1 + 6 = 

i = 9
i = 10
i = 11

i = 12 => k - mod - 1 + 4k = 3 - 0 - 1 + 12 = 14
i = 13 => k - mod - 1 + 4k = 3 - 1 - 1 + 12 = 13
i = 14 => k - mod - 1 + 4k = 3 - 2 - 1 + 12 = 12

k - mod - 1 + 2k


0k - 1k => k - mod - 1
1k - 2k => i
2k - 3k => k - mod - 1 + 2k
3k - 4k => i
4k - 5k => k - mod - 1 + 4k




*/