import scala.collection.mutable.{HashMap, HashSet}

object Solution {
    def isIsomorphic(s: String, t: String): Boolean = {
        if (s.length != t.length) {
            return false
        }

        val charMap = HashMap[Char, Char]()
        // mappedChar keeps the values of charMap
        // it makes sure each char in t has only 1 association
        // with a char in s
        val tChars = HashSet[Char]()

        var i = 0
        var result = true
        while (i < s.length && result) {
            val sChar = s(i)
            var tChar = t(i)
            // existing mapping
            if (charMap.contains(sChar) && charMap(sChar) == tChar) {
                i += 1
            } else {
                if (charMap.contains(sChar) || tChars.contains(tChar)) {
                    result = false
                } else {
                    charMap(sChar) = tChar
                    tChars.add(tChar)
                    i += 1
                }
            }

            if (charMap.contains)
        }

        return result
    }
}

println(Solution.isIsomorphic("egg", "add")) // true
println(Solution.isIsomorphic("egg", "abc")) // false
println(Solution.isIsomorphic("foo", "bar")) // false
