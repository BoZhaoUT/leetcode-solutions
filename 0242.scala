object Solution {
    def isAnagram(s: String, t: String): Boolean = {
        val sChars = s.groupBy(_.toChar)
        val tChars = t.groupBy(_.toChar)

        println(sChars)
        println(tChars)

        val diff = sChars.toSet diff tChars.toSet

        println(diff)
        return diff.size == 0
    }
}

// println(Solution.isAnagram("anagram", "nagaram")) // true
// println(Solution.isAnagram("rat", "car")) // false
println(Solution.isAnagram("a", "ab")) // false

