/*
 * NOTES:
 *
 * | OR
 * 
 * Quantifiers:
 * ? 0 or 1 times
 * * 0 or many times
 * + 1 or many times
 * {3} exactly 3 times
 * {2,6} {min, max} number of occurences
 * {8,} at least 8 characters
 * 
 * Flags:
 * /g matches all occurences
 * /i case insensitive
 * 
 * \ escape any special characters
 * \d any digit <- same as [0-9]
 * \D not a digit <- same as [^0-9]
 * \w any word character (including '-') <- same as [A-Za-z0-9_]
 * \W not a word character <- same as [^A-Za-z0-9_], e.g. it matches %
 * \s white space, tabs, line breaks
 * \S not any of white space, tabs, line breaks
 * \t tabs
 * \n line breaks
 * . any character except new line
 * [A-Z] all capital letters
 * [WMT] a custom character set 
 * [^WMT] anything that's not 'W', 'M' or 'T'
 * ^ matches the beginning of a string
 * $ matches the end of a string
 * 
 * Lookaround:
 * q(?=u) positive lookahead, matche any 'q' followed by 'u'
 * q(!=u) negative lookahead, do not match any 'q' followed by 'u'
 * (?<=a)b positive lookbehind, match ''b' follows 'a'
 * (?<!a)b negative lookbehind, do not match 'b' follows 'a'
 * 
 *
 * Cheat sheet: https://fireship.io/lessons/regex-cheat-sheet-js/
 * Playgroud: https://regexr.com/
 *
 */


// const regex = /something/ // same as `new RegExp(/something/)`

// // match
// let match = "Some Text".match(/Some/);
// console.log(match) // [ 'Some', index: 0, input: 'Some Text', groups: undefined ]

// match = "Some Text Somf".match(/Som\w/g);
// console.log(match) // [ 'Some', 'Somf' ]

// // search
// const search = "Some Text Some".search(/Some/)
// console.log(search) // 0 <- index of first occurences

// // replace
// let replace = "Some Text Some".replace(/Some/, "Replaced")
// console.log(replace) // Replaced Text Some <- replace 1st occurence

// replace = "Some Text Some".replace(/Some/g, "Replaced")
// console.log(replace) // Replaced Text Replaced <- replace all occurences


// examples
// /[A-Z]\w+/ <- any word starts with a capital letter


// exercise
// check if a password has a minimum of 8 characters and contains
// at least 1 capital letter
// at least 1 lowercase letter
// at least 1 number


const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g

console.log("1sMyPasswordOK?".search(re))   // 0 <- valid password
console.log("1sMy".search(re))              // -1 <- invalid password