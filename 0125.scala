object Solution {
    def isPalindrome(s: String): Boolean = {
        var left = 0
        var right = s.length - 1

        var result = true

        while (left < right && result) {
            // find next char from left
            while (left < right && !s(left).isLetterOrDigit) {
                left += 1
            }

            // find next char from right
            while (left < right && !s(right).isLetterOrDigit) {
                right -= 1
            }

            result = s(left).toLower == s(right).toLower
            left += 1
            right -= 1
        }

        return result
    }
}