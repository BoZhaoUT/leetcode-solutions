object Solution {
    def canWinNim(n: Int): Boolean = {
        n % 4 != 0;
    }
}

// https://leetcode.com/problems/nim-game/discuss/73749/Theorem%3A-all-4s-shall-be-false

// println(Solution.canWinNim(1)) // true
// println(Solution.canWinNim(2)) // true
// println(Solution.canWinNim(3)) // true
// println(Solution.canWinNim(4)) // false
// println(Solution.canWinNim(5)) // true
