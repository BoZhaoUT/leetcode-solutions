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
        while (i < s.length && !result) {
            val sChar = s(i)
            var tChar = t(i)
            if (charMap(sChar) == tChar) {
                println("existing s -> t", sChar, tChar)
                i += 1
            } else {
                if (tChars.contains(tChar)) {
                    println("redundant mapping", sChar, tChar)
                    result = false
                } else {
                    println("new mapping", sChar, tChar)
                    charMap(sChar) = tChar
                    i += 1
                }
            }
        }

        return result
    }
}

// println(Solution.isIsomorphic("egg", "add")) // true
println(Solution.isIsomorphic("egg", "abc")) // false
// println(Solution.isIsomorphic("foo", "bar")) // false
