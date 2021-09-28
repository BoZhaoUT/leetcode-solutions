object Solution {
    def isPowerOfThree(n: Int): Boolean = {
        if (n <= 0) {
            return false
        }
        return 1162261467 % n == 0
    }
}

// https://leetcode.com/problems/power-of-three/discuss/677418/Scala-very-simple-logic-to-determine-power-of-3