/* The isBadVersion API is defined in the parent class VersionControl.
      def isBadVersion(version: Int): Boolean = {} */

class Solution extends VersionControl {
    def firstBadVersion(n: Int): Int = {
        var lower = 1
        var upper = n
        while (lower < upper) {
            // (upper + lower) / 2 can cause overflow
            val mid = (upper - lower) / 2 + lower
            val isBad = isBadVersion(mid)
            if (isBad) {
                upper = mid
            } else {
                lower = if (lower + 1 == upper) upper else mid
            }
        }
        return lower
    }
}
