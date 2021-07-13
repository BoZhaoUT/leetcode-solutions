object Solution {
    def convertToTitle(columnNumber: Int): String = {
        var result = ""
        var num = columnNumber
        while (num > 0) {
            num -= 1
            val digit = num % 26
            val char = (digit + 65).toChar
            result = char + result
            num = num / 26
        }
        return result
    }
}

// println(Solution.convertToTitle(2))
// println(Solution.convertToTitle(28))


// explanation
// https://leetcode.com/problems/excel-sheet-column-title/discuss/441430/Detailed-Explanation-Here's-why-we-need-n-at-first-of-every-loop-(JavaPythonC%2B%2B)

// Excel number is different from a regular 26-nary system, because it doesn't have numbers like 0, 10, 100, 1000, ... in decimal system
// comparision
// decimal     regular 26-nary         excel number system
// 0               0                       ?
// 1               1                       A
// 2               2                       B
// ...
// 9               9                       I
// 10              a                       J   <- the smallest 2-digit number in decimal is made up by (second smallest digit)(smallest digit) = 10
// 11              b                       K
// ...
// 24              o                       X
// 25              p                       Y
// 26              10                      Z   <- the smallest 2-digit number in 26-nary is made up by (second smallest digit)(smallest digit) = 10
// 27              11                      AA  <- the smallest 2-digit number in Excel is made up by (smallest digit)(smallest digit) = AA
// in order to overcome the difference, we need to subtract 1 from the num every time we calculate an "Excel digit"


// class Solution {
//     public String convertToTitle(int n) {
//         StringBuilder sb = new StringBuilder();
//         while(n > 0){
//             n--;
//             int curr = n%26;
//             n /= 26;
//             sb.append((char)(curr+'A'));
//         }
//         return sb.reverse().toString();
//     }
// }
