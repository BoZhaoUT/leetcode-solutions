object Solution {
    def isAnagram(s: String, t: String): Boolean = {
        val sChars = s.groupBy(_.toChar)
        val tChars = t.groupBy(_.toChar)

        return sChars.equals(tChars)
    }
}

// println(Solution.isAnagram("anagram", "nagaram")) // true
// println(Solution.isAnagram("rat", "car")) // false
// println(Solution.isAnagram("a", "ab")) // false

