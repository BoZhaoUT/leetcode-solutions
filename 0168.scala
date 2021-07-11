object Solution {
    def convertToTitle(columnNumber: Int): String = {
        var result = ""
        var num = columnNumber
        while (num > 0) {
            num -= 1
            val char = num % 26
            num = num / 26
            result = char + result
        }
        return result
    }
}

// Solution.convertToTitle(28)


// explanation
// https://leetcode.com/problems/excel-sheet-column-title/discuss/441430/Detailed-Explanation-Here's-why-we-need-n-at-first-of-every-loop-(JavaPythonC%2B%2B)
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27  <- this is different from a regular 26-nary number, because 
// AB -> 28 

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
